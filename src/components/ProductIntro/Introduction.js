import React, { useEffect, useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box, Typography, Button, Paper, Stack } from '@mui/material'
import BluePrint from './BluePrint';
import SnackbarAlert from '../SnackbarAlert'
import Login from '../Login-Dialog';

function Introduction({ subject, user, productDetail, myExamList, cartItem, setCartItem }) {

    const bluePrint = JSON.parse(productDetail.blueprint)

    console.log(subject);
    const [openLogin, setOpenLogin] = useState(false)
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [message, setMessage] = useState('')
    const [snackBarColor, setSnackBarColor] = useState()

    const onAddToCart = (product) => {
        if (!user) {
            setOpenLogin(true)
        } else {
            const check_index = cartItem.findIndex(item => item.product_id === product.product_id);
            if (check_index !== -1) {
                setMessage(product.name + ' มีในตะกร้าอยู่แล้ว')
                setSnackBarColor('error')
                setOpenSnackBar(true)
            } else {
                setCartItem(JSON.parse(localStorage.getItem('cart')))
                setCartItem(cartItem => [...cartItem, product]);
                setMessage(product.name + ' ถูกเพิ่มเข้าตะกร้าแล้ว')
                setSnackBarColor('success')
                setOpenSnackBar(true)
            }
        }

    }

    return (
        <>
            <SnackbarAlert open={openSnackBar} setOpen={setOpenSnackBar} message={message} color={snackBarColor} />
            <Login openLogin={openLogin} setOpenLogin={setOpenLogin} />

            <Box sx={{
                py: 5,
                mx: { xs: 2, md: 15 },
                pb: 10
            }}>
                <Stack spacing={2}>
                    <Paper elevation={2} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        borderRadius: 5,
                        p: 2,
                        flexDirection: { xs: 'column', md: 'row' }
                    }}>
                        <Box component='img'
                            src={`/${productDetail.pic}`}
                            sx={{
                                width: '225px',
                                borderRadius: 3
                            }}
                        />

                        <Stack spacing={2}>
                            <Box>
                                <Typography sx={{ display: 'inline', borderBottom: '4px solid #a3cc53', fontSize: '1.3rem', fontWeight: 600, textAlign: 'center' }}>
                                    {productDetail.name}
                                </Typography>
                            </Box>

                            <Typography sx={{ fontSize: '1.1rem' }}>
                                ชื่อวิชา : {productDetail.name}<br />
                                วิชา : {productDetail.subject_name}<br />
                                สนามสอบ : {productDetail.category_name}<br />
                                รายละเอียด : {productDetail.detail}<br />
                                ราคา : {productDetail.amount} บาท
                            </Typography>

                            {myExamList?.findIndex(item => item.product_id === productDetail.product_id) === -1
                                ?
                                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <Button
                                        variant='contained'
                                        color="secondary"
                                        startIcon={<AddShoppingCartIcon />}
                                        sx={{ borderRadius: 5, width: '200px' }}
                                        onClick={() => onAddToCart(productDetail)}
                                    >
                                        <Typography sx={{ fontSize: '1.1rem', fontWeight: 600 }}>
                                            เพิ่มลงรถเข็น
                                        </Typography>
                                    </Button>
                                </Box>
                                :
                                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <Button
                                        variant='contained'
                                        color="warning"
                                        sx={{ borderRadius: 5, width: '200px' }}
                                        // href={`/exam/${productDetail.product_id}`}
                                        href={subject ? `/takeanexam/netsat/${subject}` : `/exam/${productDetail.product_id}`}
                                    >
                                        <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>
                                            เริ่มทำข้อสอบ
                                        </Typography>
                                    </Button>
                                </Box>
                            }
                        </Stack>
                    </Paper>


                    {
                        bluePrint ?
                            <>
                                <Box>
                                    <Typography sx={{ display: 'inline', borderBottom: '4px solid #a3cc53', fontSize: '1.5rem', fontWeight: 600 }}>
                                        โครงสร้างข้อสอบ (EXAM BLUEPRINT)
                                    </Typography>
                                </Box>
                                <Paper elevation={2} sx={{
                                    borderRadius: 5,
                                    p: 2
                                }}>
                                    <Typography sx={{ fontSize: '1.5rem', fontWeight: 600, color: "#019267", mb: 2 }}>
                                        {productDetail.name}
                                    </Typography>
                                    <BluePrint bluePrint={bluePrint} />

                                </Paper>
                            </>
                            :
                            <>
                                <Box>
                                    <Typography sx={{ display: 'inline', borderBottom: '4px solid #a3cc53', fontSize: '1.5rem', fontWeight: 600 }}>
                                        โครงสร้างข้อสอบ (EXAM BLUEPRINT)
                                    </Typography>
                                </Box>
                                <Paper elevation={2} sx={{
                                    borderRadius: 5,
                                    p: 2
                                }}>
                                    <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, color: "#019267", mb: 2 }}>
                                        ยังไม่มีโครงสร้างข้อสอบ
                                    </Typography>
                                </Paper>
                            </>
                    }

                </Stack >
            </Box >
        </>
    )
}

export default Introduction