import React from 'react'
import {
  Box,
  Typography,
  Radio,
  FormControlLabel,
  RadioGroup,
  Divider
} from "@mui/material";
import Parser from 'html-react-parser'
// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';


function ExamOperation({ currentQuestions, answers, handleAnswerChange }) {
  return (
    <Box>
      {currentQuestions.map((question, key) => {
        return (
          <Box key={key} m={2} id={`question-${question.id}`}>
            {question?.categoryDetail ?
              <Typography variant='h6' my={2}>
                <WbIncandescentIcon sx={{ transform: 'rotate(215deg)', color: '#FFD93D' }} /> {question.categoryDetail}
              </Typography>
              :
              null
            }

            {question?.paragraph ?
              <Box m={{ xs: 0, sm: 2 }} p={2} sx={{ background: '#EEEEEE', borderRadius: 3 }}>
                <Typography variant='body1'>
                  {Parser(question.paragraph)}
                </Typography>
                {/* <ReactQuill
                    readOnly={true}
                    theme={"bubble"}
                    value={question.paragraph}
                  /> */}
              </Box> : null}


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
                <Box key={key} mt={.5} ml={{ xs: 1, sm: 2 }}>
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
                          <Typography variant='body1'>
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

export default ExamOperation