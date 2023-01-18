import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


function CheckoutCart({ checkOutItem, allDiscount, amount, netAmount }) {

    const amountFormat = new Intl.NumberFormat('th').format(amount)
    const netAmountFormat = new Intl.NumberFormat('th').format(netAmount);

    if (checkOutItem && allDiscount) {
        return (
            <>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 325 }} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={2} sx={{ fontSize: '1.1rem' }}>
                                    รายการ
                                </TableCell>
                                <TableCell align="right" sx={{ fontSize: '1.1rem' }}>
                                    ราคา
                                </TableCell>
                                <TableCell align="right" sx={{ width: '50px' }}>

                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {checkOutItem.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell colSpan={2} sx={{ fontSize: '1.1rem' }}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" sx={{ fontSize: '1.1rem' }}>
                                        {row.amount}
                                    </TableCell>
                                    <TableCell align="right" sx={{ fontSize: '1.1rem' }}>
                                        บาท
                                    </TableCell>

                                </TableRow>
                            ))}

                            <TableRow>
                                <TableCell rowSpan={4} sx={{ width: { xxs: '', md: '50%' } }} />
                                <TableCell sx={{ fontSize: '1.1rem' }} >
                                    ราคารวม
                                </TableCell>
                                <TableCell align="right">
                                    <Typography sx={{ fontSize: '1.1rem' }}>{amountFormat}</Typography>
                                </TableCell>
                                <TableCell align="right" >
                                    <Typography sx={{ fontSize: '1.1rem' }}>บาท</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography sx={{ fontSize: '1.1rem' }}>
                                        โปรโมชั่น {allDiscount[0].promoDiscount === 0 ? '' : `(-${allDiscount[0].promoDiscount}%)`}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography sx={{ fontSize: '1.1rem' }}>{`- ${allDiscount[0].discount}`}</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography sx={{ fontSize: '1.1rem' }}>บาท</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography sx={{ fontSize: '1.1rem' }}>
                                        โค้ดส่วนลด {allDiscount[0].codeDis === 0 ? '' : `(${allDiscount[0].code})`}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right" >
                                    <Typography sx={{ fontSize: '1.1rem' }}>
                                        {`- ${allDiscount[0].codeDis}`}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography sx={{ fontSize: '1.1rem' }}>
                                        บาท
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >
                                    <Typography sx={{ fontSize: '1.3rem' }}>ราคาสุทธิ</Typography>
                                </TableCell>
                                <TableCell align="right" >
                                    <Typography sx={{ fontWeight: 900, fontSize: '1.3rem', color: 'red' }}>{netAmountFormat}</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography sx={{ fontSize: '1.3rem' }}>
                                        บาท
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>

                    </Table>
                </TableContainer >
            </>
        )
    }
}

export default CheckoutCart