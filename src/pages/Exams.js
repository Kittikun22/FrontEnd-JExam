import React, { useState, useEffect } from 'react'
import { useAuthState } from '../context/AuthContext'
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import Appbar from '../components/Appbar'
import ExamComponent from '../components/Exams/ExamComponent';
import Axios from 'axios'

function Exams() {

  const { examId } = useParams();
  const { user } = useAuthState();

  const [exam, setExam] = useState()

  useEffect(() => {
    if (user) {
      Axios.post('http://localhost:8000/UserProductAndExams', {
        user_id: user.user_id,
        product_id: 10
      }).then((res) => {
        setExam(res.data[0])
      })
    }

  }, [user])

  console.log(exam);


  return (
    <>
      <Appbar />
      <ExamComponent exam={exam} />
    </>
  )
}

export default Exams