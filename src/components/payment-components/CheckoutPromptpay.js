import React from "react";
import Script from 'react-load-script';
import Button from '@mui/material/Button';
import Axios from 'axios';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


let OmiseCard
export default function Promptpay({ amount, payerName, payerEmail }) {

    const handleLoadScript = () => {
        OmiseCard = window.OmiseCard
        OmiseCard.configure({
            publicKey: 'pkey_test_5tcziynopmane75t7s2',
            currency: 'THB',
            image: 'https://beta.jknowledgetutor.com/wp-content/uploads/2022/08/3A849E42-8E5B-41B4-BF89-A21622E3FF87.jpeg',
            frameLabel: 'J Knowledge Tutor',
            submitLabel: 'PAY NOW',
            buttonLabel: 'Pay with Omise'
        });
    }

    const PromptpayConfigure = () => {
        OmiseCard.configure({
            defaultPaymentMethod: 'promptpay',
        });
        OmiseCard.configureButton("#promptpay");
        OmiseCard.attach();
    }

    const omiseCardHandler = () => {
        OmiseCard.open({
            amount: amount * 100,
            onCreateTokenSuccess: (token) => {
                Axios.post('http://localhost:8000/checkout-promptpay', {
                        email: payerEmail,
                        name: payerName,
                        amount: amount * 100,
                        token: token,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((res) => {
                    const { download_uri } = res.data;
                    console.log(download_uri);  
                    if (download_uri) {
                        window.location = download_uri;
                    }
                    console.log(res.data);

                })
            },
            onFormClosed: () => {

            },
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        PromptpayConfigure();
        omiseCardHandler();
    }


    return (
        <>
            <Stack sx={{ textAlign: 'center' }} >
                <Box>
                    <Script url="https://cdn.omise.co/omise.js" onLoad={handleLoadScript} />
                </Box>
                <Box component='form'>
                    <Button variant="contained" id="promptpay" type="button" onClick={handleClick}>พร้อมเพย์</Button>
                </Box>
            </Stack>
        </>
    )
}
