import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Stack,
  Paper,
  Typography
} from '@mui/material';


function ExamIntro({ examId }) {


  return (
    <Box sx={{
      py: 2,
      mx: { xs: 2, md: 15 },
    }}>
      <Stack spacing={2}>
        <Paper elevation={2} sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          borderRadius: 5,
          p: 2,
          flexDirection: { xs: 'column', md: 'row' }
        }}>

          <Typography>Exam {examId}</Typography>

          <Button
            variant='contained'
            color="warning"
            sx={{ borderRadius: 5, width: '200px' }}
            href={`/exam/${examId}`}
          >
            <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>
              เริ่มทำข้อสอบ
            </Typography>
          </Button>

        </Paper>
      </Stack >
    </Box >
  )
}

export default ExamIntro