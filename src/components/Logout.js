import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box'
import Zoom from '@mui/material/Zoom'
import { Typography } from '@mui/material';
import Appbar from '../components/Appbar'

const icon = (
    <Box component="svg" sx={{ display: 'flex', justifyContent: 'center'}}>
        <CheckCircleIcon color="success" />
    </Box>
);

export default function Logout() {

    useEffect(() => {
        localStorage.clear();
        setChecked(true)
    }, [])


    const [checked, setChecked] = useState(false);
    const [open, setOpen] = useState(setTimeout(function () {
        handleClose()
    }, 1500))


    const handleClose = () => {
        setOpen(false)
        window.location = '/'
    };


    return (
        <>
            <Appbar />
            <Dialog
                open={open ? true : false}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogContent>
                    <Box p={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Zoom in={checked}>{icon}</Zoom>
                        <Typography>ออกจากระบบเสร็จสิ้น</Typography>
                    </Box>
                </DialogContent>
            </Dialog>


        </>
    );
}