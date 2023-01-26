import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
  Button,
} from "@mui/material";


function Takeanexam() {

    useEffect(() => {
        if (user) {
          Axios.post('http://localhost:8000/UserProduct', {
            user_id: user.user_id,
            product_id: productId
          }).then((res) => {
            if (res.data.message === 'ok') {
               
            } else {
              setOpenDialog(true)
              setMessage('ไม่มีสิทธิ์ในการเข้าถึงข้อสอบ เนื่องจากยังไม่ได้ซื้อข้อสอบชุดนี้')
            }
          })
        }
    
      }, [user])

  return (
    <div>Takeanexam</div>
  )
}

export default Takeanexam