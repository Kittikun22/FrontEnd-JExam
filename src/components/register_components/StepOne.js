import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { TextField, Button, Box, Typography } from '@mui/material';
import Axios from 'axios'
import OtpInput from 'react-otp-input';
import WarningIcon from '@mui/icons-material/Warning';

const StepOne = ({ setActiveButton }) => {

  const { register, formState: { errors } } = useFormContext();

  const [phoneNumber, setPhoneNumber] = useState();
  const [availableStatus, setAvailableStatus] = useState();
  const [availableMessage, setAvailableMessage] = useState();
  const [otpToken, setOtpToken] = useState();
  const [otpCode, setOtpCode] = useState("");
  const [otpSuccess, setOtpSuccess] = useState(false)

  function handleChangeOtp(otpCode) {
    setOtpCode(otpCode);
    if (otpCode?.length === 6) {
      VerifyOtp(otpToken, otpCode)
    }
  }

  const handleChangePhone = (phoneNumber) => {
    setPhoneNumber(phoneNumber)
    if (phoneNumber?.length === 10) {
      phoneAvailable(phoneNumber)
    } else {
      setAvailableStatus()
      setAvailableMessage()
    }
  }


  const phoneAvailable = (phoneNumber) => {
    Axios.post('http://localhost:8000/checkAvailable', {
      phone: phoneNumber
    }).then((res) => {
      setAvailableStatus(res.data.status)
      setAvailableMessage(res.data.message)
    })

  }

  const ReqOtp = (phone) => {
    try {
      if (availableStatus === 'ok') {
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
          setActiveButton(false)
          setOtpSuccess(true)
        }
      })
    } catch (error) {
      console.log('Errors : ', error);
    }
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '300px',
          justifyContent: 'center'
        }}>
        <TextField
          {...register('phone',
            {
              required: "โปรดกรอกเบอร์โทรศัพท์ e.g. 0945754777",
              maxLength: { value: 10, message: "โปรดกรอกเบอร์โทรศัพท์ 10 ตัว" },
            }
          )}
          id="phone"
          label="เบอร์โทรศัพท์"
          variant="outlined"
          size='small'
          onChange={(e) => { handleChangePhone(e.target.value) }}
          sx={{ width: { xs: '150px', md: '200px' } }}
        />
        <Button
          sx={{ ml: 1, width: '125px' }}
          variant="outlined"
          disabled={availableStatus === 'ok' ? false : true}
          onClick={() => { ReqOtp(phoneNumber) }}
        >
          ส่งรหัส OTP
        </Button>
      </Box>

      {availableStatus === 'error' ?
        <Typography
          sx={{
            fontSize: '.9rem',
            color: 'red',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <WarningIcon fontSize='.5rem' />{availableMessage}
        </Typography>
        :
        <Typography
          sx={{
            fontSize: '.9rem',
            color: '#a3cc53',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {availableMessage}
        </Typography>
      }


      {
        errors.phone ?
          <Typography wrap="true" sx={{
            fontSize: '.9rem',
            color: 'red',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            <WarningIcon fontSize='.5rem' /> {errors.phone.message}
          </Typography>
          : null
      }

      {
        errors.phone ?
          <Typography wrap="true" sx={{
            fontSize: '.9rem',
            color: 'red',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            <WarningIcon fontSize='.5rem' /> {errors.phone.message}
          </Typography>
          : null
      }

      <Box
        m={2}
        sx={{
          display: otpToken ? 'flex' : 'none',
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
      {
        otpCode?.length === 6 && otpSuccess === false ?
          <Typography wrap="true" sx={{
            fontSize: '.9rem',
            color: 'red',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            <WarningIcon fontSize='.5rem' /> รหัส OTP ไม่ถูกต้องกรุณากรอกใหม่
          </Typography> : null
      }
    </>
  )
}

export default StepOne