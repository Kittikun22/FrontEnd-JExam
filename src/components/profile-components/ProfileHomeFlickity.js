import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Flickity from 'react-flickity-component'
import './ProfileHomeFlickity.css'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import Axios from 'axios'
import { motion } from 'framer-motion'


function ProfileHomeFlickity({ user }) {


    const [myExamList, setMyExamList] = useState([])

    useEffect(() => {
        Axios.post('http://localhost:8000/getuserproductandexams', {
            user_id: user.user_id
        }).then((res) => {
            setMyExamList(res.data)
        })
    }, [])

    const flickityOptions = {
        initialIndex: 1,
        selectedAttraction: 0.01,
        friction: 0.15,
        autoPlay: true,
        contain: true,
        pageDots: false,
        wrapAround: true
    }

    return (
        <>
            <Box sx={{ display: myExamList?.length >= 4 ? 'block' : 'none' }}
                component={motion.div}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    reloadOnUpdate // default false
                    static // default false
                >

                    {myExamList?.map((val, key) => {
                        return (
                            <Box sx={{ mx: 2 }} key={key} className='myexams-cell'>
                                <Card sx={{ width: 300, borderRadius: 10, border: 5, borderColor: 'white' }} className='card-myexams-cell'>
                                    <CardActionArea href={`/introduction/${val.product_id}`}>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={val.pic}
                                            alt={val.name}
                                        />
                                        <Typography
                                            className='on-card-typography'
                                            noWrap
                                            variant='h6'
                                            sx={{
                                                marginTop: "-5rem",
                                                textAlign: 'center',
                                                color: 'white',
                                                fontWeight: 600,
                                                marginLeft: 1.5,
                                            }}
                                        >
                                            {val.name}
                                        </Typography>
                                    </CardActionArea>
                                </Card>

                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Typography
                                        className='card-typography'
                                        noWrap
                                        variant='h6'
                                        sx={{
                                            display: 'none',
                                            background: '#fff',
                                            borderRadius: 7,
                                            p: 1,
                                            width: 250,
                                            minHeight: 60,
                                            color: '#000',
                                            fontWeight: 600,
                                            textAlign: 'center'
                                        }}
                                    >
                                        {val.name}
                                    </Typography>
                                </Box>

                            </Box>
                        )
                    })}
                </Flickity>

            </Box >
        </>

    )
}

export default ProfileHomeFlickity