import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Button, TextField, Typography } from '@mui/material';
import Axios from 'axios';
import Alert from '@mui/material/Alert';

const CartBottomBar = ({ selectedItem, selectedAmount, promoDiscount, user_id }) => {

    const [code, setCode] = useState();
    const [codeDis, setCodeDis] = useState(0);

    const discount = selectedAmount * (promoDiscount / 100)

    const netAmount = (selectedAmount - discount) - codeDis

    const selectedAmountInthai = new Intl.NumberFormat('th').format(selectedAmount)
    const netInThai = new Intl.NumberFormat('th').format(netAmount);


    useEffect(() => {
        if (code === 'JKNOW2022') {
            setCodeDis(200)
        } else if (code === 'JNEWYEAR2023') {
            setCodeDis(150)
        } else {
            setCodeDis(0)
        }
    }, [code])

    const handleChangeCode = (e) => {
        setCode(e.target.value)
    }

    const handleSelectPromotion = (selectedItem) => {
        let selected = selectedItem?.length
        if (selected < 3) {
            return `เพิ่มอีก ${3 - selected} รายการเพื่อรับโปรโมชั่นส่วนลด 3%`
        }
        if (selected < 5) {
            return `เพิ่มอีก ${5 - selected} รายการเพื่อรับโปรโมชั่นส่วนลด 5%`
        }
        if (selected < 10) {
            return `เพิ่มอีก ${10 - selected} รายการเพื่อรับโปรโมชั่นส่วนลด 10%`
        }
    }

    const handleOnCheckOut = (selectedItem, code, codeDis, promoDiscount, discount) => {
        localStorage.setItem('selectItem', JSON.stringify(selectedItem))
        localStorage.setItem('discount', JSON.stringify([{ code: code, codeDis: codeDis, promoDiscount: promoDiscount, discount: discount }]))

        Axios.put('http://localhost:8000/updateSelectItem', {
            user_id: user_id,
            itemSelected: JSON.stringify(selectedItem)
        }).then((res) => {
            console.log(res);
        })

    }

    return (

        <Paper
            elevation={2}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                background: '#E8F3D6',
                height: '150px',
                borderTop: '5px solid #a3cc53',
                bottom: { xs: 61, md: 0 }, width: 1
            }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', my: .5, justifyContent: 'center' }} >
                <Typography sx={{ fontSize: { xs: '1rem', md: '1.3rem' }, textAlign: 'center' }}>
                    {promoDiscount === 0 ? null : `ได้รับส่วนลดแล้ว ${promoDiscount} % `}
                </Typography>
                <Typography sx={{ fontSize: { xs: '1rem', md: '1.3rem', textAlign: 'center' } }}>
                    {selectedItem?.length === 0 ?
                        "คุณยังไม่ได้เลือกสินค้า"
                        :
                        handleSelectPromotion(selectedItem)
                    }
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', mx: { xs: 0, md: 2 }, justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>

                <Box sx={{ display: 'flex', mx: 0.5, alignItems: 'center', justifyContent: 'space-between' }} >
                    <Typography sx={{ mr: 1 }}>โค้ดส่วนลด </Typography>
                    <TextField
                        size="small"
                        label='กรอกโค้ดส่วนลด...'
                        value={code}
                        onChange={handleChangeCode}
                        sx={{ width: { xs: '150px', md: '200px' } }}
                    />
                </Box>

                <Box sx={{ display: 'flex', mx: .5, mt: .5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                    <Typography
                        sx={{
                            fontSize: { xs: '.8rem', md: '1.2rem' },
                            mr: 1
                        }}>
                        รวม ( {selectedItem?.length} รายการ )
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Typography
                            sx={{
                                fontSize: { xs: '.9rem', md: '1.2rem' },
                                mr: 1
                            }}>
                            ราคา
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: '.9rem', md: '1.2rem' },
                                mr: 1,
                                textDecoration: (promoDiscount !== 0 || codeDis !== 0) ? 'line-through' : 'none',
                                textDecorationThickness: '3.5px'
                            }}>
                            {selectedAmountInthai} {(promoDiscount !== 0 || codeDis !== 0) ? '' : 'บาท'}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: '1rem', md: '1.4rem' },
                                color: "#FF1E1E",
                                fontWeight: 800,
                                display: (promoDiscount !== 0 || codeDis !== 0) ? 'flex' : 'none',
                                alignItems: 'flex-end',
                                mr: .5
                            }}>
                            {netInThai} บาท
                        </Typography>

                        <Button
                            variant='contained'
                            color="error"
                            href='/checkout'
                            disabled={selectedItem?.length === 0 ? true : false}
                            onClick={() => handleOnCheckOut(selectedItem, code, codeDis, promoDiscount, discount)}
                            size='small'
                            sx={{
                                fontSize: '1.2rem',
                                width: { xs: '125px', md: '250px' },
                                height: { xs: '', md: '65px' },
                                borderRadius: 5,
                            }}
                        >
                            สั่งซื้อ
                        </Button>
                    </Box>
                </Box>



            </Box>
        </Paper >
    )
}

export default CartBottomBar