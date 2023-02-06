import React, { useState, useEffect } from "react";
import AnalysisContent from "./AnalysisContent";
import Axios from "axios";

function AnalysisComponent({ exam, selectExam, user }) {

  const [answered, setAnswered] = useState([]);

  useEffect(() => {
    Axios.post("http://localhost:8000/getAnswered", {
      user_id: user.user_id,
      exam_id: exam[selectExam].exam_id,
    }).then((res) => {
      setAnswered(JSON.parse(res.data[0].answer));
    });
  }, [user]);

  return <AnalysisContent answered={answered} />;
}

export default AnalysisComponent;
