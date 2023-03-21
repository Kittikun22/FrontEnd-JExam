import React from 'react'
import {
  Box,
  Typography,
  Radio,
  FormControlLabel,
  RadioGroup,
  Divider
} from "@mui/material";


function ExamOperationOne({ currentQuestions, answers, handleAnswerChange }) {
  return (
    <Box sx={{ py: 4, mx: { xs: 2, sm: 10, md: 30, lg: 40 } }}>
      {currentQuestions.map((question, key) => {
        return (
          <Box key={key} m={2} id={`question-${question.id}`}>
            <Typography variant="h6">
              {question.id}. {question.question}
            </Typography>

            {question.question_image_sm === '' ? null :
              <Box component='img' src={question.question_image_sm} width={{ xs: '40%', md: '35%' }} ml={1} />
            }
            {question.question_image_md === '' ? null :
              <Box component='img' src={question.question_image_md} width={{ xs: '70%', md: '65%' }} ml={1} />
            }
            {question.question_image_lg === '' ? null :
              <Box component='img' src={question.question_image_lg} width={{ xs: '95%', md: '80%' }} ml={1} />
            }

            <RadioGroup
              value={
                answers.find(
                  (answer) => answer.id === question.id
                ).choose
              }
              onChange={handleAnswerChange(question.id)}
            >
              {question.choice.map((choice, key) => (
                <Box key={key} mt={.5}>
                  {choice.choicetext === '' ? null
                    :
                    <FormControlLabel
                      key={key}
                      value={choice.choicevalue}
                      control={<Radio />}
                      label={
                        <Box sx={{ display: 'flex', alignItems: { xs: 'start', md: 'center' }, flexDirection: choice.choice_image_sm !== '' || choice.choice_image_md !== '' || choice.choice_image_lg !== '' ? 'column' : 'row' }}>
                          {choice.choice_image_sm === "" ? null
                            :
                            <Box component='img' src={choice.choice_image_sm} sx={{ width: { xs: '125px', sm: '150px', md: '175px' }, my: 0.5 }} />
                          }
                          {choice.choice_image_md === "" ? null
                            :
                            <Box component='img' src={choice.choice_image_md} sx={{ width: { xs: '200px', sm: '250px', md: '300px' }, my: 0.5 }} />
                          }
                          {choice.choice_image_lg === "" ? null
                            :
                            <Box component='img' src={choice.choice_image_lg} sx={{ width: { xs: '300px', sm: '400px', md: '500px' }, my: 0.5 }} />
                          }
                          <Typography>
                            {choice.choicetext}
                          </Typography>
                        </Box>}
                    />}
                </Box>
              ))}
            </RadioGroup>
            <Divider sx={{ my: 2 }} />
          </Box>
        );
      })}
    </Box>
  )
}

export default ExamOperationOne