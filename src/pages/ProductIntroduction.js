import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios'
import Appbar from '../components/Appbar';
import Introduction from '../components/ProductIntro/Introduction';
import { Box } from '@mui/material'
import { useAuthState } from '../context/AuthContext'

function ProductIntroduction() {
    const { productID } = useParams();
    const { user } = useAuthState();

    const [subject , setSubject] = useState() //*************** */

    const [productDetail, setProductDetail] = useState()
    const [myExamList, setMyExamList] = useState([])

    const [cartItem, setCartItem] = useState(JSON.parse(localStorage.getItem('cart')));

    useEffect(() => {

        if (productID) {
            Axios.get(`https://jexamapi.jknowledgetutor.com/getProduct/${productID}`).then((res) => {
                setProductDetail(res.data[0])
            })
        }
        if (user) {
            Axios.post('https://jexamapi.jknowledgetutor.com/getuserproductandexams', {
                user_id: user.user_id
            }).then((res) => {
                setMyExamList(res.data)
            })
        }
        if (user) {
            localStorage.setItem('cart', JSON.stringify(cartItem))
            Axios.put('https://jexamapi.jknowledgetutor.com/updateCart', {
                user_id: user.user_id,
                updateCart: JSON.stringify(cartItem)
            })
        }

        if(productID === "1"){
            setSubject("thai")
        }
        if(productID === "2"){
            setSubject("english")
        }
        if(productID === "3"){
            setSubject("mathematics")
        }
        if(productID === "4"){
            setSubject("scienceandtechnology")
        }
        if(productID === "5"){
            setSubject("chemistry")
        }
        if(productID === "6"){
            setSubject("biology")
        }
        if(productID === "7"){
            setSubject("physics")
        }
    }, [user, cartItem])



    if (productDetail) {
        return (
            <>
                <Appbar cartItem={cartItem} />
                <Box sx={{
                    background: 'linear-gradient(0deg, rgba(239,245,245,1) 0%, rgba(214,228,229,1) 100%)',
                    minHeight: '100vh',
                }}>
                    <Introduction subject={subject} user={user} productDetail={productDetail} myExamList={myExamList} cartItem={cartItem} setCartItem={setCartItem} />
                </Box>
            </>

        )
    }
}

export default ProductIntroduction