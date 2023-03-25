import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {
  CardActionArea,
  CardActions,
  Typography,
  Box,
  Button
} from '@mui/material'
import Axios from 'axios'
import { Link } from '@mui/material';
import { motion } from 'framer-motion'
import HistoryDialog from './HistoryDialog';


function ProfileHistory({ user }) {

  const [myExamList, setMyExamList] = useState([])

  const [openHistory, setOpenHistory] = useState(false)
  const [examId, setExamId] = useState()
  const [ProductName, setProductName] = useState()

  useEffect(() => {
    Axios.post('http://localhost:8000/getuserproductandexams', {
      user_id: user.user_id
    }).then((res) => {
      setMyExamList(res.data)
    })
  }, [])

  const handleHistory = (exam_id, Product_Name) => {
    setExamId(exam_id)
    setProductName(Product_Name)
    setOpenHistory(true)
  }


  return (
    <>

      <HistoryDialog user_id={user.user_id} exam_id={examId} ProductName={ProductName} setExamId={setExamId} openHistory={openHistory} setOpenHistory={setOpenHistory} />

      <Box m={2}>
        <Typography sx={{ display: 'inline', fontSize: '2rem', borderBottom: '4px solid #a0d64b', }}>
          ประวัติการทำข้อสอบ
        </Typography>
      </Box>

      <Box p={{ xs: 1, md: 2 }} m={{ xs: 1, md: 2 }} sx={{ borderRadius: 3, bgcolor: 'white', boxShadow: 1 }}>

        <Box sx={{
          display: myExamList?.length === 0 ? 'block' : 'none',
        }}>
          <Typography sx={{ textAlign: 'center', fontSize: '1.2rem' }}>
            ยังไม่มีประวัติการทำข้อสอบ
          </Typography>
          <Typography sx={{ textAlign: 'center' }}>
            <Typography
              component={Link}
              href='/profile' onClick={() => localStorage.setItem('ActiveContent', 'profile-myexam')}>
              ทำข้อสอบ
            </Typography>
          </Typography>
        </Box>

        <Box
          sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1, md: 2 }, marginBottom: '80px', marginTop: 2 }}
          component={motion.div}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >

          {myExamList?.map((val, key) => {
            return (
              <Card sx={{ width: { xs: 175, md: 225 }, borderRadius: 7 }} key={key}>
                <CardActionArea href={`/introduction/${val.product_id}`}>
                  <CardMedia
                    component="img"
                    height="150px"
                    image={val.pic}
                    alt={val.name}
                  />
                  <CardContent>
                    <Typography noWrap sx={{ fontSize: '1.2rem', fontWeight: 600 }}>
                      {val.name}
                    </Typography>
                    <Typography color="text.secondary"
                      sx={{
                        height: '50px',
                        fontSize: '.85rem'
                      }}>
                      {val.detail}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ display: 'flex', height: '35px', justifyContent: 'center' }}>
                  <Button
                    variant='contained'
                    color='warning'
                    sx={{ borderRadius: 3, fontSize: { xs: '.8rem', md: '' } }}
                    onClick={() => handleHistory(val.exam_id, val.name)}
                  >
                    ดูประวัติการทำข้อสอบ
                  </Button>
                </CardActions>
              </Card>
            )
          })}

        </Box>
      </Box>
    </>
  )
}

export default ProfileHistory