import React, { useState, useEffect } from 'react'
import Cart from '../components/Cart/Cart'
import Appbar from '../components/Appbar'
import Box from '@mui/material/Box'


function CartPage() {

  const [rowsData, setRowsData] = useState();

  useEffect(() => {
    setRowsData(JSON.parse(localStorage.getItem('cart')))
  }, [])


  if (rowsData) {
    return (
      <>
        <Appbar />
        <Box sx={{ marginBottom: '100px' }}>
          <Cart rowsData={rowsData} setRowsData={setRowsData} />
        </Box>
      </>
    )
  }
}

export default CartPage