import React, { useState, useEffect } from "react";
import Axios from "axios";
import AnswerContent from "./AnswerContent";

function AnswerComponent({ exam, exam_id, user }) {

  const examContent = JSON.parse(exam[0].exam_content);

  const [answered, setAnswered] = useState([]);

  useEffect(() => {
    Axios.post("http://localhost:8000/getAnswered", {
      user_id: user.user_id,
      exam_id: exam_id,
    }).then((res) => {
      setAnswered(JSON.parse(res.data[0].answer));
    });
  }, [user]);


  return <AnswerContent examContent={examContent} answered={answered} />;
}

export default AnswerComponent;
