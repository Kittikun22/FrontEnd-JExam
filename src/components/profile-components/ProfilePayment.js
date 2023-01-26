import React, { useState, useEffect } from 'react'
import { Typography, Box, Stack, Divider, Button } from '@mui/material'
import Axios from 'axios'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


function ProfilePayment({ user }) {


  const [paymentHistory, setPaymentHistory] = useState()

  useEffect(() => {
    Axios.post('https://jexamapi.jknowledgetutor.com/paymentHistory', {
      user_id: user.user_id
    }).then((res) => {
      setPaymentHistory(res.data)
    })
  }, [])

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <Box p={2} m={2} sx={{ borderRadius: 3, bgcolor: 'white', boxShadow: 1 }}>
      {paymentHistory?.length === 0 ? <Typography sx={{ textAlign: 'center', fontSize: '1.3rem' }}>ไม่พบประวัติการชำระเงิน</Typography> : null}

      <Divider sx={{ my: 1 }} />


      {paymentHistory?.map((val, key) => {
        return (
          <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            key={key}
          >
            <ListItemButton
              onClick={handleClick}
              sx={{ background: '#D7E9B9', borderRadius: 7 }}
            >
              <ListItemText primary={formatDate(val.paid_at)} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Box sx={{ px: 2, display: 'flex', justifyContent: 'space-between', }}>
                  <Typography>Transaction</Typography>
                  <Typography>{val.transaction}</Typography>
                </Box>
                <Box sx={{ px: 2, display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>รายการสินค้า</Typography>
                  <Box>
                    {JSON.parse(val.products).map((val, key) => {
                      return (
                        <Typography noWrap key={key}>{key + 1}. {val}</Typography>
                      )
                    }
                    )}
                  </Box>
                </Box>

                <Box sx={{ px: 2, display: 'flex', justifyContent: 'space-between', }}>
                  <Typography>ราคา</Typography>
                  <Typography>{val.net_amount} บาท</Typography>
                </Box>

                <Box sx={{ px: 2, display: 'flex', justifyContent: 'space-between', }}>
                  <Typography>ช่องทางการชำระ</Typography>
                  <Typography>{val.payment_method}</Typography>
                </Box>

                <Box sx={{ px: 2, display: 'flex', justifyContent: 'space-between', }}>
                  <Typography>วันที่ชำระ</Typography>
                  <Typography>{formatDate(val.paid_at)}</Typography>
                </Box>

                <Box sx={{ px: 2, display: 'flex', justifyContent: 'center', }}>
                  <Button>ใบกำกับภาษี</Button>
                </Box>

              </List>

            </Collapse>
            <Divider sx={{ my: 1 }} />
          </List>
        )
      })}


    </Box >
  )
}

export default ProfilePayment