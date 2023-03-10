import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Axios from 'axios';
import { Box, Typography } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircleIcon from '@mui/icons-material/Circle';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
} from "chart.js";

import { Radar, Bar } from "react-chartjs-2";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
);


const colorSet = ['#39B5E0', '#A31ACB', '#54B435', '#FF6D28', '#FB2576', '#FFFF00', '#28DF99', '#B983FF']

const options = {
    scales: {
        r: {
            angleLines: {
                display: true
            },
            pointLabels: {
                display: false
            },
            suggestedMin: 0,
            suggestedMax: 100
        },
    },
    plugins: {
        legend: {
            display: false
        },
    }
};

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function AnalysisDialog({ openAnalysis, setOpenAnalysis, exam_id, user_id, ProductName }) {

    const [answered, setAnswered] = useState([])

    useEffect(() => {
        Axios.post("http://localhost:8000/getAnswered", {
            exam_id: exam_id,
            user_id: user_id
        }).then((res) => {
            setAnswered(JSON.parse(res.data[0].answer))
        })
    }, [user_id, exam_id])

    console.log(answered);

    const handleCloseAnalysis = () => {
        setOpenAnalysis(false)
    };

    const pointByGroup = answered?.reduce((acc, item) => {
        const exists = acc.find(i => i.category === item.category)
        if (!exists) {
            acc.push({
                category: item.category,
                point: item.point,
                fullScore: item.fullScore,
            });
        } else {
            exists.point += item.point;
            exists.fullScore += item.fullScore;
        }

        return acc;
    }, []);

    console.log(pointByGroup);

    const data = {
        labels: pointByGroup?.map(val => val.category),
        datasets: [
            {
                label: "exam",
                data: pointByGroup?.map(val => (val.point / val.fullScore) * 100),
                backgroundColor: "#a3cc5370",
                borderColor: "black",
                borderWidth: 5,
                pointRadius: 7,
                pointBackgroundColor: colorSet,
                pointBorderColor: colorSet
            },
        ],
    };


    return (
        <Dialog
            open={openAnalysis}
            onClose={handleCloseAnalysis}
            TransitionComponent={Transition}
            fullWidth
            maxWidth="xl"
            keepMounted>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton
                    aria-label="close"
                    onClick={handleCloseAnalysis}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Box sx={{
                    display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-evenly'
                }}>
                    <Box my={2} sx={{ width: { xs: '300px', md: '300px' }, alignSelf: 'center' }}>
                        <Radar data={data} options={options} />
                    </Box>
                    <Box mt={2} mb={{ xs: 10, md: 0 }}>
                        <Box mb={2} sx={{ borderLeft: '5px solid #a3cc53' }}>
                            <Typography variant='h5' ml={1}>{ProductName}</Typography>
                        </Box>
                        <TableContainer component={Paper}>
                            <Table >
                                <TableHead>
                                    <TableRow sx={{ background: '#0e3746' }}>
                                        <TableCell sx={{ color: '#a3cc53', fontSize: '1.2rem' }} align="center">??????????????????</TableCell>
                                        <TableCell sx={{ color: '#a3cc53', fontSize: '1.2rem', width: '100px' }} align="center">???????????????????????????</TableCell>
                                        <TableCell sx={{ color: '#a3cc53', fontSize: '1.2rem', width: '100px' }} align="center">?????????????????????????????????</TableCell>
                                        <TableCell sx={{ color: '#a3cc53', fontSize: '1.2rem', width: '100px' }} align="center">??????????????????(%)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {pointByGroup.map((row, key) => (
                                        <TableRow
                                            key={key}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" sx={{ display: 'flex' }}>
                                                <CircleIcon sx={{ alignSelf: 'center', color: colorSet[key] }} />
                                                <Typography pl={1} sx={{ fontSize: '1rem', color: colorSet[key] }}> {row.category}</Typography>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Typography sx={{ fontSize: '1rem' }}>{row.fullScore}</Typography>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Typography sx={{ fontSize: '1rem' }}>{row.point}</Typography>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Typography sx={{ fontSize: '1rem' }}>{((row.point / row.fullScore) * 100).toFixed(2)}</Typography>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default AnalysisDialog