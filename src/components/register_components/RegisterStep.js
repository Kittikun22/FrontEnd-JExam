import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Paper } from '@mui/material';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Zoom from '@mui/material/Zoom'
import { Typography } from '@mui/material';
import { useAuthDispatch, Login } from "../../context/AuthContext";

const steps = ['OTP', 'สร้างบัญชีผู้ใช้', 'ข้อมูลผู้ใช้'];

const icon = (
    <Box component="svg" sx={{ display: 'flex', justifyContent: 'center' }}>
        <CheckCircleIcon color="success" />
    </Box>
)
const RegisterStep = (props) => {

    const dispatch = useAuthDispatch();

    const [provinceData, setProvinceData] = useState();
    const [termAndCondition, setTermAndCondition] = useState();
    const [expectationOption, setExpectationOption] = useState()

    useEffect(() => {
        Axios.get('https://jexamapi.jknowledgetutor.com/getProvince').then((res) => {
            setProvinceData(res.data)
        })
        Axios.get('https://jexamapi.jknowledgetutor.com/getTermAndCondition').then((res) => {
            setTermAndCondition(res.data[0])
        })
        Axios.get('https://jexamapi.jknowledgetutor.com/getExpectation').then((res) => {
            setExpectationOption(res.data)
        })

    }, [])

    console.log(expectationOption);

    const { method } = props;

    const [checked, setChecked] = useState(false);
    const [openDialog, setOpenDialog] = useState(false)

    const handleClose = () => {
        setTimeout(function () {
            localStorage.setItem('ActiveContent', 'profile-homepage')
            setOpenDialog(false)
            window.location = '/profile'
        }, 1500)
    };

    const [activeStep, setActiveStep] = useState(0);
    const [activeButton, setActiveButton] = useState(true);

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleOnSubmit = (data) => {
        if (activeStep === 0) {
            handleNext()
        }
        if (activeStep === 1) {
            handleNext()
        }
        if (activeStep === 2) {
            CreateUser(data);
        }
    }

    const CreateUser = (data) => {
        Axios.post('https://jexamapi.jknowledgetutor.com/create-user', {
            phone: data.phone,
            password: data.password,
            fname: data.fname,
            lname: data.lname,
            email: data.email,
            user_role: data.user_role,
            role_id: 6,
            school: data.school,
            province: data.province,
            expectation: data.expectation,
            grade: data.grade,
            parentJob: data.parentJob,
            termCondition: data.termCondition,
            cart: '[]'
        }).then((res) => {
            if (res.status === 200) {
                Login(dispatch, data.phone, data.password).then((res) => {
                    if (res === 'success') {
                        setOpenDialog(true)
                        setChecked(true)
                        handleClose()
                    }
                })
            }
        })
    }

    function getStepPages(activeStep) {
        switch (activeStep) {
            case 0:
                return <StepOne setActiveButton={setActiveButton} />
            case 1:
                return <StepTwo />
            case 2:
                return <StepThree provinceData={provinceData} termAndCondition={termAndCondition} expectationOption={expectationOption} />

            default:
        }
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Paper sx={{ px: 2, py: 5, borderRadius: 10, width: '900px', marginBottom: '100px' }} elevation={2}>
                    <Stepper activeStep={activeStep} alternativeLabel >
                        {steps.map((label, key) => {
                            const stepProps = {};
                            const labelProps = {};
                            return (
                                <Step key={key} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    <React.Fragment>
                        <Box component="form" onSubmit={method.handleSubmit(handleOnSubmit)}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                                <Stack spacing={2} >
                                    {getStepPages(activeStep)}
                                </Stack>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 5, justifyContent: 'space-evenly' }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep <= 1}
                                    variant='outlined'
                                    onClick={handleBack}
                                >
                                    กลับ
                                </Button>

                                <Button
                                    variant="contained"
                                    disabled={activeButton}
                                    type="submit"
                                    startIcon={activeStep === steps.length - 1 ? <SendIcon /> : ''}
                                >
                                    {activeStep === steps.length - 1 ? 'สมัครสมาชิก' : 'ต่อไป'}
                                </Button>
                            </Box>
                        </Box>
                    </React.Fragment>
                </Paper>
            </Box>

            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogContent>
                    <Box p={10} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Zoom in={checked}>{icon}</Zoom>
                        <Typography>สมัครสมาชิกสำเร็จ</Typography>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default RegisterStep