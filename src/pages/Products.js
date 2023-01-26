import React, { useState, useEffect } from 'react'
import Appbar from '../components/Appbar'
import ProductsList from '../components/Product/ProductsList'
import Box from '@mui/material/Box'
import { useAuthState } from '../context/AuthContext'
import Axios from 'axios'

function Products() {

    const { user } = useAuthState();

    const [cartItem, setCartItem] = useState(JSON.parse(localStorage.getItem('cart')));

    const [allProduct, setAllProduct] = useState([])

    useEffect(() => {

        Axios.get('https://jexamapi.jknowledgetutor.com/getAllProduct').then((res) => {
            setAllProduct(res.data)
        })

        if (user) {
            localStorage.setItem('cart', JSON.stringify(cartItem))
            Axios.put('https://jexamapi.jknowledgetutor.com/updateCart', {
                user_id: user.user_id,
                updateCart: JSON.stringify(cartItem)
            })
        }

    }, [cartItem])

    return (
        <>
            <Appbar cartItem={cartItem} />
            <Box
                sx={{
                    margin: { xs: 1.5, md: 5 },
                    
                }}
            >
                <ProductsList user={user} cartItem={cartItem} setCartItem={setCartItem} allProduct={allProduct} />
            </Box>
        </>
    )
}

export default Products