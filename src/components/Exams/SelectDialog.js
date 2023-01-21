import React from 'react'
import { Button, Box } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function SelectDialog({ openSelectDialog, setOpenSelectDialog, exam, setSelectExam, setLoading }) {

    console.log(exam);

    const handleClose = (key) => {
        setSelectExam(key)
        setLoading(true)
        setOpenSelectDialog(false);
    };

    return (
        <>
            <Dialog
                open={openSelectDialog}
                TransitionComponent={Transition}
                fullWidth={true}
                keepMounted
            >
                <DialogTitle sx={{ textAlign: 'center', fontSize: '2rem' }}>เลือกชุดข้อสอบ</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            {exam?.map((val, key) => {
                                return (
                                    <Button variant='contained' key={key} onClick={() => handleClose(key)}>{val.exam_name}</Button>
                                )
                            })}
                            {/* <Button variant='contained' >1111111111</Button>
                            <Button variant='contained' >2222222222</Button> */}


                        </Box>

                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default SelectDialog