import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Stack,
  Paper,
  Typography
} from '@mui/material';


function ExamIntro({ examId, exam }) {


  if (exam) {
    const examInfo = JSON.parse(exam.exam_info)
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
            <Box component='img'
              src={`/${exam.pic}`}
              sx={{
                width: '225px',
                borderRadius: 3
              }}
            />

            <Stack spacing={2}>
              <Box>
                {examInfo.map((val, key) => {
                  return (
                    <Typography key={key}>
                      <Typography sx={{ display: 'inline-block', borderBottom: '4px solid #a3cc53', fontSize: '1.3rem', fontWeight: 600 }}>
                        {val.Title}
                      </Typography>
                      <p>{val.Description_line_i}</p>
                      <p>{val.Description_line_ii}</p>
                      <p>{val.Description_line_iii}</p>
                      <p>{val.Description_line_iv}</p>
                      <p>{val.Description_line_v}</p>
                      <p>เวลา : {val.Duration} นาที</p>
                      <p>จำนวนข้อ : {val.NumberofQuestions} ข้อ</p>
                    </Typography>
                  )
                })}
              </Box>
              <Button
                variant='contained'
                color="warning"
                sx={{ borderRadius: 5, width: '200px' }}
                href={`/exam/${exam.exam_id}`}

              >
                <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>
                  เริ่มทำข้อสอบ
                </Typography>
              </Button>

            </Stack>
          </Paper>

        </Stack >
      </Box >
    )
  }
}

export default ExamIntro