import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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


const colorSet = ['#39B5E0', '#A31ACB', '#54B435', '#FF6D28', '#FB2576', '#FFFF00', '#28DF99', '#B983FF', '#810034', '#00AF91', '#C9F658']

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


function AnalysisDialog({ openAnalysis, setOpenAnalysis, exam_id, setExamId, user_id, ProductName }) {

    const [allRecord, setAllRecord] = useState([])
    const [answered, setAnswered] = useState([])
    const [select, setSelect] = useState(0)


    const handleChange = (event) => {
        setSelect(event.target.value);
    };

    useEffect(() => {
        Axios.post("http://localhost:8000/getAnswered", {
            exam_id: exam_id,
            user_id: user_id
        }).then((res) => {
            setAllRecord(res.data)
            setAnswered(JSON.parse(res.data[select].answer))
        })

    }, [user_id, exam_id, select])


    const handleCloseAnalysis = () => {
        setExamId()
        setAnswered([])
        setAllRecord([])
        setOpenAnalysis(false)
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

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

    const data = {
        labels: pointByGroup?.map(val => val.category),
        datasets: [
            {
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
            maxWidth="lg"
            keepMounted
        >
            <DialogTitle sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton
                    aria-label="close"
                    onClick={handleCloseAnalysis}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ minHeight: '30vh' }}>
                {allRecord?.length === 0 ?
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <Box mb={2} sx={{ borderLeft: '5px solid #a3cc53' }}>
                            <Typography variant='h5' ml={1}>{ProductName}</Typography>
                        </Box>
                        <Typography ml={5}>
                            ยังไม่มีการทำข้อสอบ
                        </Typography>
                    </Box>

                    :

                    <Box sx={{
                        display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-evenly'
                    }}>
                        <Box my={2} sx={{ width: { xs: '200px', md: '300px' }, alignSelf: 'center' }}>
                            <Radar data={data} options={options} />
                        </Box>

                        <Box mt={2} mb={10}>
                            <Box mb={2} sx={{ borderLeft: '5px solid #a3cc53' }}>
                                <Typography variant='h5' ml={1}>{ProductName}</Typography>
                            </Box>
                            <Box my={2}>
                                <FormControl fullWidth>
                                    <InputLabel>เวลา</InputLabel>
                                    <Select
                                        size='small'
                                        value={select}
                                        label="เวลา"
                                        onChange={handleChange}
                                    >
                                        {allRecord?.map((val, key) => {
                                            return (
                                                <MenuItem key={key} value={key}>ครั้งที่ {key + 1}, {formatDate(val.submit_at)}</MenuItem>
                                            )
                                        })}

                                    </Select>
                                </FormControl>
                            </Box>
                            <TableContainer component={Paper}>
                                <Table >
                                    <TableHead>
                                        <TableRow sx={{ background: '#0e3746' }}>
                                            <TableCell sx={{ color: '#a3cc53', fontSize: '1.1rem' }} align="center">หัวข้อ</TableCell>
                                            <TableCell sx={{ color: '#a3cc53', fontSize: '1.1rem', width: '100px' }} align="center">คะแนนเต็ม</TableCell>
                                            <TableCell sx={{ color: '#a3cc53', fontSize: '1.1rem', width: '100px' }} align="center">คะแนนที่ได้</TableCell>
                                            <TableCell sx={{ color: '#a3cc53', fontSize: '1.1rem', width: '100px' }} align="center">ร้อยละ(%)</TableCell>
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
                }

            </DialogContent>
        </Dialog>
    )
}

export default AnalysisDialog