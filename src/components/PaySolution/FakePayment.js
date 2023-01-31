import React, { useState } from 'react'
import { Button, Box, Typography } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Axios from 'axios'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Zoom from '@mui/material/Zoom'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const icon = (
    <Box component="svg" sx={{ display: 'flex', justifyContent: 'center' }}>
        <CheckCircleIcon color="success" />
    </Box>
);

function FakePayment({ selectedItems, user, amount, netAmount }) {

    const [payStatus, setPayStatus] = useState(false)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (itemToDelete) => {
        const updateItemInCart = JSON.parse(localStorage.getItem("cart")).filter((item) => !itemToDelete.find(i => i.product_id === item.product_id));
        localStorage.setItem('cart', JSON.stringify(updateItemInCart))

        Axios.put('http://localhost:8000/updateCart', {
            user_id: user.user_id,
            updateCart: JSON.stringify(updateItemInCart)
        }).then((res) => {
            console.log(res);
        })
    };

    const handleOnSuccess = () => {
        const products_arr = []
        selectedItems.map((val) => {
            return products_arr.push({ id: val.product_id });
        })
        const randomNumber = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
        let randomString = '';
        for (let i = 0; i < 10; i++) {
            const min = 'A'.charCodeAt(0);
            const max = 'Z'.charCodeAt(0);
            const randomCharCode = Math.floor(Math.random() * (max - min + 1)) + min;
            const randomChar = String.fromCharCode(randomCharCode).toLowerCase();
            randomString += randomChar;
        }

        Axios.post('http://localhost:8000/fakepay', {
            user_id: user.user_id,
            transaction: `trxn-${randomString}${randomNumber}`,
            amount: amount,
            net_amount: netAmount,
            payment_method: 'card',
            products: selectedItems,
        }).then((res) => {
            if (res.data.message === 'success') {
                handleDelete(selectedItems)
                setPayStatus(true)
                localStorage.setItem('selectItem', JSON.stringify([]))
                localStorage.setItem('discount', JSON.stringify([]))

                Axios.put('http://localhost:8000/updateSelectItem', {
                    user_id: user.user_id,
                    itemSelected: JSON.stringify([])
                }).then((res) => {
                    console.log(res);
                })
                setTimeout(() => {
                    localStorage.setItem('ActiveContent', 'profile-myexam')
                    window.location = '/profile'
                }, 2000);
            }
        })
    }

    if (user) {
        return (
            <>
                <Button variant='contained' onClick={handleClickOpen}>Fake Payment</Button>

                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    fullWidth={true}
                    keepMounted
                    onClose={handleClose}
                >
                    <DialogTitle sx={{ textAlign: 'center', fontSize: '2rem' }}>Fake Payment</DialogTitle>
                    <DialogContent>
                        <DialogContentText>

                            {payStatus === true ?
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Zoom in={true}>{icon}</Zoom>
                                    <Typography sx={{ fontSize: '1.5rem' }}>ชำระเงินสำเร็จ</Typography>
                                </Box>
                                :
                                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                                    <Button variant='contained'
                                        color='error'
                                        sx={{
                                            fontSize: '2rem', width: 150
                                        }}>
                                        ไม่สำเร็จ
                                    </Button>

                                    <Button variant='contained'
                                        sx={{
                                            fontSize: '2rem', width: 150
                                        }}
                                        onClick={handleOnSuccess}
                                    >
                                        สำเร็จ
                                    </Button>

                                </Box>}

                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </>
        )
    }

}

export default FakePayment