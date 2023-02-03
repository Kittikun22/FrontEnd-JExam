import React from 'react'
import { Drawer, Box, Button, Typography, LinearProgress } from '@mui/material'

function ExamDrawer({ openDrawer, setOpenDrawer, examContent, answers, examName, handleExamSubmit, setOpenSubmitDialog }) {

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    const scrollToQuestion = (question_id) => {
        
    }


    let progresses = (answers.length / examContent.length) * 100;

    return (

        <>

            <Drawer
                anchor={'left'}
                open={openDrawer}
                onClose={handleDrawerClose}
            >
                <Box
                    sx={{ width: 275, height: '100%', background: '#0e3746', borderRight: 5, borderColor: '#a3cc53' }}
                    onClick={handleDrawerOpen}
                    onKeyDown={handleDrawerClose}
                >
                    <Box my={5}>
                        <Typography sx={{ fontSize: '1.5rem', color: '#fff', textAlign: 'center' }}>
                            {examName}
                        </Typography>
                    </Box>


                    <Box my={2} sx={{ display: 'flex' }}>
                        <Box sx={{ width: '200px', mx: 2 }}>
                            <LinearProgress variant="determinate" color={progresses === 100 ? 'success' : 'warning'} sx={{ height: 15 }} value={progresses} />
                        </Box>
                        <Box sx={{ minWidth: 35, alignSelf: 'center' }}>
                            <Typography variant="body2" color="#fff">
                                {`${Math.round(progresses)}%`}
                            </Typography>
                        </Box>

                    </Box>

                    <Box my={2}>
                        {examContent?.map((val, key) => {
                            return (
                                <>
                                    {answers.findIndex((answer) => answer.id === val.id) === -1 ?
                                        <Button
                                            key={key}
                                            variant='contained'
                                            color='warning'


                                            sx={{
                                                borderRadius: 3,
                                                minWidth: '50px',
                                                minHeight: '50px',
                                                m: 1
                                            }}
                                        >
                                            <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>
                                                {val.id}
                                            </Typography>
                                        </Button>
                                        :
                                        <Button
                                            key={key}
                                            variant='contained'
                                            color='success'
                                            sx={{
                                                borderRadius: 3,
                                                minWidth: '50px',
                                                minHeight: '50px',
                                                m: 1
                                            }}
                                        >
                                            <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>
                                                {val.id}
                                            </Typography>
                                        </Button>
                                    }
                                </>
                            )
                        })}
                    </Box>

                    <Box mt={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant='contained'
                            color='error'
                            sx={{ borderRadius: 3, width: "125px" }}
                            onClick={() => answers.length !== examContent.length ? setOpenSubmitDialog(true) : handleExamSubmit()}

                        >
                            <Typography sx={{ fontSize: '1.2rem' }}>
                                ส่งคำตอบ
                            </Typography>
                        </Button>
                    </Box>

                </Box>
            </Drawer>
        </>
    )
}

export default ExamDrawer