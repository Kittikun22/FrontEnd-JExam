import React from 'react'
import RegisterStep from '../components/register_components/RegisterStep'
import { useForm, FormProvider } from 'react-hook-form'
import Box from '@mui/material/Box'
import Appbar from '../components/Appbar'

function Register() {

  const methods = useForm();

  return (
    <>
      <Appbar />
      <Box
        p={2}
        sx={{
          background: 'linear-gradient(0deg, rgba(239,245,245,1) 0%, rgba(214,228,229,1) 100%)',
          minHeight: '100vh',
        }}>
        <FormProvider {...methods}>
          <RegisterStep method={methods} />
        </FormProvider>
      </Box>
    </>
  )
}

export default Register