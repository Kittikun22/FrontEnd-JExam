import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Radio,
  FormControlLabel,
  RadioGroup,
  Button,
} from "@mui/material";
import ExamScoreAlertDialog from "./ExamScoreAlertDialog";
import ExamNavbar from "./ExamNavbar";
import ExamStartDialog from "./ExamStartDialog";
import ExamSubmitAlert from "./ExamSubmitAlert";
import Examination from './Examination'

function ExamComponent({ exam, selectExam }) {
  const examContent = JSON.parse(exam[selectExam].exam_content);
  const examInfo = JSON.parse(exam[selectExam].exam_info);

  const [loading, setLoading] = useState(true);
  const [duration, setDuration] = useState(0);
  const [timeSpend, setTimeSpend] = useState(0);
  const [timeControl, setTimeControl] = useState(false);

  const [answers, setAnswers] = useState(
    examContent.map((question) => ({ id: question.id, choose: "", point: 0 }))
  );
  const [totalScore, setTotalScore] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [openStartDialog, setOpenStartDialog] = useState(true);
  const [openSubmitDialog, setOpenSubmitDialog] = useState(false);

  console.log(answers);

  const [step, setStep] = useState(0);

  const [goToQuestionId, setGoToQuestionId] = useState(null)

  useEffect(() => {
    const question = document.getElementById(`question-${goToQuestionId}`);
    if (question) {
      question.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [goToQuestionId]);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
    window.scrollTo({
      top: 0,
    });
  };

  const handleGoToQuestion = (questionId) => {
    const questionIndex = examContent.findIndex(question => question.id === questionId);
    const newStep = Math.floor(questionIndex / 5);
    setStep(newStep);
    setGoToQuestionId(questionId);
  };

  const handleAnswerChange = (questionId) => (event) => {
    const newAnswer = answers.map((answer) => {
      if (answer.id === questionId) {
        return {
          id: answer.id,
          choose: event.target.value,
          point: examContent.find((question) => question.id === answer.id)
            .choice.find((choice) => choice.choicevalue === event.target.value)
            .point
        };
      }
      return answer;
    });
    setAnswers(newAnswer);
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
    if (duration === 0) {
      setDuration(examInfo[selectExam].Duration * 60);
    }
    const examName = exam[selectExam].exam_name;

    let examFullScore = 0;

    examContent.map((val) => {
      return (examFullScore += val.point);
    });

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
          handleExamSubmit={handleExamSubmit}
          setOpenSubmitDialog={setOpenSubmitDialog}
          setStep={setStep}
          handleGoToQuestion={handleGoToQuestion}
        />

        <ExamSubmitAlert
          openSubmitDialog={openSubmitDialog}
          setOpenSubmitDialog={setOpenSubmitDialog}
          handleExamSubmit={handleExamSubmit}
          examContent={examContent}
          answers={answers}
        />

        {loading ? null : (
          <Box>

            <Examination currentQuestions={currentQuestions} answers={answers} handleAnswerChange={handleAnswerChange} />
            

            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button
                variant="contained"
                disabled={step === 0 ? true : false}
                onClick={() => handleBack()}
                sx={{ borderRadius: 3, width: "125px" }}
              >
                <Typography sx={{ fontSize: "1.2rem" }}>ย้อนกลับ</Typography>
              </Button>

              {step === Math.ceil(examContent.length / 5 - 1) ? (
                <Button
                  variant="contained"
                  onClick={() =>
                    answers.length !== examContent.length
                      ? setOpenSubmitDialog(true)
                      : handleExamSubmit()
                  }
                  color="error"
                  sx={{ borderRadius: 3, width: "125px" }}
                >
                  <Typography sx={{ fontSize: "1.2rem" }}>ส่งคำตอบ</Typography>
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleNext()}
                  sx={{ borderRadius: 3, width: "125px" }}
                >
                  <Typography sx={{ fontSize: "1.2rem" }}>ต่อไป</Typography>
                </Button>
              )}
            </Box>
          </Box>
        )}
      </>
    );
  }
}

export default ExamComponent;
