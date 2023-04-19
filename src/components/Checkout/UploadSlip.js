import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box, Button, Stack, Typography } from '@mui/material'
import Axios from 'axios'
import ImageIcon from '@mui/icons-material/Image';
import UploadIcon from '@mui/icons-material/Upload';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const initialState = {
    image_src: '',
}


function UploadSlip({ selectedItems, user, amount, netAmount }) {

    const [openUploadSlip, setOpenUploadSlip] = useState(false)

    const handleCloseUploadSlip = () => {
        setOpenUploadSlip(false)
        setImagePreviewUrl(null)
        setFile({})
        setNewImage(initialState)
        setUploadImageStatus(false);
    };

    const [file, setFile] = useState({})
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null)
    const [newImage, setNewImage] = useState(initialState);
    const [uploadImageStatus, setUploadImageStatus] = useState(false)

    const handleFile = async (e) => {
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.onloadend = () => {
            setFile(file)
            setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(file)

        const formData = new FormData()
        formData.append('file', file)
        await Axios.post('http://localhost:8000/uploadSlip', formData).then((res) => {
            setNewImage({ ...newImage, image_src: res.data.image_src })
        })
    }

    const onSubmit = async () => {
        await Axios.post('http://localhost:8000/submitSlip', {
            user_id: user.user_id,
            exams: selectedItems,
            amount: amount,
            net_amount: netAmount,
            image_src: newImage.image_src
        }).then((res) => {
            if (res.data.message === 'successfully') {
                setUploadImageStatus(true)
            }
        })
    }


    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
                <Button
                    variant='contained'
                    size='large'
                    onClick={() => setOpenUploadSlip(true)}
                >
                    อัพโหลดหลักฐานการโอน
                </Button>
            </Box>

            <Dialog
                open={openUploadSlip}
                TransitionComponent={Transition}
                fullWidth
                maxWidth="md"
                keepMounted
            >
                <DialogTitle sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton
                        aria-label="close"
                        onClick={handleCloseUploadSlip}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <Stack spacing={2}>
                        <Typography variant='h5' align='center'>อัพโหลดหลักฐานการโอน</Typography>

                        {uploadImageStatus === true ? <Typography variant="body1" align="center">เพิ่มรูปสำเร็จ</Typography> :
                            <>

                                {imagePreviewUrl === null ?
                                    <Box sx={{
                                        width: '225px',
                                        height: '250px',
                                        background: '#D8D8D8',
                                        alignSelf: 'center'
                                    }}>
                                    </Box>
                                    :
                                    <Box
                                        component="img"
                                        src={imagePreviewUrl}
                                        width="225px"
                                        sx={{ alignSelf: 'center' }}
                                    />
                                }

                                <Button variant="contained" component="label" >
                                    <ImageIcon /> เลือกรูปภาพ
                                    <input hidden accept="image/*" multiple type="file" onChange={handleFile} />
                                </Button>
                                <Button variant="contained" disabled={file?.size ? false : true} component="label" onClick={onSubmit}>
                                    <UploadIcon /> อัพโหลด
                                </Button>

                            </>
                        }
                    </Stack>

                </DialogContent>
            </Dialog>

        </>
    )
}

export default UploadSlip