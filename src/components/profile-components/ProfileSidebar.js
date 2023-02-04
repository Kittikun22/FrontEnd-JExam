import React from 'react'
import Box from '@mui/material/Box';
import { List, ListItemIcon, ListItemText, ListItemButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import Divider from '@mui/material/Divider';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HistoryIcon from '@mui/icons-material/History';
import Avatar from '@mui/material/Avatar';

function ProfileSidebar({ user, activeContent, setActiveContent }) {

  const handleSetActiveContent = (activeContent) => {
    setActiveContent(activeContent)
    localStorage.setItem('ActiveContent', activeContent)
  }

  return (
    <>
      {user ?
        <List>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '20px', width: '250px' }}>

            <Avatar
              sx={{
                width: "125px", height: "125px",
                borderRadius: 50, border: 4,
                borderColor: '#a3cc53', mb: 2
              }}
              src={user.user_pic}
            />

            <Typography mx={2} sx={{ fontSize: '1.3rem' }}>
              {user.fname} {user.lname}
            </Typography>
          </Box>

          <Divider sx={{ my: 1 }} />

          <ListItemButton
            sx={{ borderLeft: activeContent === 'profile-homepage' ? '5px solid #a3cc53' : null }}
            onClick={() => { handleSetActiveContent('profile-homepage') }}>
            <ListItemIcon>
              <HomeIcon sx={{ color: activeContent === 'profile-homepage' ? '#a3cc53' : null }}/>
            </ListItemIcon>
            <ListItemText primary="หน้าแรก" />
          </ListItemButton>

          <ListItemButton
            sx={{ borderLeft: activeContent === 'profile-myexam' ? '5px solid #a3cc53' : null }}
            onClick={() => { handleSetActiveContent('profile-myexam') }}>
            <ListItemIcon>
              <AutoStoriesIcon sx={{ color: activeContent === 'profile-myexam' ? '#a3cc53' : null }} />
            </ListItemIcon>
            <ListItemText primary="ข้อสอบของฉัน" />
          </ListItemButton>


          <ListItemButton
            sx={{ borderLeft: activeContent === 'profile-analysis' ? '5px solid #a3cc53' : null }}
            onClick={() => { handleSetActiveContent('profile-analysis') }}>
            <ListItemIcon>
              <AssessmentIcon sx={{ color: activeContent === 'profile-analysis' ? '#a3cc53' : null }} />
            </ListItemIcon>
            <ListItemText primary="วิเคราะห์คะแนน" />
          </ListItemButton>

          <ListItemButton
            sx={{ borderLeft: activeContent === 'profile-history' ? '5px solid #a3cc53' : null }}
            onClick={() => { handleSetActiveContent('profile-history') }}>
            <ListItemIcon>
              <HistoryIcon sx={{ color: activeContent === 'profile-history' ? '#a3cc53' : null }} />
            </ListItemIcon>
            <ListItemText primary="ประวัติการทำข้อสอบ" />
          </ListItemButton>

          <Divider sx={{ my: 1 }} />

          <ListItemButton
            sx={{ borderLeft: activeContent === 'profile-payment' ? '5px solid #a3cc53' : null }}
            onClick={() => { handleSetActiveContent('profile-payment') }}>
            <ListItemIcon>
              <CreditCardIcon sx={{ color: activeContent === 'profile-payment' ? '#a3cc53' : null }} />
            </ListItemIcon>
            <ListItemText primary="การชำระเงิน" />
          </ListItemButton>

          <ListItemButton
            sx={{ borderLeft: activeContent === 'profile-setting' ? '5px solid #a3cc53' : null }}
            onClick={() => { handleSetActiveContent('profile-setting') }}>
            <ListItemIcon>
              <SettingsIcon sx={{ color: activeContent === 'profile-setting' ? '#a3cc53' : null }} />
            </ListItemIcon>
            <ListItemText primary="แก้ไขโปรไฟล์" />
          </ListItemButton>

        </List> : null
      }
    </>


  )
}

export default ProfileSidebar