import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../asset/Jknowledge-Logo.png';
import { Link, Snackbar, Alert } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from './Login-Dialog'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import BottomNavbar from './BottomNavbar';
import ProfileDrawer from '../components/profile-components/ProfileDrawer';
import { useAuthState, useAuthDispatch } from '../context/AuthContext'

const CryptoJS = require("crypto-js");
const EncryptSecret = 'Jknow2022'

const pages = [
    {
        pageName: 'ข้อสอบ',
        url: '/exam-library'
    },
    {
        pageName: 'คู่มือการใช้งาน',
        url: '/manual'
    },
    {
        pageName: 'คำถามพี่พบบ่อย',
        url: '#'
    }];

const Appbar = ({ setActiveContent, cartItem }) => {

    const { user } = useAuthState();
    const dispatch = useAuthDispatch();

    const [profilePic, setProfilePic] = useState(null);
    const [itemInCart, setItemInCart] = useState()
    // const [itemInCart, setItemInCart] = useState(JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('cart'), EncryptSecret).toString(CryptoJS.enc.Utf8))?.length)

    useEffect(() => {
        if (cartItem) {
            setItemInCart(cartItem?.length)
        } else {
            const encryptCart = localStorage.getItem('cart')
            if (encryptCart) {
                setItemInCart(JSON.parse(CryptoJS.AES.decrypt(encryptCart, EncryptSecret).toString(CryptoJS.enc.Utf8)).length)
            }
        }

        const ciphertext = JSON.parse(localStorage.getItem("users"))
        if (ciphertext) {
            const bytes = CryptoJS.AES.decrypt(ciphertext, EncryptSecret);
            const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            dispatch({
                status: "loggedIn",
                user: decryptedData,
                cart: JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('cart'), EncryptSecret).toString(CryptoJS.enc.Utf8)),
                error: null
            })
            setProfilePic(decryptedData.user_pic)
        }
    }, [cartItem, itemInCart])

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [openLogin, setOpenLogin] = useState(false);

    const handleOpenLogin = () => {
        setOpenLogin(true);
        handleCloseUserMenu();
    }

    const [openDrawer, setOpenDrawer] = useState(false);

    const [openAlert, setOpenAlert] = useState(false);

    const handleClickAlert = () => {
        setOpenAlert(true);
    };

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    return (
        <>
            <Snackbar
                open={openAlert}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                autoHideDuration={3000}
                onClose={handleCloseAlert}
            >
                <Alert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%', }}>
                    ยังไม่พร้อมใช้งาน จะเปิดใช้งานเร็วๆนี้
                </Alert>
            </Snackbar>

            <AppBar position="sticky"
                sx={{ background: '#0e3746' }}
            >
                <Container maxWidth="xl" >
                    <Toolbar disableGutters >
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Box component='img' src={logo} width="175px" duration={0} />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="black"
                            >
                                <MenuIcon sx={{ color: '#a0d64b' }} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'flex', md: 'none' },
                                }}
                            >
                                {pages.map((page, key) => (
                                    <MenuItem
                                        component={Link}
                                        href={page.url}
                                        onClick={handleCloseNavMenu}
                                        key={key}
                                    // onClick={handleClickAlert}
                                    >
                                        <Typography textAlign="center">{page.pageName}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#a0d64b',
                                textDecoration: 'none',
                            }}
                        >
                            <Box component='img' src={logo} width='175px' duration={0} />
                        </Typography>


                        <Box sx={{ ml: 4, justifyContent: 'flex-start', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, key) => (
                                <Button
                                    href={page.url}
                                    onClick={handleCloseNavMenu}
                                    key={key}
                                    // onClick={handleClickAlert}
                                    sx={{
                                        my: 1, color: '#a0d64b', display: 'block', fontSize: '1rem'
                                    }}
                                >
                                    {page.pageName}
                                </Button>
                            ))}
                        </Box>

                        {/* <Box sx={{ mr: { xs: 2, md: 5 } }}>
                            <Tooltip title="ค้นหา">
                                <IconButton
                                    sx={{ p: 0 }}
                                    onClick={handleClickAlert}
                                >
                                    <SearchIcon sx={{ color: '#a0d64b', fontSize: "30px" }} />
                                </IconButton>
                            </Tooltip>
                        </Box> */}


                        <Box sx={{ mr: { xs: 2, md: 4 } }}>
                            <Tooltip title="เปิดรถเข็นสินค้า">
                                <IconButton
                                    sx={{ p: 0 }}
                                    component={Link}
                                    href='/cart'
                                // onClick={handleClickAlert}
                                >
                                    <Badge badgeContent={itemInCart} color="error">
                                        <ShoppingCartIcon sx={{ color: '#a0d64b', fontSize: "30px" }} />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                        </Box>


                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="เปิดตัวเลือก">
                                <IconButton onClick={() => { setOpenDrawer(true) }} sx={{ p: 0 }}>
                                    {profilePic !== null ? <Avatar alt="J Knowledge Tutor" src={`/${profilePic}`} /> : <Avatar alt="J Knowledge Tutor" src='' />}
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
                <Box sx={{ height: '5px', bgcolor: '#a0d64b' }} />
            </AppBar >

            <ProfileDrawer user={user} setActiveContent={setActiveContent} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} handleOpenLogin={handleOpenLogin} />

            <Login openLogin={openLogin} setOpenLogin={setOpenLogin} />

            <BottomNavbar handleClickAlert={handleClickAlert} />
        </>
    );
};
export default Appbar;
