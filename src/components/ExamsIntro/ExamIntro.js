import React from 'react'
import {
  Box,
  Button,
  Stack,
  Paper,
  Typography
} from '@mui/material';


function ExamIntro({ exam_id }) {


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

          <Typography>Exam {exam_id}</Typography>
        </Paper>
      </Stack >
    </Box >
  )
}

export default ExamIntro