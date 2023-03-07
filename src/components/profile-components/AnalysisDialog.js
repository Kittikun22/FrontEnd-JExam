import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import Axios from 'axios';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function AnalysisDialog({ openAnalysis, setOpenAnalysis, exam_id, user_id }) {

    const [answered, setAnswered] = useState([])

    useEffect(() => {
        Axios.post("http://localhost:8000/getAnswered", {
            exam_id: exam_id,
            user_id: user_id
        }).then((res) => {
            setAnswered(res.data)
        })
    }, [])

    console.log(answered);

    const handleCloseAnalysis = () => {
        setOpenAnalysis(false)
    };


    return (
        <Dialog
            open={openAnalysis}
            onClose={handleCloseAnalysis}
            TransitionComponent={Transition}
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
                <Stack spacing={2}>

                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default AnalysisDialog