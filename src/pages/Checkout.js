import React, { useEffect, useState } from 'react'
import CheckoutCart from '../components/Checkout/CheckoutCart'
import Box from '@mui/material/Box'
import Appbar from '../components/Appbar'
import PaymentOption from '../components/PaySolution/PaymentOption'
import Axios from 'axios'
import { Typography } from '@mui/material'
import { useAuthState } from '../context/AuthContext'


function Checkout() {

  const { user } = useAuthState();

  const [checkOutItem, setCheckOutItem] = useState([])
  const [allDiscount, setAllDiscount] = useState()
  const [selectedItems, setSelectedItems] = useState()

  useEffect(() => {
    setAllDiscount(JSON.parse(localStorage.getItem('discount')))
    const selectedItem = JSON.parse(localStorage.getItem('selectItem'))
    setSelectedItems(selectedItem)

    const arr_id = []
    selectedItem.map((val) => {
      return arr_id.push(val.product_id);
    })
    Axios.post('http://localhost:8000/getProductInCart', {
      product_id: arr_id
    }).then((res) => {
      setCheckOutItem(res.data);
    })
  }, [])

  if (checkOutItem && allDiscount) {

    let amount = 0;
    checkOutItem.map((val) => {
      return amount += val.amount
    })

    const netAmount = (amount - allDiscount[0].discount) - allDiscount[0].codeDis

    return (
      <>
        <Appbar />
        <Box
          p={2}
          sx={{
            background: 'linear-gradient(0deg, rgba(239,245,245,1) 0%, rgba(214,228,229,1) 100%)',
            minHeight:'100vh',
            pb: 15
          }}>
          <Typography
            sx={{
              fontSize: '2rem',
              display: 'inline-block',
              borderBottom: 5,
              borderColor: '#a0d64b',
              mb:2,
              ml: 1
            }}
          >
            ชำระเงิน
          </Typography>

          <CheckoutCart checkOutItem={checkOutItem} allDiscount={allDiscount} amount={amount} netAmount={netAmount} />

          <Box sx={{ mt: 2 }}>
            <PaymentOption selectedItems={selectedItems} user={user} amount={amount} netAmount={netAmount} />
          </Box>
        </Box>

      </>

    )
  }
}


export default Checkout