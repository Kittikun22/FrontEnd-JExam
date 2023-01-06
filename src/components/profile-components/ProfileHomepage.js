import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import ProfileHomeFlickity from './ProfileHomeFlickity'

function ProfileHomepage({ user }) {
  return (
    <Box sx={{height:'92vh'}}>

        <Box m={2}>
          <Typography sx={{ display: 'inline-block', fontSize: '2rem', borderBottom: '4px solid #a3cc53', }}>
            ประวัติส่วนตัว
          </Typography>
        </Box>

        <Box p={2} m={2} sx={{ borderRadius: 3, bgcolor: 'white', boxShadow: 1 }} >

          <Box sx={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>
            <Typography>ชื่อ - นามสกุล</Typography>
            <Typography>{user.fname} {user.lname}</Typography>
          </Box>

          <Box sx={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>
            <Typography>โรงเรียน</Typography>
            <Typography>{user.school}</Typography>
          </Box>

          <Box sx={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>
            <Typography>จังหวัด</Typography>
            <Typography>{user.province}</Typography>
          </Box>

          <Box sx={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>
            <Typography>ระดับการศึกษา</Typography>
            <Typography>{user.grade}</Typography>
          </Box>

        </Box>

        <Box m={2}>
          <Typography sx={{ display: 'inline-block', fontSize: '2rem', borderBottom: '4px solid #a3cc53', }}>
            วิชาที่สอบ
          </Typography>
        </Box>

        <Box p={2} m={2} sx={{ borderRadius: 3, bgcolor: 'white', boxShadow: 1 }}>
          <ProfileHomeFlickity />
        </Box>

    </Box>
  )
}

export default ProfileHomepage