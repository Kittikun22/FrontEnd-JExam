import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Appbar from "../components/Appbar";
import { Box } from "@mui/material";
import AnswerComponent from "../components/Answer/AnswerComponent";
import Axios from "axios";
import { useAuthState, useAuthDispatch } from "../context/AuthContext";

const CryptoJS = require("crypto-js");
const EncryptSecret = "Jknow2022";

function Answer() {
    const { exam_id } = useParams();
    const { user } = useAuthState();
    const dispatch = useAuthDispatch();

    const [loading, setLoading] = useState(false);
    const [exam, setExam] = useState([]);

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
            <Appbar />
            <Box
                sx={{
                    background: "#f9fbe7",
                    minHeight: "100vh",
                }}
            >
                {loading === true ? (
                    <AnswerComponent exam={exam} exam_id={exam_id} user={user} />
                ) : null}
            </Box>
        </>
    );
}

export default Answer;