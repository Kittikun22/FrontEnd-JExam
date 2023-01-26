import React, { useState } from 'react'
import { TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Axios from 'axios'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form'
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ChangePwd({ user }) {

    const { register, watch, formState: { errors }, handleSubmit } = useForm()

    const [openChangePwd, setOpenChangePwd] = useState(false);
    const [oldPwd, setOldPwd] = useState();
    const [oldPwdStatus, setOldPwdStatus] = useState();
    const [oldPwdMessage, setOldPwdMessage] = useState();
    const [isSuccess, setIsSuccess] = useState(false);

    const handleClickOpen = () => {
        setOpenChangePwd(true);
    };

    const handleCloseChangePwd = () => {
        setOpenChangePwd(false);
    };


    const CheckPassword = () => {
        Axios.post('https://jexamapi.jknowledgetutor.com/getAPassword', {
            user_id: user.user_id,
            password: oldPwd
        }).then((res) => {
            console.log(res);
            setOldPwdStatus(res.data.status)
            setOldPwdMessage(res.data.message)
        })
    }

    const ChangePassword = (data) => {
        Axios.put('https://jexamapi.jknowledgetutor.com/changePassword', {
            user_id: user.user_id,
            newPassword: data.newPassword
        }).then((res) => {
            console.log(res.status);
            if (res.data.status === 'ok') {
                setIsSuccess(true)
                setTimeout(function () {
                    handleCloseChangePwd()
                }, 1500)
            }
        })
    }

    return (
        <>
            <Button onClick={handleClickOpen}>
                เปลี่ยนรหัสผ่าน
            </Button>
            <Dialog
                open={openChangePwd}
                onClose={handleCloseChangePwd}
                fullWidth={true}
                maxWidth={'xs'}>

                <DialogTitle sx={{ textAlign: 'center', }}>เปลี่ยนรหัสผ่าน</DialogTitle>
                <DialogContent>
                    {isSuccess === false ?
                        <Box component='form' onSubmit={handleSubmit(ChangePassword)}>
                            <Stack spacing={2} sx={{ mt: 2 }}>
                                <TextField
                                    id="password"
                                    type='password'
                                    label="รหัสผ่านปัจจุบัน"
                                    variant="outlined"
                                    size='small'
                                    value={oldPwd}
                                    onChange={(e) => { setOldPwd(e.target.value) }}
                                    onBlur={CheckPassword}
                                />


                                {oldPwdStatus === 'error' ?
                                    <Typography
                                        sx={{
                                            fontSize: '.9rem',
                                            color: 'red',
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <WarningIcon fontSize='.5rem' />{oldPwdMessage}
                                    </Typography>
                                    :
                                    <Typography
                                        sx={{
                                            fontSize: '.9rem',
                                            color: '#a3cc53',
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            textAlign: 'center'
                                        }}
                                    >
                                        {oldPwdMessage}
                                    </Typography>
                                }

                                <TextField
                                    {...register('newPassword',
                                        {
                                            required: 'โปรดกรอกรหัสผ่าน 8-16 ตัว',
                                            minLength: { value: 8, message: "โปรดกรอกรหัสผ่านอย่างน้อย 8 ตัว" },
                                            maxLength: { value: 16, message: "โปรดกรอกรหัสผ่านไม่เกิน 16 ตัว" }
                                        }
                                    )}
                                    id="newPassword"
                                    type='password'
                                    label="รหัสผ่านใหม่"
                                    variant="outlined"
                                    size='small'
                                />

                                {errors.newPassword ?
                                    <Typography wrap="true" sx={{
                                        fontSize: '.9rem',
                                        color: 'red',
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                        <WarningIcon fontSize='.5rem' /> {errors.newPassword.message}
                                    </Typography>
                                    : null
                                }

                                <TextField
                                    {...register('confirmNewPassword',
                                        {
                                            required: "โปรดยืนยันรหัสผ่าน",
                                            validate: (val) => {
                                                if (watch('newPassword') !== val) {
                                                    return "รหัสผ่านไม่ตรงกัน"
                                                }
                                            }
                                        }
                                    )}
                                    id="confirmNewPassword"
                                    label="ยืนยันรหัสผ่านใหม่"
                                    type='password'
                                    variant="outlined"
                                    size='small'
                                />

                                {errors.confirmNewPassword ?
                                    <Typography wrap="true" sx={{
                                        fontSize: '.9rem',
                                        color: 'red',
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                        <WarningIcon fontSize='.5rem' /> {errors.confirmNewPassword.message}
                                    </Typography>
                                    : null
                                }
                                <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                    <Button onClick={handleCloseChangePwd}>ยกเลิก</Button>
                                    <Button type='submit'>ยืนยัน</Button>
                                </Box>
                            </Stack>
                        </Box>
                        :
                        <>
                            <Box component="svg" sx={{ display: 'flex', justifyContent: 'center' }}>
                                <CheckCircleIcon color="success" />
                            </Box>
                            <Typography sx={{ textAlign: 'center' }}>เปลี่ยนรหัสผ่านสำเร็จ</Typography>
                        </>
                    }
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ChangePwd