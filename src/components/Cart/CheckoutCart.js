import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function CheckoutCart({ checkOutItem, allDiscount }) {

    const [amount, setAmount] = useState()
    const [totalAmount, setTotalAmount] = useState()


    useEffect(() => {
        if (checkOutItem && allDiscount) {
            let total = 0;
            checkOutItem.map((val) => {
                return total += val.amount
            })

            const totally = total
            const totalAmount = (totally - allDiscount[0].discount) - allDiscount[0].codeDis
            const amountInThai = new Intl.NumberFormat('th').format(totally)
            const totalInThai = new Intl.NumberFormat('th').format(totalAmount);

            console.log(totalAmount);

            setAmount(amountInThai)
            setTotalAmount(totalInThai)


        }

    }, [checkOutItem])


    if (checkOutItem && allDiscount) {
        return (
            <>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 325 }} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={2} sx={{ fontSize: '1.2rem' }}>รายการ</TableCell>
                                <TableCell align="right" sx={{ fontSize: '1.2rem' }}>ราคา</TableCell>
                                <TableCell align="right" sx={{ width: '50px' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {checkOutItem.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell colSpan={2}>{row.name}</TableCell>
                                    <TableCell align="right">{row.amount}</TableCell>
                                    <TableCell align="right">บาท</TableCell>

                                </TableRow>
                            ))}

                            <TableRow>
                                <TableCell rowSpan={4} sx={{ width: { xxs: '', md: '50%' } }} />
                                <TableCell >ราคารวม</TableCell>
                                <TableCell align="right">{amount}</TableCell>
                                <TableCell align="right">บาท</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >โปรโมชั่น {allDiscount[0].promoDiscount === 0 ? '' : `(-${allDiscount[0].promoDiscount}%)`}</TableCell>
                                <TableCell align="right">{`- ${allDiscount[0].discount}`}</TableCell>
                                <TableCell align="right">บาท</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>โค้ดส่วนลด {allDiscount[0].codeDis === 0 ? '' : `(${allDiscount[0].code})`} </TableCell>
                                <TableCell align="right">{`- ${allDiscount[0].codeDis}`}</TableCell>
                                <TableCell align="right">บาท</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ fontSize: '1.2rem' }}>ราคาสุทธิ</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 900, fontSize: '1.2rem', color: 'red' }}>
                                    {totalAmount}
                                </TableCell>
                                <TableCell sx={{ fontSize: '1.2rem' }} align="right">บาท</TableCell>
                            </TableRow>
                        </TableBody>

                    </Table>
                </TableContainer >
            </>
        )
    }
}

export default CheckoutCart