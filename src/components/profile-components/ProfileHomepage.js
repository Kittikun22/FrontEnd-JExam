import React, { useState, useEffect } from 'react'
import ProfileHomeFlickity from './ProfileHomeFlickity'
import Axios from 'axios'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
  Button
} from '@mui/material'
import { Link } from '@mui/material';
import { motion } from 'framer-motion'


function ProfileHomepage({ user }) {

  const [myExamList, setMyExamList] = useState([])

  useEffect(() => {
    Axios.post('http://localhost:8000/getuserproductandexams', {
      user_id: user.user_id
    }).then((res) => {
      setMyExamList(res.data)
    })
  }, [])

  return (
    <Box sx={{ mb: '100px' }}>

      <Box m={2}>
        <Typography sx={{ display: 'inline', fontSize: '2rem', borderBottom: '4px solid #a3cc53', }}>
          ประวัติส่วนตัว
        </Typography>
      </Box>

      <Box p={2} m={2} sx={{ borderRadius: 3, bgcolor: 'white', boxShadow: 1 }} >

        <Box sx={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '1.2rem' }}>ชื่อ - นามสกุล</Typography>
          <Typography sx={{ fontSize: '1.2rem' }}>{user.fname} {user.lname}</Typography>
        </Box>

        <Box sx={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '1.2rem' }}>โรงเรียน</Typography>
          <Typography sx={{ fontSize: '1.2rem' }}>{user.school}</Typography>
        </Box>

        <Box sx={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '1.2rem' }}>จังหวัด</Typography>
          <Typography sx={{ fontSize: '1.2rem' }}>{user.province}</Typography>
        </Box>

        <Box sx={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '1.2rem' }}>ระดับการศึกษา</Typography>
          <Typography sx={{ fontSize: '1.2rem' }}>{user.grade}</Typography>
        </Box>

      </Box>

      <Box m={2}>
        <Typography sx={{ display: 'inline', fontSize: '2rem', borderBottom: '4px solid #a3cc53', }}>
          ข้อสอบของฉัน
        </Typography>
      </Box>

      <Box p={{ xs: 1, md: 2 }} m={{ xs: 1, md: 2 }} sx={{ borderRadius: 3, bgcolor: 'white', boxShadow: 1 }}>

        <Box sx={{
          display: myExamList?.length === 0 ? 'block' : 'none',
        }}>
          <Typography sx={{ textAlign: 'center', fontSize: '1.2rem' }}>
            ยังไม่มีข้อสอบ
          </Typography>
          <Typography sx={{ textAlign: 'center' }}>
            <Typography
              component={Link}
              href='/exam-library'>เลือกข้อสอบ</Typography>
          </Typography>
        </Box>


        <ProfileHomeFlickity user={user} />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1, md: 2 }, marginBottom: '30px', marginTop: 2 }}>
          {myExamList?.length <= 3 ?
            myExamList?.map((val, key) => {
              return (
                <Box component={motion.div}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
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
                    <CardActions
                      sx={{ display: 'flex', height: '35px', justifyContent: 'center' }}>
                      <Button
                        variant='contained'
                        color='warning'
                        sx={{
                          borderRadius: 3
                        }}
                        href={`/introduction/${val.product_id}`}
                      >
                        เริ่มทำข้อสอบ
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              )
            })
            :
            null}
        </Box>
      </Box>

    </Box>
  )
}

export default ProfileHomepage