import React, { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Typography, Box } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import Zoom from '@mui/material/Zoom'


const icon = (
    <Box component="svg" sx={{ display: 'flex', justifyContent: 'center' }}>
        <CancelIcon sx={{ color: '#FF4A4A' }} />
    </Box>
);

function ExamAlertDialog({ openDialog, setOpenDialog, message, productId }) {

    useEffect(() => {
        if (openDialog === true) {
            setTimeout(() => {
                handleClose()
            }, 2000);
        }

    }, [openDialog])

    const handleClose = () => {
        setOpenDialog(false);
        window.location = `/introduction/${productId}`
    };

    return (
        <Dialog
            open={openDialog}
            onClose={handleClose}
            fullWidth={true}
            maxWidth={'sm'}
        >
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: '', md: 'center' } }}>
                <Zoom in={true}>{icon}</Zoom>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: 600, width: '265px', textAlign: 'center' }}>{message}</Typography>

            </DialogContent>
        </Dialog>
    )
}

export default ExamAlertDialog