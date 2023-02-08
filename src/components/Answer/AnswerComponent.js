import React, { useState, useEffect } from "react";
import Axios from "axios";
import AnswerContent from "./AnswerContent";

function AnswerComponent({ exam, selectExam, user }) {
  const examContent = JSON.parse(exam[selectExam].exam_content);

  const [answered, setAnswered] = useState([]);

  useEffect(() => {
    Axios.post("http://localhost:8000/getAnswered", {
      user_id: user.user_id,
      exam_id: exam[selectExam].exam_id,
    }).then((res) => {
      setAnswered(JSON.parse(res.data[0].answer));
    });
  }, [user]);


  return <AnswerContent examContent={examContent} answered={answered} />;
}

export default AnswerComponent;
