import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Axios from 'axios';
import { Box, Typography, Button } from '@mui/material'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import Badge from '../../asset/badge.png'

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={1} {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: '#a3cc5325',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const colorSet = ['#39B5E0', '#A31ACB', '#54B435', '#FF6D28', '#FB2576', '#FFFF00', '#28DF99', '#B983FF', '#810034', '#00AF91', '#C9F658']



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function HistoryDialog({ openHistory, setOpenHistory, exam_id, setExamId, user_id, ProductName }) {

    const [allRecord, setAllRecord] = useState([])
    const [answered, setAnswered] = useState([])
    const [select, setSelect] = useState(0)


    useEffect(() => {
        Axios.post("http://localhost:8000/getAnswered", {
            exam_id: exam_id,
            user_id: user_id
        }).then((res) => {
            setAllRecord(res.data)
            setAnswered(JSON.parse(res.data[select].answer))
        })

    }, [user_id, exam_id, select])

    console.log(allRecord);

    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleCloseHistory = () => {
        setExamId()
        setOpenHistory(false)
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

    return (
        <Dialog
            open={openHistory}
            onClose={handleCloseHistory}
            TransitionComponent={Transition}
            fullWidth
            maxWidth="lg"
            keepMounted>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton
                    aria-label="close"
                    onClick={handleCloseHistory}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>


                <Box mb={10}>
                    <Box mb={2} sx={{ borderLeft: '5px solid #a3cc53' }}>
                        <Typography variant='h5' ml={1}>{ProductName}</Typography>
                    </Box>
                    {allRecord?.length === 0 ? <Typography sx={{ ml: 5 }}>ยังไม่มีประวัติการทำข้อสอบ</Typography> :
                        <>
                            {allRecord?.map((val, key) => {
                                return (
                                    <Accordion expanded={expanded === `panel${key}`} onChange={handleChange(`panel${key}`)}>
                                        <AccordionSummary>
                                            <Typography>{formatDate(val.submit_at)}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ display: 'flex' }}>

                                            <Box component='img' src={Badge} width={200} />

                                            <Box alignSelf='center'>
                                                <Typography>
                                                    ใช้เวลา  {new Date((val.timeSpend) * 1000).toISOString().substring(14, 19)} นาที
                                                </Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <Typography >
                                                        คะแนนที่ได้
                                                    </Typography>
                                                    <Typography variant='h4' mx={1} sx={{ color: val.score >= val.fullScore / 2 ? 'green' : 'red' }}>
                                                        {val.score}
                                                    </Typography>
                                                    <Typography >
                                                        /{val.fullScore} คะแนน
                                                    </Typography>

                                                </Box>
                                                <Button>
                                                    ดูการตอบ
                                                </Button>
                                            </Box>

                                        </AccordionDetails>
                                    </Accordion>
                                )
                            })}
                        </>
                    }
                </Box>

            </DialogContent>
        </Dialog>
    )
}

export default HistoryDialog