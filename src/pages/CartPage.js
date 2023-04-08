import React, { useState, useEffect } from 'react'
import Cart from '../components/Cart/Cart'
import Appbar from '../components/Appbar'
import Box from '@mui/material/Box'

const CryptoJS = require("crypto-js");
const EncryptSecret = 'Jknow2022'

function CartPage() {

  const [rowsData, setRowsData] = useState();

  useEffect(() => {
    setRowsData(JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('cart'), EncryptSecret).toString(CryptoJS.enc.Utf8)))
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