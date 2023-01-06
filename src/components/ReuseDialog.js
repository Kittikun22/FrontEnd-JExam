import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box'
import Zoom from '@mui/material/Zoom'
import { Typography } from '@mui/material';


const icon = (
    <Box component="svg" sx={{ display: 'flex', justifyContent: 'center'}}>
        <CheckCircleIcon color="success" />
    </Box>
);

export default function ReuseDialog({ message, openDialog, setOpenDialog }) {

    // const [open, setOpen] = useState(false)



    return (
        <>
            <Dialog
                open={openDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogContent>
                    <Box p={10} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Zoom in={true}>{icon}</Zoom>
                        <Typography>{message}</Typography>
                    </Box>
                </DialogContent>
            </Dialog>


        </>
    );
}