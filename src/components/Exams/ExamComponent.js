import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import ExamScoreAlertDialog from "./ExamScoreAlertDialog";
import ExamNavbar from "./ExamNavbar";
import ExamStartDialog from "./ExamStartDialog";
import ExamSubmitAlert from "./ExamSubmitAlert";
import ExamOperationOne from "./ExamOperationOne";
import ExamOperationTwo from "./ExamOperationTwo";
import Axios from "axios";

function ExamComponent({ exam, selectExam, user, productId }) {

  const examContent = JSON.parse(exam[selectExam].exam_content);
  const examInfo = JSON.parse(exam[selectExam].exam_info);
  const exam_operationId = exam[selectExam].exam_operation

  const [loading, setLoading] = useState(true);
  const [duration, setDuration] = useState(0);
  const [timeSpend, setTimeSpend] = useState(0);
  const [timeControl, setTimeControl] = useState(false);

  const [answers, setAnswers] = useState(
    examContent.map((question) => ({
      id: question.id,
      choose: "",
      point: 0,
      fullScore: question.point,
      category: question.category
    }))
  );

  const [totalScore, setTotalScore] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [openStartDialog, setOpenStartDialog] = useState(true);
  const [openSubmitDialog, setOpenSubmitDialog] = useState(false);

  console.log(answers);

  const [step, setStep] = useState(0);

  const [goToQuestionId, setGoToQuestionId] = useState(null);

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
    const questionIndex = examContent.findIndex(
      (question) => question.id === questionId
    );
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
          point: examContent
            .find((question) => question.id === answer.id)
            .choice.find((choice) => choice.choicevalue === event.target.value)
            .point,
          fullScore: examContent.find((question) => question.id === answer.id)
            .point,
          category: examContent.find((question) => question.id === answer.id)
            .category,

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
    let fullScore = 0;
    answers.map((val) => {
      return (score += val.point, fullScore += val.fullScore);
    });

    Axios.post("http://localhost:8000/submitExam", {
      user_id: user.user_id,
      exam_id: exam[selectExam].exam_id,
      answer: JSON.stringify(answers),
      score: score,
      fullScore: fullScore,
      timeSpend: timeSpend,
    }).then((res) => {
      if (res.data.message === "success") {
        setTotalScore(score);
        setOpenDialog(true);
      }
    });
  };


  const currentQuestions = examContent.slice(step * 5, (step + 1) * 5);

  function ExamOperation(exam_operationId) {
    switch (exam_operationId) {
      case 1:
        return <ExamOperationOne
          currentQuestions={currentQuestions}
          answers={answers}
          handleAnswerChange={handleAnswerChange}
        />
      case 2:
        return <ExamOperationTwo
          currentQuestions={currentQuestions}
          answers={answers}
          handleAnswerChange={handleAnswerChange}
        />

      default: return console.log('nothing');
    }
  }


  if (exam) {
    if (duration === 0) {
      setDuration(examInfo[0].Duration * 60);
    }
    const examName = exam[selectExam].exam_name;

    const exam_id = exam[selectExam].exam_id;

    let examFullScore = 0;

    examContent.map((val) => {
      return (examFullScore += val.point);
    });


    return (
      <>
        <ExamStartDialog
          openStartDialog={openStartDialog}
          setOpenStartDialog={setOpenStartDialog}
          setTimeControl={setTimeControl}
          setLoading={setLoading}
          examName={examName}
          examContent={examContent}
          duration={examInfo[0].Duration}
          examFullScore={examFullScore}
        />

        <ExamScoreAlertDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          exam_id={exam_id}
          examName={examName}
          totalScore={totalScore}
          timeSpend={timeSpend}
          examFullScore={examFullScore}
          productId={productId}
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
          handleGoToQuestion={handleGoToQuestion}
        />

        {loading ? null : (
          <Box>
            {ExamOperation(exam_operationId)}

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
                    answers.filter((ans) => ans.choose !== "").length ===
                      examContent.length
                      ? handleExamSubmit()
                      : setOpenSubmitDialog(true)
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
