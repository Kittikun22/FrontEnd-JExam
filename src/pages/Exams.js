import React, { useState, useEffect } from 'react'
import { useAuthState } from '../context/AuthContext'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Appbar from '../components/Appbar'
import ExamComponent from '../components/Exams/ExamComponent';
import Axios from 'axios'
import ExamAlertDialog from '../components/Exams/ExamAlertDialog';


function Exams() {

  const { productId } = useParams();
  const { user } = useAuthState();

  const [exam, setExam] = useState()

  const [openDialog, setOpenDialog] = useState(false)
  const [message, setMessage] = useState('')



  useEffect(() => {
    if (user) {
      Axios.post('http://localhost:8000/UserProductAndExams', {
        user_id: user.user_id,
        product_id: productId
      }).then((res) => {
        console.log(res);
        if (res.data.message === 'ok') {
          setExam(res.data.result[0])
        } else {
          setOpenDialog(true)
          setMessage('ไม่มีสิทธิ์ในการเข้าถึงข้อสอบ เนื่องจากยังไม่ได้ซื้อข้อสอบชุดนี้')
        }

      })
    }

  }, [user])

  return (
    <>
      <ExamAlertDialog openDialog={openDialog} setOpenDialog={setOpenDialog} message={message} productId={productId} />
      <Appbar />

      <Box sx={{
        background: '#f9fbe7',
        minHeight: '100vh',
      }}>
        <ExamComponent exam={exam} />
      </Box>


    </>
  )
}

export default Exams