import React from 'react'
import { useFormContext } from 'react-hook-form'
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography'
import WarningIcon from '@mui/icons-material/Warning';

function StepTwo() {
  const { register, watch, formState: { errors } } = useFormContext();
  return (
    <>
      <TextField
        {...register('password',
          {
            required: 'โปรดกรอกรหัสผ่าน 8-16 ตัว',
            minLength: { value: 8, message: "โปรดกรอกรหัสผ่านอย่างน้อย 8 ตัว" },
            maxLength: { value: 16, message: "โปรดกรอกรหัสผ่านไม่เกิน 16 ตัว" }
          }
        )}
        id="password"
        type='password'
        label="รหัสผ่าน"
        variant="outlined"
        size='small'
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
            required: "โปรดยืนยันรหัสผ่าน",
            validate: (val) => {
              if (watch('password') !== val) {
                return "รหัสผ่านไม่ตรงกัน"
              }
            }
          }
        )}
        id="confirmPassword"
        type='password'
        label="ยืนยันรหัสผ่าน"
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
    </>
  )
}

export default StepTwo