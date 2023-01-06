import React from 'react'
import { Button, Typography, Box } from '@mui/material'

function PaymentOption() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems:'center' }}>
                <Typography >เลือกวิธีการชำระเงิน</Typography>
                <Button variant='contained' sx={{mx:2}}>Pay Solution</Button>
            </Box>
        </>
    )
}

export default PaymentOption