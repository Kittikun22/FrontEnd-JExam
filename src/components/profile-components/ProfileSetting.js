import React, { useEffect, useState } from 'react'
import { TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Axios from 'axios'
import ReuseDialog from '../ReuseDialog'
import ProfilePictureList from './ProfilePictureList'
import ChangePwd from './ChangePwd';
import { motion } from 'framer-motion'

const CryptoJS = require("crypto-js");
const EncryptSecret = 'Jknow2022'

function ProfileSetting({ user }) {


    const [openDialog, setOpenDialog] = useState(false)

    const handleClose = () => {
        setTimeout(function () {
            setOpenDialog(false)
            window.location.reload()
        }, 1500)
    };


    useEffect(() => {
        try {
            if (user) {
                setNewFname(user.fname)
                setNewLname(user.lname)
                setNewEmail(user.email)
                setNewPic(user.user_pic)
            }

        } catch (error) {
        }

    }, [])

    const [newFname, setNewFname] = useState();
    const [newLname, setNewLname] = useState();
    const [newEmail, setNewEmail] = useState();
    const [newPic, setNewPic] = useState();

    const updateAUser = () => {
        Axios.put('http://localhost:8000/updateAUser'
            , { fname: newFname, lname: newLname, email: newEmail, user_pic: newPic, user_id: user.user_id })
            .then((res) => {
                const ciphertext = CryptoJS.AES.encrypt(JSON.stringify({ fname: newFname, lname: newLname, email: newEmail, phone: user.phone, user_id: user.user_id, grade: user.grade, school: user.school, province: user.province, user_pic: newPic }), EncryptSecret).toString();
                localStorage.setItem('users', JSON.stringify(ciphertext))
                setOpenDialog(true)
                handleClose()
            })
    }

    return (
        <>
            {user ?
                <>
                    <Box m={2}>
                        <Typography sx={{ display: 'inline', fontSize: '2rem', borderBottom: '4px solid #a3cc53', }}>
                            แก้ไขโปรไฟล์
                        </Typography>
                    </Box>
                    <Box p={2} m={2} sx={{ borderRadius: 6, bgcolor: 'white', boxShadow: 1 }}
                    >
                        <Grid container spacing={2} direction='column'
                            component={motion.div}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}>

                            <Grid item >
                                <Stack direction='row' alignItems='center' justifyContent='center' >
                                    <Grid item xs={3} >
                                        <Typography >เบอร์โทรศัพท์</Typography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <TextField type="text" size='small'
                                            variant="outlined" value={user.phone} disabled />
                                    </Grid>
                                </Stack>
                            </Grid>

                            <Grid item>
                                <Stack direction='row' alignItems='center' justifyContent='center'>
                                    <Grid item xs={3}>
                                        <Typography>ชื่อ</Typography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <TextField type="text" size='small'
                                            variant="outlined" value={newFname} onChange={(e) => { setNewFname(e.target.value) }} />
                                    </Grid>
                                </Stack>
                            </Grid>

                            <Grid item>
                                <Stack direction='row' alignItems='center' justifyContent='center'>
                                    <Grid item xs={3}>
                                        <Typography>นามสกุล</Typography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <TextField type="text" size='small'
                                            variant="outlined" value={newLname} onChange={(e) => { setNewLname(e.target.value) }} />
                                    </Grid>
                                </Stack>
                            </Grid>

                            <Grid item>
                                <Stack direction='row' alignItems='center' justifyContent='center'>
                                    <Grid item xs={3}>
                                        <Typography>อีเมล</Typography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <TextField type="text" size='small'
                                            variant="outlined" value={newEmail} onChange={(e) => { setNewEmail(e.target.value) }} />
                                    </Grid>
                                </Stack>
                            </Grid>

                            <Grid item>
                                <Stack direction='row' alignItems='center' justifyContent='center'>
                                    <Grid item xs={3}>
                                        <Typography>รูปโปรไฟล์</Typography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <ProfilePictureList setNewPic={setNewPic} newPic={newPic} />
                                    </Grid>
                                </Stack>
                            </Grid>

                            <Grid item>
                                <Stack direction='row' alignItems='center' justifyContent='center'>
                                    <Grid item xs={3}>
                                        <Typography>รหัสผ่าน</Typography>
                                    </Grid>
                                    <Grid item xs={9} >
                                        <ChangePwd user={user} />

                                    </Grid>
                                </Stack>
                            </Grid>

                            <Grid item>
                                <Stack direction='row' alignItems='center' justifyContent='center'>
                                    <Grid item xs={3}>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Button
                                            sx={{ width: '175px', borderRadius: 3 }}
                                            onClick={updateAUser}
                                            variant='contained'
                                            color='success'>
                                            บันทึก
                                        </Button>
                                    </Grid>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </>
                : null
            }

            <ReuseDialog message={'แก้ไขข้อมูลสำเร็จ'} openDialog={openDialog} setOpenDialog={setOpenDialog} />


        </>
    )
}

export default ProfileSetting