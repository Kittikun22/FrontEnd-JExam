import React, { useEffect, useState } from 'react'
import Appbarstatic from '../components/Appbarstatic'
import System from '../components/takeanexam_components/system'
import { useParams } from 'react-router-dom';
import Axios from 'axios'
const CryptoJS = require("crypto-js");
const EncryptSecret = 'Jknow2022'

function Takeanexam() {
    const { subject } = useParams();

    const [user, setUser] = useState()

    const [productId, setProductId] = useState()



    useEffect(() => {

        const ciphertext = JSON.parse(localStorage.getItem("users"))
        if (ciphertext) {
            const bytes = CryptoJS.AES.decrypt(ciphertext, EncryptSecret);
            const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            setUser(decryptedData)
        }

        if (subject === "thai") {
            setProductId(1)
        }
        if (subject === "english") {
            setProductId(2)
        }
        if (subject === "mathematics") {
            setProductId(3)
        }
        if (subject === "scienceandtechnology") {
            setProductId(4)
        }
        if (subject === "chemistry") {
            setProductId(5)
        }
        if (subject === "biology") {
            setProductId(6)
        }
        if (subject === "physics") {
            setProductId(7)
        }

    }, [])


    return (
        <>
            <Appbarstatic />
            <System subject={subject} productId={productId} user={user} />
        </>
    )
}

export default Takeanexam