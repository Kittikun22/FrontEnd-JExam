import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Appbar from '../components/Appbar'
import Axios from 'axios'
import { TextField, Paper, Button, Typography, Stack } from '@mui/material'
import OtpInput from 'react-otp-input';
import WarningIcon from '@mui/icons-material/Warning';
import ReuseDialog from '../components/ReuseDialog'

function ForgotPassword() {

    const { register, watch, formState: { errors }, handleSubmit } = useForm()

    const [phoneNumber, setPhoneNumber] = useState();
    const [ableOtp, setAbleOtp] = useState(true);
    const [otpToken, setOtpToken] = useState();
    const [otpCode, setOtpCode] = useState("");
    const [otpSuccess, setOtpSuccess] = useState(false)

    const [openDialog, setOpenDialog] = useState(false)

    const handleChangePhone = (phoneNumber) => {
        setPhoneNumber(phoneNumber)
        if (phoneNumber?.length === 10) {
            setAbleOtp(false)
        } else {
            setAbleOtp(true)
        }
    }

    const ReqOtp = (phone) => {
        try {
            if (ableOtp === false) {
                Axios.post('http://localhost:8000/request-otp', {
                    headers: {
                        accept: 'application/json',
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    phone_number: phone
                }).then((res) => {
                    setOtpToken(res.data.token);
                })
            }

        } catch (error) {
            console.log(error);
        }
    }


    const VerifyOtp = (otpToken, otpCode) => {
        try {
            Axios.post('http://localhost:8000/verify-otp', {
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/x-www-form-urlencoded'
                },
                token: otpToken,
                otp_code: otpCode
            }).then((res) => {
                if (res.data.status === "success") {
                    setOtpSuccess(true)
                }
            })
        } catch (error) {
            console.log('Errors : ', error);
        }
    }

    function handleChangeOtp(otpCode) {
        setOtpCode(otpCode);
        if (otpCode?.length === 6) {
            VerifyOtp(otpToken, otpCode)
        }
    }

    const handleForgotPassword = (data) => {
        Axios.post('http://localhost:8000/forgotPassword', {
            phone: data.phone,
            password: data.password
        }).then(() => {
            setOpenDialog(true)
            setTimeout(function () {    
                window.location = '/'
            }, 1500)
        })

    }

    return (
        <>
            <Appbar />

            <Box sx={{
                background: 'linear-gradient(0deg, rgba(239,245,245,1) 0%, rgba(214,228,229,1) 100%)',
                minheight: '100vh',
            }}>
                <Box
                    p={2}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Paper sx={{ px: 2, py: 5, borderRadius: 10, width: '500px', marginBottom: '100px', display: 'flex', justifyContent: 'center' }} elevation={2}>

                        <Box component='form' onSubmit={handleSubmit(handleForgotPassword)}>

                            <Typography sx={{ textAlign: 'center', fontSize: '2rem', mb: 2 }}>
                                ?????????????????????????????????
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                <TextField
                                    {...register('phone',
                                        {
                                            required: "??????????????????????????????????????????????????????????????? e.g. 0945754777",
                                            maxLength: { value: 10, message: "??????????????????????????????????????????????????????????????? 10 ?????????" },
                                        }
                                    )}
                                    id="phone"
                                    label="???????????????????????????????????????"
                                    variant="outlined"
                                    size='small'
                                    onChange={(e) => { handleChangePhone(e.target.value) }}
                                    sx={{ width: { xs: '175px', md: '200px' } }}
                                />
                                <Button
                                    sx={{ ml: 1, width: '125px' }}
                                    variant="outlined"
                                    disabled={ableOtp}
                                    onClick={() => { ReqOtp(phoneNumber) }}
                                >
                                    ????????????????????? OTP
                                </Button>
                            </Box>

                            <Box
                                m={2}
                                sx={{
                                    display: 'flex',
                                    width: '300px',
                                    justifyContent: 'center',
                                }}>
                                <OtpInput
                                    onChange={handleChangeOtp}
                                    value={otpCode}
                                    numInputs={6}
                                    isInputNum={true}
                                    isDisabled={otpSuccess === true ? true : false}
                                    inputStyle={{
                                        width: '75%',
                                        height: '40px',
                                        borderRadius: '10px',
                                        border: '0px',
                                        background: otpSuccess === true ? '#a3cc5380' : '#dddddd',
                                        fontSize: '1.5rem',
                                    }}
                                />
                            </Box>

                            <Box sx={{ display: otpSuccess === true ? 'flex' : 'none', flexDirection: 'column' }}>
                                <Stack spacing={2}>
                                    <TextField
                                        {...register('password',
                                            {
                                                required: '???????????????????????????????????????????????? 8-16 ?????????',
                                                minLength: { value: 8, message: "??????????????????????????????????????????????????????????????????????????? 8 ?????????" },
                                                maxLength: { value: 16, message: "????????????????????????????????????????????????????????????????????? 16 ?????????" }
                                            }
                                        )}
                                        id="password"
                                        type='password'
                                        label="????????????????????????????????????"
                                        variant="outlined"
                                        size='small'
                                        sx={{}}
                                    />
                                    {errors.password ?
                                        <Typography wrap="true" sx={{
                                            fontSize: '.9rem',
                                            color: 'red',
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                        }}>
                                            <WarningIcon fontSize='.5rem' /> {errors.password.message}
                                        </Typography>
                                        : null
                                    }
                                    <TextField
                                        {...register('confirmPassword',
                                            {
                                                required: "??????????????????????????????????????????????????????",
                                                validate: (val) => {
                                                    if (watch('password') !== val) {
                                                        return "???????????????????????????????????????????????????"
                                                    }
                                                }
                                            }
                                        )}
                                        id="confirmPassword"
                                        type='password'
                                        label="??????????????????????????????????????????"
                                        variant="outlined"
                                        size='small'
                                    />

                                    {errors.confirmPassword ?
                                        <Typography wrap="true" sx={{
                                            fontSize: '.9rem',
                                            color: 'red',
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                        }}>
                                            <WarningIcon fontSize='.5rem' /> {errors.confirmPassword.message}
                                        </Typography>
                                        : null
                                    }
                                </Stack>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 5, justifyContent: 'flex-end' }}>

                                <Button
                                    variant="contained"
                                    type="submit"
                                >
                                    ??????????????????
                                </Button>
                            </Box>

                        </Box>
                    </Paper>
                </Box>
            </Box>

            <ReuseDialog message={'???????????????????????????????????????????????????????????????'} openDialog={openDialog} setOpenDialog={setOpenDialog} />
        </>
    )
}

export default ForgotPassword