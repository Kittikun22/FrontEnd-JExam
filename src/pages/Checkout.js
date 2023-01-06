import React, { useEffect, useState } from 'react'
import CheckoutCart from '../components/Cart/CheckoutCart'
import Box from '@mui/material/Box'
import Appbar from '../components/Appbar'
import PaymentOption from '../components/PaySolution/PaymentOption'
import Axios from 'axios'
import { Typography } from '@mui/material'

function Checkout() {

  const [checkOutItem, setCheckOutItem] = useState([])
  const [allDiscount, setAllDiscount] = useState()

  useEffect(() => {
    setAllDiscount(JSON.parse(localStorage.getItem('discount')))
    const selectedItem = JSON.parse(localStorage.getItem('selectItem'))
    const arr_id = []
    selectedItem.map((val) => {
      return arr_id.push(val.id);
    })
    Axios.post('http://localhost:8000/getProductInCart', {
      product_id: arr_id
    }).then((res) => {
      setCheckOutItem(res.data);
    })

  }, [])

  return (
    <>
      <Appbar />
      <Box
        p={2}
        sx={{
          background: 'linear-gradient(0deg, rgba(239,245,245,1) 0%, rgba(214,228,229,1) 100%)'
        }}>
        <Typography
          sx={{
            fontSize: '2rem',
            display: 'inline-block',
            borderBottom: 5,
            borderColor: '#a3cc53',
            mb: 2,
            ml: 1
          }}
        >
          ชำระเงิน
        </Typography>
        <CheckoutCart checkOutItem={checkOutItem} allDiscount={allDiscount} />
        <Box sx={{ mt: 2 }}>
          <PaymentOption />
        </Box>
      </Box>

    </>

  )
}

export default Checkout