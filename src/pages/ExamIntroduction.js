import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios'
import Appbar from '../components/Appbar';
import Introduction from '../components/ExamsIntro/Introduction';
import { Box } from '@mui/material'
import { useAuthState } from '../context/AuthContext'

const CryptoJS = require("crypto-js");
const EncryptSecret = "Jknow2022";


function ExamIntroduction() {

  const { exam_id } = useParams();
  const { user } = useAuthState();

  const [examDetail, setExamDetail] = useState()
  const [myExamList, setMyExamList] = useState([])

  const [cartItem, setCartItem] = useState(JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('cart'), EncryptSecret).toString(CryptoJS.enc.Utf8)));

  useEffect(() => {

    if (exam_id) {
      Axios.get(`http://localhost:8000/getExam/${exam_id}`).then((res) => {
        setExamDetail(res.data[0])
      })
    }
    if (user) {
      Axios.post('http://localhost:8000/getUserExams', {
        user_id: user.user_id
      }).then((res) => {
        setMyExamList(res.data)
      })
    }
    if (user) {
      const ciphertext_cart = CryptoJS.AES.encrypt(JSON.stringify(cartItem), EncryptSecret).toString();
      localStorage.setItem("cart", ciphertext_cart)
      Axios.put('http://localhost:8000/updateCart', {
        user_id: user.user_id,
        updateCart: JSON.stringify(cartItem)
      })
    }
  }, [user, cartItem])

  if (examDetail) {
    return (
      <>
        <Appbar cartItem={cartItem} />
        <Box sx={{
          background: 'linear-gradient(0deg, rgba(239,245,245,1) 0%, rgba(214,228,229,1) 100%)',
          minHeight: '100vh',
        }}>
          <Introduction user={user} examDetail={examDetail} myExamList={myExamList} cartItem={cartItem} setCartItem={setCartItem} />
        </Box>
      </>

    )
  }
}

export default ExamIntroduction