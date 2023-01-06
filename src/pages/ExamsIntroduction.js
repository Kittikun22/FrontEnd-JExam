import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material'
import Axios from 'axios'
import Appbar from '../components/Appbar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function ExamsIntroduction() {
    const { productID } = useParams();

    const [productDetail, setProductDetail] = useState()

    useEffect(() => {
        try {
            if (productID) {
                Axios.get(`http://localhost:8000/getProduct/${productID}`).then((res) => {
                    setProductDetail(res.data[0])
                })
            }
        } catch (error) {
            console.log(error);
        }
    }, [])

    console.log(productDetail);

    if (productDetail) {
        return (
            <>
                <Appbar />

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                    <Box>
                        <Typography>
                            ID : {productID} <br />
                            ชื่อ : {productDetail.name}<br />
                            วิชา : {productDetail.subject_name}<br />
                            หมวดหมู่ : {productDetail.category_name}<br />
                            รายละเอียด : {productDetail.detail}<br />
                            ราคา : {productDetail.amount} บาท
                        </Typography>

                        <Button variant="contained" color="success" startIcon={<AddShoppingCartIcon />}>
                            เพิ่มลงรถเข็น
                        </Button>
                    </Box>

                    <Box component='img'
                        src={`/${productDetail.pic}`}
                        sx={{
                            width: '450px',
                            height: 'auto'
                        }}
                    />
                </Box>
            </>

        )
    }
}

export default ExamsIntroduction