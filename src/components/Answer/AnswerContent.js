import React from "react";
import {
  Box,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Paper
} from "@mui/material";

function AnswerContent({ examContent, answered }) {
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
            <Typography variant="h5" paragraph>
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
          </Box>
        );

      })}
    </Paper >
  );
}

export default AnswerContent;
