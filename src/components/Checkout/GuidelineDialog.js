import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box, Typography } from '@mui/material'
import ScanQRCodeImg from '../../asset/scanQRCodeGL.jpg'
import WaitingImg from '../../asset/waiting.jpg'
import UploadImg from '../../asset/uploadImg.jpg'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function GuidelineDialog({ openGuideline, setOpenGuideline }) {

    const handleCloseGuideline = () => {
        setOpenGuideline(false)
    };

    return (
        <Dialog
            open={openGuideline}
            onClose={handleCloseGuideline}
            TransitionComponent={Transition}
            fullWidth
            maxWidth="lg"
            keepMounted
        >
            <DialogTitle sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton
                    aria-label="close"
                    onClick={handleCloseGuideline}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ minHeight: '30vh', mb: 5 }}>
                <Typography variant='h5' align='center' mb={1}>วิธีการชำระเงิน</Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'space-evenly' }, flexDirection: { xs: 'column', md: 'row' } }}>
                    <Box sx={{ width: '300px' }}>
                        <Box sx={{ borderLeft: '5px solid #a0d64b', my: 1 }}>
                            <Typography alignSelf='center' ml={1}>1. สแกน QRCode ชำระเงิน</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                            <Box component='img' src={ScanQRCodeImg} width='250px' sx={{ borderRadius: 15 }} />
                        </Box>
                    </Box>

                    <Box sx={{ width: '300px' }}>
                        <Box sx={{ borderLeft: '5px solid #a0d64b', my: 1 }}>
                            <Typography alignSelf='center' ml={1}>2. อัพโหลดหลักฐานการโอน</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                            <Box component='img' src={UploadImg} width='250px' sx={{ borderRadius: 15 }} />
                        </Box>
                    </Box>

                    <Box sx={{ width: '300px' }}>
                        <Box sx={{ borderLeft: '5px solid #a0d64b', my: 1 }}>
                            <Typography alignSelf='center' ml={1}>3. รอแอดมินยืนยันการชำระ</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box component='img' src={WaitingImg} width='250px' sx={{ borderRadius: 15 }} />
                        </Box>
                    </Box>
                </Box>



            </DialogContent>
        </Dialog>
    )
}

export default GuidelineDialog