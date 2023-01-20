import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { Link } from '@mui/material';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler, ArcElement, Tooltip, Legend
} from 'chart.js';

import { Radar } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {
    CardActionArea,
    CardActions,
    Typography,
    Box,
    Button
} from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
ChartJS.register(RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    ArcElement,
    Tooltip,
    Legend);


export const dataRadar = {
    labels: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 4', 'Topic 5', 'Topic 6'],
    datasets: [
        {
            label: 'A-Level',
            data: [78, 91, 61, 43, 100, 69, 54],
            backgroundColor: '#a3cc5380',
            borderColor: '#0e3746',
            borderWidth: 3,
        },
    ],
};

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function ProfileAnalysis({ user }) {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [myExamList, setMyExamList] = useState([])

    useEffect(() => {
        Axios.post('http://localhost:8000/getuserproductandexams', {
            user_id: user.user_id
        }).then((res) => {
            setMyExamList(res.data)
        })
    }, [])


    return (
        <>
            <Box m={2}>
                <Typography sx={{ display: 'inline', fontSize: '2rem', borderBottom: '4px solid #a3cc53', }}>
                    วิเคราะห์คะแนน
                </Typography>
            </Box>

            <Box p={{ xs: 1, md: 2 }} m={{ xs: 1, md: 2 }} sx={{ borderRadius: 3, bgcolor: 'white', boxShadow: 1 }}>

                <Box sx={{
                    display: myExamList?.length === 0 ? 'block' : 'none',
                }}>
                    <Typography sx={{ textAlign: 'center', fontSize: '1.2rem' }}>
                        ยังไม่มีผลการทำข้อสอบ
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }}>
                        <Typography
                            component={Link}
                            href='/profile' onClick={() => localStorage.setItem('ActiveContent', 'profile-myexam')}>
                            ทำข้อสอบ
                        </Typography>
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1, md: 2 }, marginBottom: '80px', marginTop: 2 }}>

                    {myExamList?.map((val, key) => {
                        return (
                            <>
                                <Card sx={{ width: { xs: 175, md: 225 }, borderRadius: 7 }} key={key}>
                                    <CardActionArea href={`/introduction/${val.id}`}>
                                        <CardMedia
                                            component="img"
                                            height="150px"
                                            image={val.pic}
                                            alt={val.name}
                                        />
                                        <CardContent>
                                            <Typography noWrap sx={{ fontSize: '1.2rem', fontWeight: 600 }}>
                                                {val.name}
                                            </Typography>
                                            <Typography color="text.secondary"
                                                sx={{
                                                    height: '50px',
                                                    fontSize: '.85rem'
                                                }}>
                                                {val.detail}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions sx={{ display: 'flex', height: '35px', justifyContent: 'center' }}>
                                        <Button
                                            variant='contained'
                                            color='warning'
                                            sx={{
                                                borderRadius: 5
                                            }}
                                            onClick={() => handleClickOpen()}>
                                            ดูผลการวิเคราะห์คะแนน
                                        </Button>
                                    </CardActions>


                                </Card>
                            </>
                        )
                    })}

                </Box>
            </Box>


            <Dialog
                open={open}
                TransitionComponent={Transition}
                fullWidth={true}
                keepMounted
                maxWidth='lg'
                onClose={handleClose}
            >
                <DialogTitle sx={{ textAlign: 'center', fontSize: '2rem' }}>วิเคราะห์คะแนน</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', width: 'auto' }}>
                                <Radar data={dataRadar} />
                            </Box>
                        </Box>
                    </DialogContentText>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default ProfileAnalysis