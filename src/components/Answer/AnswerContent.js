import React from "react";
import {
  Box,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Paper,
  Divider
} from "@mui/material";
import Parser from 'html-react-parser'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#a0d64b20',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


function AnswerContent({ examContent, answered }) {

  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Paper
      elevation={2}
      sx={{
        py: 4,
        pb: 5,
        px: 2,
        mx: { xs: 2, sm: 10, md: 30, lg: 40 },
        background: '#fff',
      }}
    >

      {examContent.map((question, key) => {
        return (
          <Box key={key} m={2} id={`question-${question.id}`}>

            {question?.paragraph ?
              <Box m={{ xs: 0, sm: 2 }} p={2} sx={{ background: '#EEEEEE', borderRadius: 3 }}>
                <Typography variant='body1'>
                  {Parser(question.paragraph)}
                </Typography>
              </Box> : null
            }

            <Typography variant="h6" paragraph>
              {question.id}. {question.question}
            </Typography>

            {question.question_image_sm === "" ? null : (
              <Box
                component="img"
                src={question.question_image_sm}
                width={{ xs: "175px", sm: "175px", md: "175px" }}
                ml={2}
              />
            )}
            {question.question_image_md === "" ? null : (
              <Box
                component="img"
                src={question.question_image_md}
                width={{ xs: "250px", sm: "300px", md: "400px" }}
                ml={2}
              />
            )}
            {question.question_image_lg === "" ? null : (
              <Box
                component="img"
                src={question.question_image_lg}
                width={{ xs: "300px", sm: "400px", md: "600px" }}
                ml={2}
              />
            )}


            <RadioGroup
              value={question.answer}
            >
              {question.choice.map((choice, key) => (
                <Box key={key}>
                  {choice.choicetext === "" ? null : (
                    <FormControlLabel
                      key={key}
                      value={choice.choicevalue}
                      control={<Radio color="success" />}
                      label={
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: { xs: "start", md: "center" },
                            flexDirection:
                              choice.choice_image_sm !== "" ||
                                choice.choice_image_md !== "" ||
                                choice.choice_image_lg !== ""
                                ? "column"
                                : "row",
                          }}
                        >
                          {choice.choice_image_sm === "" ? null : (
                            <Box
                              component="img"
                              src={choice.choice_image_sm}
                              sx={{
                                width: {
                                  xs: "125px",
                                  sm: "150px",
                                  md: "175px",
                                },
                                my: 0.5,
                              }}
                            />
                          )}
                          {choice.choice_image_md === "" ? null : (
                            <Box
                              component="img"
                              src={choice.choice_image_md}
                              sx={{
                                width: {
                                  xs: "200px",
                                  sm: "250px",
                                  md: "300px",
                                },
                                my: 0.5,
                              }}
                            />
                          )}
                          {choice.choice_image_lg === "" ? null : (
                            <Box
                              component="img"
                              src={choice.choice_image_lg}
                              sx={{
                                width: {
                                  xs: "300px",
                                  sm: "400px",
                                  md: "500px",
                                },
                                my: 0.5,
                              }}
                            />
                          )}
                          {choice.choicevalue === question.answer ?
                            <Typography
                              sx={{
                                color:
                                  "green"
                              }}
                            >
                              {choice.choicetext}
                            </Typography>
                            :
                            <Typography
                              sx={{ color: answered.find(ans => ans.id === question.id && ans.choose === choice.choicevalue) ? "red" : '' }}
                            >
                              {choice.choicetext}
                            </Typography>
                          }
                        </Box>
                      }
                    />
                  )}
                </Box>
              ))}
            </RadioGroup>

            <Accordion expanded={expanded === `panel${key}`} onChange={handleChange(`panel${key}`)} >
              <AccordionSummary>
                <Typography>ดูคำอธิบาย</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {question?.answerImage === "" ? null :
                  <Box
                    component="img"
                    src={question?.answerImage}
                    sx={{
                      width: {
                        xs: "260px",
                        sm: "60%",
                        md: "100%",
                      }
                    }}
                  />
                }
                <Typography>
                  {question?.answerDescription}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Divider sx={{ my: 2 }} />
          </Box>
        );

      })}
    </Paper >
  );
}

export default AnswerContent;
