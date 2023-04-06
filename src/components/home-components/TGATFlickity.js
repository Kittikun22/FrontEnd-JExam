import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Flickity from 'react-flickity-component'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import Axios from 'axios'

function TGATFlickity() {

    const [TGATList, setTGATList] = useState([])
    useEffect(() => {

        Axios.get('http://localhost:8000/getTGAT').then((res) => {
            setTGATList(res.data)
        })

    }, [])


    const flickityOptions = {
        initialIndex: 1,
        selectedAttraction: 0.01,
        friction: 0.15,
        contain: true,
        pageDots: false,
        wrapAround: true,
        autoPlay: true,
    }

    return (
        <Box sx={{ width: { xs: '100%', md: '80%' }, mx: 'auto' }}>

            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                reloadOnUpdate // default false
                static // default false
            >
                {TGATList.map((val, key) => {
                    return (
                        <Box sx={{ mx: 2, position: 'relative' }} key={key} className='exams-cell'>

                            <Card sx={{ width: 300, borderRadius: 10, border: 5, borderColor: 'white' }} className='card-exams-cell'>
                                <CardActionArea href={`/introduction/${val.exam_id}`}>
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

        </Box>

    )
}

export default TGATFlickity