import React, { useEffect, useState } from 'react'
import Appbar from '../components/Appbar'
import { useParams } from 'react-router-dom';
import ExamIntro from '../components/ExamsIntro/ExamIntro';
import { Box } from '@mui/material';
import Axios from 'axios'
import { useAuthState } from '../context/AuthContext'

function ExamIntroduction() {

  const { examId } = useParams();
  const { user } = useAuthState();

  console.log(user);

  const [exam, setExam] = useState()

  useEffect(() => {
    if (user) {
      Axios.post('http://localhost:8000/getuserproductandexams', {
        user_id: user.user_id
      }).then((res) => {
        console.log(res);
        setExam(res.data)
      })
    }

  }, [user])

  console.log(exam);

  return (
    <>
      <Appbar />
      <Box sx={{
        background: 'linear-gradient(0deg, rgba(239,245,245,1) 0%, rgba(214,228,229,1) 100%)',
        pb: 10
      }}>
        <ExamIntro examId={examId} />

      </Box>

    </>
  )
}

export default ExamIntroduction