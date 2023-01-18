import React from 'react'
import { Button, Typography, Box } from '@mui/material'
import FakePayment from './FakePayment'

function PaymentOption({ selectedItems, user, amount, netAmount }) {

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: { xs: 'flex-start', md: 'center' } }}>
                <Typography sx={{ mr: 2 }}>เลือกวิธีการชำระเงิน</Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                    <Button variant='contained' >Pay Solution</Button>
                    <FakePayment selectedItems={selectedItems} user={user} amount={amount} netAmount={netAmount} />
                </Box>
            </Box>
        </>
    )
}

export default PaymentOption