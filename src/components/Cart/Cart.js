import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box'
import { Button, Typography } from '@mui/material';
import CartBottomBar from './CartBottomBar';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuthState } from '../../context/AuthContext'
import Axios from 'axios';

const columns = [
    { field: 'name', headerName: 'รายการ', minWidth: 150, flex: 1, },
    { field: 'amount', headerName: 'ราคา (บาท)', minWidth: 125, flex: 0, },
];


export default function Cart({ rowsData, setRowsData }) {
    const { user } = useAuthState();

    const [itemInCart, setItemInCart] = useState();

    useEffect(() => {
        const arr_id = []
        rowsData.map((val) => {
            return arr_id.push(val.product_id);
        })

        Axios.post('http://localhost:8000/getProductInCart', {
            product_id: arr_id
        }).then((res) => {
            setItemInCart(res.data);
        })

        localStorage.setItem('selectItem', JSON.stringify([]))
        localStorage.setItem('discount', JSON.stringify([]))
    }, [])

    const [pageSize, setPageSize] = useState(5);
    const [selectedItem, setSelectedItem] = useState([]);
    const [selectedAmount, setSelectedAmount] = useState(0);
    const [promoDiscount, setPromoDiscount] = useState(0);

    const onRowsSelectionHandler = (product_ids) => {
        const selectedRowsData = product_ids.map((product_id) => itemInCart.find((row) => row.product_id === product_id));
        setSelectedItem(selectedRowsData);
        onSelectedAmount(selectedRowsData)
        handlePromoDiscount(selectedRowsData)
    };

    const onSelectedAmount = (selectedRowsData) => {
        let total = 0;
        selectedRowsData.map((val) => {
            return total += val.amount
        })
        setSelectedAmount(total)
    }

    const handlePromoDiscount = (selectedRowsData) => {
        let selected = selectedRowsData?.length

        if (selected <= 2) {
            setPromoDiscount(0)
        }
        if (selected >= 3) {
            setPromoDiscount(3)
        }
        if (selected >= 5) {
            setPromoDiscount(5)
        }
        if (selected >= 10) {
            setPromoDiscount(10)
        }
    }

    const handleDelete = (itemToDelete) => {
        const updateItemInCart = itemInCart.filter(row => !itemToDelete.includes(row))

        localStorage.setItem('cart', JSON.stringify(updateItemInCart))
        setItemInCart(updateItemInCart)

        Axios.put('http://localhost:8000/updateCart', {
            user_id: user.user_id,
            updateCart: JSON.stringify(updateItemInCart)
        })
    };

    if (itemInCart) {
        return (
            <>
                <Box m={2} sx={{ height: pageSize === 5 ? 375 : 650, marginBottom: '400px' }}>

                    <Box m={1} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography
                            sx={{
                                fontSize: '2rem',
                                display: 'inline',
                                borderBottom: 5,
                                borderColor: '#a3cc53',
                                mb: 2
                            }}
                        >
                            รถเข็นสินค้า
                        </Typography>
                        <Button
                            variant="outlined"
                            color='error'
                            startIcon={<DeleteIcon />}
                            sx={{
                                borderRadius: 10,
                                width: '75px',

                            }}
                            onClick={() => handleDelete(selectedItem)}
                        >
                            ลบ
                        </Button>
                    </Box>

                    <DataGrid
                        rows={itemInCart}
                        getRowId={(row) => row.product_id}
                        columns={columns}
                        pageSize={pageSize}
                        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                        rowsPerPageOptions={[5, 10, 20]}
                        checkboxSelection
                        onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
                        sx={{ fontSize: '1.2rem' }}
                    />

                </Box>

                <CartBottomBar selectedItem={selectedItem} selectedAmount={selectedAmount} promoDiscount={promoDiscount} user_id={user.user_id} />

            </>
        );
    } else {
        return (
            <>
                <Typography sx={{ textAlign: 'center', fontSize: '2rem', mt: '15%' }}> ไม่มีสินค้าในตะกร้า</Typography>
                <Typography sx={{ textAlign: 'center', }}><a href='/exam-library'>ดูข้อสอบทั้งหมด</a></Typography>
            </>
        )
    }

}
