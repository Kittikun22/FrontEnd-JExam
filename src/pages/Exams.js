import React from 'react'
import { useAuthState } from '../context/AuthContext'
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import Appbar from '../components/Appbar'

function Exams() {

  const { exam_id } = useParams();
  const { user } = useAuthState();

  console.log(user);

  return (
    <>
      <Appbar />
      <Typography>
        Exams {exam_id}
      </Typography>
    </>
  )
}

export default Exams