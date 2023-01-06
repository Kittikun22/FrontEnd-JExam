import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from '@mui/material';

export default function BottomNavbar({ handleClickAlert }) {


    return (
        <>
            <Box
                sx={{
                    display: { xs: 'flex', md: 'none' },
                }}
            >
                <Paper
                    sx={{
                        borderTop: '5px solid #a3cc53',
                        zIndex: 10,
                        position: 'fixed',
                        bottom: -1, width: 1,
                    }}
                    elevation={1}
                >
                    <BottomNavigation
                        showLabels
                        sx={{ background: '#0e3746' }}
                    >
                        <BottomNavigationAction
                            component={Link}
                            href="/"
                            sx={{ color: '#a3cc53' }}
                            label="หน้าแรก" icon={<HomeIcon />}
                        />
                        <BottomNavigationAction
                            component={Link}
                            href="/exam-library"
                            sx={{ color: '#a3cc53' }}
                            label="ข้อสอบ" icon={<MenuBookIcon />}
                        />
                        <BottomNavigationAction
                            component={Link}
                            href="/profile"
                            sx={{ color: '#a3cc53' }}
                            label="โปรไฟล์" icon={<AccountCircleIcon />}
                        />
                        <BottomNavigationAction
                            component={Link}
                            href="/cart"
                            sx={{ color: '#a3cc53', }}
                            label="รถเข็น" icon={<ShoppingCartIcon />}
                        />
                        <BottomNavigationAction
                            onClick={handleClickAlert}
                            sx={{ color: '#a3cc53', }}
                            label="แจ้งเตือน" icon={<NotificationsIcon />}
                        />

                    </BottomNavigation>
                </Paper>
            </Box>
        </>
    );
}
