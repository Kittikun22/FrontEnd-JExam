import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HistoryIcon from '@mui/icons-material/History';
import { Link } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export default function ProfileDrawer({ user, setActiveContent, openDrawer, setOpenDrawer, handleOpenLogin }) {

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    const handleSetActiveContent = (activeContent) => {
        localStorage.setItem('ActiveContent', activeContent)
    }

    return (
        <Drawer
            anchor={'right'}
            open={openDrawer}
            onClose={handleDrawerClose}
        >
            <Box
                sx={{ width: 250, height: '100%', background: '#0e3746', borderLeft: 5, borderColor: '#a3cc53' }}
                onClick={handleDrawerOpen}
                onKeyDown={handleDrawerClose}

            >
                {user ?
                    <List>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                mb: '20px',
                                minWidth: '225px'
                            }}>

                            <Avatar
                                sx={{
                                    width: "125px", height: "125px",
                                    borderRadius: 50, border: 4,
                                    borderColor: '#a3cc53', mb: 2
                                }}
                                src={user.user_pic}
                            />

                            <Typography mx={2} sx={{ fontSize: '1.3rem', color: '#a3cc53' }}>
                                {user.fname} {user.lname}
                            </Typography>
                        </Box>

                        <Divider />

                        <ListItemButton
                            component={Link}
                            href='/'
                        >
                            <ListItemIcon>
                                <HomeIcon sx={{ color: '#a3cc53' }} />
                            </ListItemIcon>
                            <ListItemText primary="?????????????????????" sx={{ color: '#a3cc53' }} />
                        </ListItemButton>

                        <Divider />

                        <ListItemButton
                            onClick={() => { handleSetActiveContent('profile-homepage') }}
                            component={Link}
                            href='/profile'
                        >
                            <ListItemIcon>
                                <AccountCircleIcon sx={{ color: '#a3cc53' }} />
                            </ListItemIcon>
                            <ListItemText primary="???????????????????????????????????????" sx={{ color: '#a3cc53' }} />
                        </ListItemButton>

                        <ListItemButton
                            onClick={() => { handleSetActiveContent('profile-myexam') }}
                            component={Link}
                            href='/profile'
                        >
                            <ListItemIcon>
                                <AutoStoriesIcon sx={{ color: '#a3cc53' }} />
                            </ListItemIcon>
                            <ListItemText primary="????????????????????????????????????" sx={{ color: '#a3cc53' }} />
                        </ListItemButton>

                        <ListItemButton
                            onClick={() => { handleSetActiveContent('profile-analysis') }}
                            component={Link}
                            href='/profile'
                        >
                            <ListItemIcon>
                                <AssessmentIcon sx={{ color: '#a3cc53' }} />
                            </ListItemIcon>
                            <ListItemText primary="??????????????????????????????????????????" sx={{ color: '#a3cc53' }} />
                        </ListItemButton>

                        <ListItemButton
                            onClick={() => { handleSetActiveContent('profile-history') }}
                            component={Link}
                            href='/profile'
                        >
                            <ListItemIcon>
                                <HistoryIcon sx={{ color: '#a3cc53' }} />
                            </ListItemIcon>
                            <ListItemText primary="??????????????????????????????????????????????????????" sx={{ color: '#a3cc53' }} />
                        </ListItemButton>

                        <Divider />

                        <ListItemButton
                            onClick={() => { handleSetActiveContent('profile-payment') }}
                            component={Link}
                            href='/profile'
                        >
                            <ListItemIcon>
                                <CreditCardIcon sx={{ color: '#a3cc53' }} />
                            </ListItemIcon>
                            <ListItemText primary="?????????????????????????????????" sx={{ color: '#a3cc53' }} />
                        </ListItemButton>

                        <ListItemButton
                            onClick={() => { handleSetActiveContent('profile-setting') }}
                            component={Link}
                            href='/profile'
                        >
                            <ListItemIcon>
                                <SettingsIcon sx={{ color: '#a3cc53' }} />
                            </ListItemIcon>
                            <ListItemText primary="????????????????????????????????????" sx={{ color: '#a3cc53' }} />
                        </ListItemButton>

                        <Divider />

                        <ListItemButton
                            component={Link}
                            href='/logout'>
                            <ListItemIcon>
                                <LogoutIcon sx={{ color: '#FF4A4A' }} />
                            </ListItemIcon>
                            <ListItemText primary="??????????????????????????????" sx={{ color: '#FF4A4A' }} />
                        </ListItemButton>
                    </List>
                    :
                    <List>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '20px', minWidth: '225px' }}>

                            <Avatar
                                sx={{
                                    width: "125px", height: "125px",
                                    borderRadius: 50, border: 3,
                                    borderColor: '#379237', mb: 2
                                }}
                                src=''
                            />
                        </Box>

                        <Divider />

                        <ListItemButton onClick={handleOpenLogin}>
                            <ListItemIcon>
                                <LoginIcon sx={{ color: '#a3cc53' }} />
                            </ListItemIcon>
                            <ListItemText primary="?????????????????????????????????" sx={{ color: '#a3cc53' }} />
                        </ListItemButton>

                        <ListItemButton
                            component={Link}
                            href='/register'
                        >
                            <ListItemIcon>
                                <AppRegistrationIcon sx={{ color: '#a3cc53' }} />
                            </ListItemIcon>
                            <ListItemText primary="?????????????????????????????????" sx={{ color: '#a3cc53' }} />
                        </ListItemButton>

                    </List>
                }
                <Divider />
                <List>

                </List>
            </Box>
        </Drawer>

    );
}
