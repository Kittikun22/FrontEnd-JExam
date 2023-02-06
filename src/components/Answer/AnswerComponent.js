import React, { useState, useEffect } from "react";
import Axios from "axios";
import AnswerContent from "./AnswerContent";

function AnswerComponent({ exam, selectExam, user }) {
  const examContent = JSON.parse(exam[selectExam].exam_content);
  const examInfo = JSON.parse(exam[selectExam].exam_info);

  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    Axios.post("http://localhost:8000/getAnswered", {
      user_id: user.user_id,
      exam_id: exam[selectExam].exam_id,
    }).then((res) => {
      setAnswer(JSON.parse(res.data[0].answer));
    });
  }, [user]);

  console.log(answer);

  return <AnswerContent examContent={examContent} answer={answer} />;
}

export default AnswerComponent;
