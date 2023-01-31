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
import ExamScoreAlertDialog from "./ExamScoreAlertDialog";

function ExamComponent({ exam, selectExam }) {
  const [duration, setDuration] = useState(600);
  const [answers, setAnswers] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDuration(duration - 1);
    }, 1000);

    if (duration === 0) {
      alert("หมดเวลา !!!");
    }

    return () => clearInterval(intervalId);
  }, [duration]);

  const handleAnswerChange = (event, questions) => {
    const selectedChoice = questions.choice.find(
      (choice) => choice.choicevalue === event.target.value
    );

    console.log(selectedChoice);
    const newAnswer = {
      id: questions.id,
      choose: event.target.value,
      point: selectedChoice.point,
    };
    setAnswers((prevAnswersArray) => [...prevAnswersArray, newAnswer]);
  };

  const handleExamSubmit = () => {
    console.log(answers);
    let score = 0;
    answers.map((val) => {
      return (score += val.point);
    });

    setTotalScore(score);
    setOpenDialog(true);
  };

  if (exam) {
    const examContent = JSON.parse(exam[selectExam].exam_content);

    return (
      <>
        <ExamScoreAlertDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          totalScore={totalScore}
        />

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
                    {questions.id}. {questions.question}
                  </Typography>
                  <RadioGroup value={answers[questions.id]}>
                    {questions.choice.map((choices, key) => {
                      return (
                        <Typography variant="span" key={key}>
                          {choices.choicetext === "" ? null : (
                            <FormControlLabel
                              value={choices.choicevalue}
                              control={<Radio />}
                              label={choices.choicetext}
                              data-point={choices.point}
                              onClick={(e) =>
                                handleAnswerChange(e, questions, choices.point)
                              }
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
          <Button variant="contained" onClick={() => handleExamSubmit()}>
            ส่งคำตอบ
          </Button>
        </Box>
      </>
    );
  }
}

export default ExamComponent;
