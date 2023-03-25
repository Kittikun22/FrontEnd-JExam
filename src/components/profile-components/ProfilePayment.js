import React, { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'
import Axios from 'axios'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={1} {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#a0d64b25',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function ProfilePayment({ user }) {

  const [paymentHistory, setPaymentHistory] = useState()

  useEffect(() => {
    Axios.post('http://localhost:8000/paymentHistory', {
      user_id: user.user_id
    }).then((res) => {
      setPaymentHistory(res.data)
    })
  }, [])

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Box m={2}>
        <Typography sx={{ display: 'inline', fontSize: '2rem', borderBottom: '4px solid #a0d64b', }}>
          การชำระเงิน
        </Typography>
      </Box>

      <Box p={2} m={2} sx={{ borderRadius: 3, bgcolor: 'white', boxShadow: 1, minHeight: 300 }}>
        {paymentHistory?.length === 0 ? <Typography sx={{ textAlign: 'center', fontSize: '1.3rem' }}>ไม่พบประวัติการชำระเงิน</Typography> : null}

        <Box
          component={motion.div}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {paymentHistory?.map((val, key) => {
            return (
              <Accordion expanded={expanded === `panel${key}`} onChange={handleChange(`panel${key}`)}>
                <AccordionSummary>
                  <Typography>{formatDate(val.paid_at)}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>
                      Transaction :
                    </Typography>
                    <Typography>
                      {val.transaction}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>รายการสินค้า : </Typography>
                    <Box>
                      {JSON.parse(val.products).map((val, key) => {
                        return (
                          <Typography noWrap key={key}>{key + 1}. {val}</Typography>
                        )
                      }
                      )}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>
                      ราคา :
                    </Typography>
                    <Typography>
                      {val.net_amount} บาท
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>
                      ช่องทางการชำระ :
                    </Typography>
                    <Typography>
                      {val.payment_method}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button>ใบกำกับภาษี</Button>
                  </Box>
                </AccordionDetails>
              </Accordion>
            )
          })}
        </Box >
      </Box>
    </>
  )
}

export default ProfilePayment