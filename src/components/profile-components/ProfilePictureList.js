import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import { Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ProfilePictureList({ setNewPic, newPic }) {

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={() => { setOpen(true) }}>เลือกรูปโปรไฟล์</Button>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                onClose={handleClose}
            >
                <DialogTitle>
                    <Typography sx={{ fontSize: '1.5rem', textAlign: 'center' }}>เลือกรูปโปรไฟล์</Typography>
                </DialogTitle>
                <DialogContent>

                    <ImageList cols={3} m={2} >
                        <ImageListItem>
                            <Button>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Box component='img' src='images/profile/profile1.png'
                                        sx={{
                                            width: '75px',
                                            height: '75px',
                                        }}
                                        onClick={() => { setNewPic('images/profile/profile1.png') }}
                                    />
                                    <CheckCircleIcon sx={{ color: '#a3cc53', display: newPic === 'images/profile/profile1.png' ? 'flex' : 'none' }} />
                                </Box>
                            </Button>
                        </ImageListItem>
                        <ImageListItem>
                            <Button>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Box component='img' src='images/profile/profile2.png'
                                        sx={{
                                            width: '75px',
                                            height: '75px',
                                        }}
                                        onClick={() => { setNewPic('images/profile/profile2.png') }}
                                    />
                                    <CheckCircleIcon sx={{ color: '#a3cc53', display: newPic === 'images/profile/profile2.png' ? 'flex' : 'none' }} />
                                </Box>
                            </Button>
                        </ImageListItem>
                        <ImageListItem>
                            <Button>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Box component='img' src='images/profile/profile3.png'
                                        sx={{
                                            width: '75px',
                                            height: '75px',
                                        }}
                                        onClick={() => { setNewPic('images/profile/profile3.png') }}
                                    />
                                    <CheckCircleIcon sx={{ color: '#a3cc53', display: newPic === 'images/profile/profile3.png' ? 'flex' : 'none' }} />
                                </Box>
                            </Button>
                        </ImageListItem>
                        <ImageListItem>
                            <Button>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Box component='img' src='images/profile/profile4.png'
                                        sx={{
                                            width: '75px',
                                            height: '75px',
                                        }}
                                        onClick={() => { setNewPic('images/profile/profile4.png') }}
                                    />
                                    <CheckCircleIcon sx={{ color: '#a3cc53', display: newPic === 'images/profile/profile4.png' ? 'flex' : 'none' }} />
                                </Box>
                            </Button>
                        </ImageListItem>
                        <ImageListItem>
                            <Button>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Box component='img' src='images/profile/profile5.png'
                                        sx={{
                                            width: '75px',
                                            height: '75px',
                                        }}
                                        onClick={() => { setNewPic('images/profile/profile5.png') }}
                                    />
                                    <CheckCircleIcon sx={{ color: '#a3cc53', display: newPic === 'images/profile/profile5.png' ? 'flex' : 'none' }} />
                                </Box>
                            </Button>
                        </ImageListItem>
                        <ImageListItem>
                            <Button>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Box component='img' src='images/profile/profile6.png'
                                        sx={{
                                            width: '75px',
                                            height: '75px',
                                        }}
                                        onClick={() => { setNewPic('images/profile/profile6.png') }}
                                    />
                                    <CheckCircleIcon sx={{ color: '#a3cc53', display: newPic === 'images/profile/profile6.png' ? 'flex' : 'none' }} />
                                </Box>
                            </Button>
                        </ImageListItem>
                        <ImageListItem>
                            <Button>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Box component='img' src='images/profile/profile7.png'
                                        sx={{
                                            width: '75px',
                                            height: '75px',
                                        }}
                                        onClick={() => { setNewPic('images/profile/profile7.png') }}
                                    />
                                    <CheckCircleIcon sx={{ color: '#a3cc53', display: newPic === 'images/profile/profile7.png' ? 'flex' : 'none' }} />
                                </Box>
                            </Button>
                        </ImageListItem>
                    </ImageList >
                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button onClick={handleClose} sx={{ fontSize: '1.1rem' }}>
                        กลับ
                    </Button>
                    <Button onClick={handleClose} sx={{ fontSize: '1.1rem' }}>
                        ยืนยัน
                    </Button>
                </DialogActions>
            </Dialog>

        </>
    );
}
