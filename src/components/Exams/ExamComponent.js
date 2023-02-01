import React, { useState } from "react";
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

  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep(step + 1)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const handleBack = () => {
    setStep(step - 1)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


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

    let examFullScore = 0

    examContent.map((val => {
      return examFullScore += val.point
    }))


    const currentQuestions = examContent.slice(step * 5, (step + 1) * 5);


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
          examFullScore={examFullScore}
        />

        <ExamScoreAlertDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          examName={examName}
          totalScore={totalScore}
          timeSpend={timeSpend}
          examFullScore={examFullScore}
        />

        <ExamNavbar
          timeControl={timeControl}
          setTimeControl={setTimeControl}
          timeSpend={timeSpend}
          setTimeSpend={setTimeSpend}
          duration={duration}
          setOpenDialog={setOpenDialog}
          examContent={examContent}
          answers={answers}
          examName={examName}
        />
        {loading ? null : (
          <Box>
            <Box sx={{ py: 4, mx: { xs: 2, md: 40 } }}>
              <FormControl>
                {currentQuestions.map((questions, key) => {
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
                            width: { xs: "150px", md: "200px" },
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
                            width: { xs: "250px", md: "400px" },
                            ml: { xs: "", sm: 4 },
                          }}
                        />
                      ) : null}
                      {questions?.question_image_lg ? (
                        <Box
                          component="img"
                          src={questions.question_image_lg}
                          sx={{
                            width: { xs: "350px", md: "700px" },
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
                                  label={<Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, my: 1 }}>
                                    {choices?.choice_image_sm === "" ? null :
                                      <Box
                                        component="img"
                                        src={choices.choice_image_sm}
                                        sx={{ width: '100px', mr: 1 }}
                                      />}
                                    {choices?.choice_image_md === "" ? null :
                                      <Box
                                        component="img"
                                        src={choices.choice_image_md}
                                        sx={{ width: '175px', mr: 1 }}
                                      />}
                                    {choices?.choice_image_lg === "" ? null :
                                      <Box
                                        component="img"
                                        src={choices.choice_image_lg}
                                        sx={{ width: '300px', mr: 1 }}
                                      />}
                                    <Typography sx={{ alignSelf: { xs: '', sm: 'center' } }}>
                                      {choices.choicetext}
                                    </Typography>
                                  </Box>}
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

            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>

              <Button
                variant="contained"
                disabled={step === 0 ? true : false}
                onClick={() => handleBack()}
                sx={{ borderRadius: 3, width: "125px" }}
              >
                <Typography sx={{ fontSize: "1.2rem" }}>ย้อนกลับ</Typography>
              </Button>

              {step === Math.ceil(examContent.length / 5 - 1) ?
                <Button
                  variant="contained"
                  onClick={() => handleExamSubmit()}
                  color="error"
                  sx={{ borderRadius: 3, width: "125px" }}
                >
                  <Typography sx={{ fontSize: "1.2rem" }}>ส่งคำตอบ</Typography>
                </Button>
                :
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleNext()}
                  sx={{ borderRadius: 3, width: "125px" }}
                >
                  <Typography sx={{ fontSize: "1.2rem" }}>ต่อไป</Typography>
                </Button>

              }

            </Box>



          </Box>
        )}
      </>
    );
  }
}

export default ExamComponent;
