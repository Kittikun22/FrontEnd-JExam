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
import ExamNavbar from "./ExamNavbar";
import ExamStartDialog from "./ExamStartDialog";

function ExamComponent({ exam, selectExam }) {
  const [loading, setLoading] = useState(true);
  const [duration, setDuration] = useState(0);
  const [timeSpend, setTimeSpend] = useState(0);
  const [timeControl, setTimeControl] = useState(false);

  const [answers, setAnswers] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [openStartDialog, setOpenStartDialog] = useState(true);

  const handleAnswerChange = (event, questions) => {
    const selectedChoice = questions.choice.find(
      (choice) => choice.choicevalue === event.target.value
    );

    const newAnswer = {
      id: questions.id,
      choose: event.target.value,
      point: selectedChoice.point,
    };

    const answerIndex = answers.findIndex(
      (answer) => answer.id === questions.id
    );

    if (answerIndex !== -1) {
      setAnswers((prevAnswersArray) => [
        ...prevAnswersArray.slice(0, answerIndex),
        newAnswer,
        ...prevAnswersArray.slice(answerIndex + 1),
      ]);
    } else {
      setAnswers((prevAnswersArray) => [...prevAnswersArray, newAnswer]);
    }
  };

  const handleExamSubmit = () => {
    setTimeControl(false);
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
    const examInfo = JSON.parse(exam[selectExam].exam_info);
    if (duration === 0) {
      setDuration(examInfo[selectExam].Duration * 60);
    }

    const examName = exam[selectExam].exam_name;

    return (
      <>
        <ExamStartDialog
          openStartDialog={openStartDialog}
          setOpenStartDialog={setOpenStartDialog}
          setTimeControl={setTimeControl}
          setLoading={setLoading}
          examName={examName}
          examContent={examContent}
          duration={examInfo[selectExam].Duration}
        />

        <ExamScoreAlertDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          examName={examName}
          examContent={examContent}
          totalScore={totalScore}
          timeSpend={timeSpend}
        />

        <ExamNavbar
          timeControl={timeControl}
          setTimeControl={setTimeControl}
          timeSpend={timeSpend}
          setTimeSpend={setTimeSpend}
          duration={duration}
          setOpenDialog={setOpenDialog}
        />
        {loading ? null : (
          <Box>
            <Box sx={{ py: 2, mx: { xs: 2, md: 15 } }}>
              <FormControl>
                {examContent.map((questions, key) => {
                  return (
                    <Box key={key} mb={2}>
                      <Typography variant="h6">
                        {questions.id}. {questions.question}
                      </Typography>
                      {questions?.question_image_sm ? (
                        <Box
                          component="img"
                          src={questions.question_image_sm}
                          alt="Jknowledge"
                          sx={{
                            width: { xs: "150px", md: "150px" },
                            ml: { xs: "", sm: 4 },
                          }}
                        />
                      ) : null}
                      {questions?.question_image_md ? (
                        <Box
                          component="img"
                          src={questions.question_image_md}
                          alt="Jknowledge"
                          sx={{
                            width: { xs: "250px", md: "350px" },
                            ml: { xs: "", sm: 4 },
                          }}
                        />
                      ) : null}
                      {questions?.question_image_lg ? (
                        <Box
                          component="img"
                          src={questions.question_image_lg}
                          sx={{
                            width: { xs: "350px", md: "600px" },
                            ml: { xs: "", sm: 4 },
                          }}
                          alt="Jknowledge"
                        />
                      ) : null}

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
                                    handleAnswerChange(
                                      e,
                                      questions,
                                      choices.point
                                    )
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
              <Button
                variant="contained"
                onClick={() => handleExamSubmit()}
                color="error"
                sx={{ borderRadius: 3, width: "125px" }}
              >
                <Typography sx={{ fontSize: "1.2rem" }}>ส่งคำตอบ</Typography>
              </Button>
            </Box>
          </Box>
        )}
      </>
    );
  }
}

export default ExamComponent;
