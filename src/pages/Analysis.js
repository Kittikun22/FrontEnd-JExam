import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Appbar from "../components/Appbar";
import AnalysisComponent from "../components/Analysis/AnalysisComponent";
import Axios from "axios";
import { useAuthState, useAuthDispatch } from "../context/AuthContext";
import AnalysisSelectExams from "../components/Analysis/AnalysisSelectExams";

const CryptoJS = require("crypto-js");
const EncryptSecret = "Jknow2022";

function Analysis() {
  const { productId } = useParams();
  const { user } = useAuthState();
  const dispatch = useAuthDispatch();

  const [loading, setLoading] = useState(false);
  const [exam, setExam] = useState([]);

  const [selectExam, setSelectExam] = useState(0);
  const [openSelectDialog, setOpenSelectDialog] = useState(false);

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
      Axios.post("http://localhost:8000/getExamId", {
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
          // setOpenDialog(true);
          // setMessage(
          //   "ไม่มีสิทธิ์ในการเข้าถึงข้อสอบ เนื่องจากยังไม่ได้ซื้อข้อสอบชุดนี้"
          // );
          alert("ไม่มีข้อสอบ");
        }
      });
    }
  }, [user]);

  return (
    <>
      <AnalysisSelectExams
        openSelectDialog={openSelectDialog}
        setOpenSelectDialog={setOpenSelectDialog}
        exam={exam}
        setSelectExam={setSelectExam}
        setLoading={setLoading}
      />

      <Appbar />
      {loading === true ? (
        <AnalysisComponent exam={exam} selectExam={selectExam} user={user} />
      ) : null}
    </>
  );
}

export default Analysis;
