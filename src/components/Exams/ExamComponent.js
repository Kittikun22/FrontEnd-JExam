import React, { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Radio,
  FormControlLabel,
  RadioGroup
} from '@mui/material';

function ExamComponent({ exam }) {

  console.log(exam);

  if (exam) {
    const examContent = JSON.parse(exam.exam_content)
    return (
      <Box sx={{
        py: 2,
        mx: { xs: 2, md: 15 },
      }}>
        {examContent.map((val, key) => {
          return (
            <Typography key={key}>
              <Typography variant='h6'>{key + 1}. {val.question}</Typography>
              <RadioGroup>
                {val.choice.map((val, key) => {
                  return (
                    <Typography key={key}>
                      <FormControlLabel value={val.choicevalue} control={<Radio />} label={val.choicetext} />
                    </Typography>
                  )
                })}
              </RadioGroup>
            </Typography>
          )
        })}
        

      </Box >
    )
  }
}

export default ExamComponent