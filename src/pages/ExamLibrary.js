import React, { useState, useEffect } from 'react'
import Appbar from '../components/Appbar'
import ExamList from '../components/Exam/ExamsList'
import Box from '@mui/material/Box'
import { useAuthState } from '../context/AuthContext'
import Axios from 'axios'

const CryptoJS = require("crypto-js");
const EncryptSecret = "Jknow2022";

function ExamLibrary() {

    const { user } = useAuthState();

    const [cartItem, setCartItem] = useState(JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('cart'), EncryptSecret).toString(CryptoJS.enc.Utf8)));

    const [allExams, setAllExams] = useState([])
    const [mostFav, setMostFav] = useState([])
    const [newestExam, setNewestExam] = useState([])

    useEffect(() => {

        Axios.get('http://localhost:8000/getAllExam').then((res) => {
            setAllExams(res.data)
        })

        Axios.get("http://localhost:8000/getMostFav").then((res) => {
            setMostFav(res.data)
        })

        Axios.get("http://localhost:8000/getNewestExam").then((res) => {
            setNewestExam(res.data)
        })

        if (user) {
            const ciphertext_cart = CryptoJS.AES.encrypt(JSON.stringify(cartItem), EncryptSecret).toString();
            localStorage.setItem('cart', ciphertext_cart)
            Axios.put('http://localhost:8000/updateCart', {
                user_id: user.user_id,
                updateCart: JSON.stringify(cartItem)
            })
        }

    }, [cartItem])

    return (
        <>
            <Appbar cartItem={cartItem} />
            <Box
                sx={{
                    margin: { xs: 1.5, md: 5 },
                }}
            >
                <ExamList user={user} cartItem={cartItem} setCartItem={setCartItem} allExams={allExams} mostFav={mostFav} newestExam={newestExam} />
            </Box>
        </>
    )
}

export default ExamLibrary