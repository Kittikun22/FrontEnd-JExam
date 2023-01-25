import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
  Button,
} from "@mui/material";

function ExamComponent({ exam, selectExam }) {
  const [duration, setDuration] = useState(600);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDuration(duration - 1);
    }, 1000);

    if (duration === 0) {
      alert("หมดเวลา !!!");
    }

    return () => clearInterval(intervalId);
  }, [duration]);

  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (event, questions) => {
    setAnswers({...answers,[questions.id]: event.target.value,});
  };

  const handleExamSubmit = (examContent) => {
    console.log(answers);
    let score = 0;
    Object.keys(answers).forEach((id) => {
      if (answers[id] === examContent[id - 1].Answer) {
        score++;
      }
    });
    alert(`Your score is ${score}`);
  };

  if (exam) {
    const examContent = JSON.parse(exam[selectExam].exam_content);

    return (
      <>
        <Box
          sx={{
            py: 2,
            mx: { xs: 2, md: 15 },
          }}
        >
          <FormControl>
            {examContent.map((questions, key) => {
              return (
                <Box key={key}>
                  <Typography variant="h6">
                    {key + 1}. {questions.question}
                  </Typography>
                  <RadioGroup
                    onChange={(e) => handleAnswerChange(e, questions)}
                    value={answers[questions.id]}
                  >
                    {questions.choice.map((choices, key) => {
                      return (
                        <Typography key={key}>
                          {choices.choicetext === "" ? null : (
                            <FormControlLabel
                              value={choices.choicevalue}
                              control={<Radio />}
                              label={choices.choicetext}
                            />
                          )}
                        </Typography>
                      );
                    })}
                  </RadioGroup>
                </Box>
              );
            })}
          </FormControl>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={() => handleExamSubmit(examContent)}
          >
            ส่งคำตอบ
          </Button>
        </Box>
      </>
    );
  }
}

export default ExamComponent;
