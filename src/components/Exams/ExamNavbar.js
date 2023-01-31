import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import logo from '../../asset/Jknowledge-Logo.png';
import ExamTimeClock from './ExamTimeClock';

const ExamNavbar = ({ timeControl, setTimeControl, timeSpend, setTimeSpend, duration, setOpenDialog }) => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <AppBar position="sticky"
                sx={{ background: '#0e3746' }}
            >
                <Container maxWidth="xl" >
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Box>
                            <IconButton
                                size="large"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="black"
                            >
                                <MenuIcon sx={{ color: '#a3cc53' }} />
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
                            </Menu>
                        </Box>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            <Box component='img' src={logo} width="175px" />
                        </Typography>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            <Box component='img' src={logo} width='175px' />
                        </Typography>

                        <Box sx={{ width: { xs: '75px', sm: '250px' } }}>

                            <ExamTimeClock
                                timeControl={timeControl}
                                setTimeControl={setTimeControl}
                                timeSpend={timeSpend}
                                setTimeSpend={setTimeSpend}
                                duration={duration}
                                setOpenDialog={setOpenDialog}
                            />
                        </Box>

                    </Toolbar>
                </Container>
                <Box sx={{ height: '5px', bgcolor: '#a3cc53' }} />
            </AppBar >
        </>
    );
};
export default ExamNavbar;
