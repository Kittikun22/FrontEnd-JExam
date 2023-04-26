import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Box } from '@mui/material';
import QRCode from "qrcode.react";
import GuidelineDialog from './GuidelineDialog';

const generatePayload = require("promptpay-qr");

function CheckoutCart({ checkOutItem, allDiscount, amount, netAmount }) {

    const [openGuideline, setOpenGuideline] = useState(true)

    const [qrCode, setqrCode] = useState(null);
    const promptpayNumber = "0405558000721" //เลขพร้อมเพย์ พร้อมเพย์ ID หรือ เบอร์โทรศัพท์

    const amountFormat = new Intl.NumberFormat('th').format(amount)
    const netAmountFormat = new Intl.NumberFormat('th').format(netAmount);

    function handleQR() {
        setqrCode(generatePayload(promptpayNumber, { amount: netAmount }));
    }

    useEffect(() => {
        handleQR()
    }, [checkOutItem, allDiscount, amount, netAmount])


    if (checkOutItem && allDiscount) {
        return (
            <>
                <GuidelineDialog openGuideline={openGuideline} setOpenGuideline={setOpenGuideline} />

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
                                <TableCell rowSpan={4} sx={{ width: { xxs: '', md: '50%' } }} >
                                    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                                        <QRCode
                                            value={qrCode}
                                            size={240}
                                            imageSettings={{
                                                src: "logo-on-qrcode.jpeg",
                                                height: 50,
                                                width: 64,
                                                excavate: true,
                                            }}
                                        />
                                    </Box>
                                    <Typography sx={{ display: { xs: 'none', md: 'block' }, m: 1 }} align='center'>
                                        บริษัท ดีพร้อมวิทยา จำกัด<br />
                                        0-4055-58000-72-1
                                    </Typography>
                                </TableCell>
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

                <Box
                    sx={{
                        display: { xxs: 'flex', md: 'none' },
                        justifyContent: 'center',
                    }}
                >
                    <Paper align="center" sx={{ background: '#fff', p: 2, mt: 2 }}>
                        <QRCode
                            value={qrCode}
                            size={240}
                            imageSettings={{
                                src: "logo-on-qrcode.jpeg",
                                height: 50,
                                width: 64,
                                excavate: true,
                            }}
                        />
                        <Typography sx={{ display: { xs: 'block', md: 'none' }, m: 1 }} align='center'>
                            บริษัท ดีพร้อมวิทยา จำกัด<br />
                            0-4055-58000-72-1
                        </Typography>
                    </Paper>
                </Box>
            </>
        )
    }
}

export default CheckoutCart