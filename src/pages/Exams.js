import React, { useState, useEffect } from "react";
import { useAuthState, useAuthDispatch } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ExamComponent from "../components/Exam-component/ExamComponent";
import Axios from "axios";
import ExamAlertDialog from "../components/Exam-component/ExamAlertDialog";

const CryptoJS = require("crypto-js");
const EncryptSecret = "Jknow2022";

function Exams() {
  const { exam_id } = useParams();
  const { user } = useAuthState();
  const dispatch = useAuthDispatch();

  const [exam, setExam] = useState();

  const [openDialog, setOpenDialog] = useState(false);
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ciphertext = JSON.parse(localStorage.getItem("users"));
    if (ciphertext) {
      const bytes = CryptoJS.AES.decrypt(ciphertext, EncryptSecret);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      dispatch({
        status: "loggedIn",
        user: decryptedData,
        error: null,
      });
    }
  }, []);

  useEffect(() => {
    if (user) {
      Axios.post("http://localhost:8000/UserExam", {
        user_id: user.user_id,
        exam_id: exam_id,
      }).then((res) => {
        if (res.data.message === "ok") {
          setLoading(true);
          setExam(res.data.result);
        } else {
          setOpenDialog(true);
          setMessage(
            "ไม่มีสิทธิ์ในการเข้าถึงข้อสอบ เนื่องจากยังไม่ได้ซื้อข้อสอบชุดนี้"
          );
        }
      });
    }
  }, [user]);

  return (
    <>
      <ExamAlertDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        message={message}
        exam_id={exam_id}
      />

      <Box
        sx={{
          background: "#f9fbe7",
          minHeight: "100vh",
        }}
      >
        {loading === true ? (
          <ExamComponent exam={exam} user={user} exam_id={exam_id} />
        ) : null}
      </Box>
    </>
  );
}

export default Exams;
