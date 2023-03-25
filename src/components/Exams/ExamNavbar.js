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
import ExamDrawer from './ExamDrawer';

const ExamNavbar = ({ timeControl, setTimeControl, timeSpend, setTimeSpend, duration, setOpenDialog, examContent, answers, examName, handleExamSubmit, setOpenSubmitDialog, handleGoToQuestion }) => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <>
            <ExamDrawer
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
                examContent={examContent}
                answers={answers}
                examName={examName}
                handleExamSubmit={handleExamSubmit}
                setOpenSubmitDialog={setOpenSubmitDialog}
                handleGoToQuestion={handleGoToQuestion}
            />

            <AppBar position="sticky"
                sx={{ background: '#0e3746' }}
            >
                <Container maxWidth="xl" >
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Box>
                            <IconButton
                                size="large"
                                aria-haspopup="true"
                                onClick={handleDrawerOpen}
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
                                onClose={handleDrawerClose}
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
                                position: 'absolute',
                                left: '45%'
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
                                handleExamSubmit={handleExamSubmit}
                            />
                        </Box>

                    </Toolbar>
                </Container>
                <Box sx={{ height: '5px', bgcolor: '#a0d64b' }} />
            </AppBar >
        </>
    );
};
export default ExamNavbar;
