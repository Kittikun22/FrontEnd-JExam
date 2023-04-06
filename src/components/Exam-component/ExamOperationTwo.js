import React from 'react'
import {
  Box,
  Typography,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import Parser from 'html-react-parser'

function ExamOperationTwo({ currentQuestions, answers, handleAnswerChange }) {

  return (
    <Box sx={{ py: 4, mx: { xs: 2, sm: 10, md: 30, lg: 40 } }}>
      {currentQuestions.map((question, key) => {
        return (
          <Box key={key} m={2} id={`question-${question.id}`}>
            <Typography>
              {question.id}.
            </Typography>
            {Parser(question.test)}

            {question.question_image_sm === '' ? null :
              <Box component='img' src={question.question_image_sm} width={{ xs: '175px', sm: '175px', md: '175px' }} ml={2} />
            }
            {question.question_image_md === '' ? null :
              <Box component='img' src={question.question_image_md} width={{ xs: '250px', sm: '300px', md: '400px' }} ml={2} />
            }
            {question.question_image_lg === '' ? null :
              <Box component='img' src={question.question_image_lg} width={{ xs: '300px', sm: '500px', md: '650px' }} ml={2} />
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
                <Box key={key} mt={1}>
                  {choice.choicetext === '' && choice.choice_image_sm === '' && choice.choice_image_md === '' && choice.choice_image_lg === '' ? null
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
          </Box>
        );
      })}
    </Box>
  )
}

export default ExamOperationTwo