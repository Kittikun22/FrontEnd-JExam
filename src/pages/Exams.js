import React, { useState, useEffect } from "react";
import { useAuthState, useAuthDispatch } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import ExamComponent from "../components/Exams/ExamComponent";
import Axios from "axios";
import ExamAlertDialog from "../components/Exams/ExamAlertDialog";
import SelectDialog from "../components/Exams/SelectDialog";

const CryptoJS = require("crypto-js");
const EncryptSecret = "Jknow2022";

function Exams() {
  const { productId } = useParams();
  const { user } = useAuthState();
  const dispatch = useAuthDispatch();

  const [exam, setExam] = useState();
  const [selectExam, setSelectExam] = useState(0);

  const [openDialog, setOpenDialog] = useState(false);
  const [message, setMessage] = useState("");

  const [openSelectDialog, setOpenSelectDialog] = useState(false);

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
      Axios.post("http://localhost:8000/UserProduct", {
        user_id: user.user_id,
        product_id: productId,
      }).then((res) => {
        if (res.data.message === "ok") {
          if (res.data.result?.length > 1) {
            setExam(res.data.result);
            setOpenSelectDialog(true);
          } else {
            setLoading(true);
            setExam(res.data.result);
          }
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
        productId={productId}
      />

      <SelectDialog
        openSelectDialog={openSelectDialog}
        setOpenSelectDialog={setOpenSelectDialog}
        exam={exam}
        setSelectExam={setSelectExam}
        setLoading={setLoading}
      />

      <Box
        sx={{
          background: "#f9fbe7",
          minHeight: "100vh",
        }}
      >
        {loading === true ? (
          <ExamComponent exam={exam} selectExam={selectExam} user={user} productId={productId} />
        ) : null}
      </Box>
    </>
  );
}

export default Exams;
