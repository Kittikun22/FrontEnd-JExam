import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Flickity from 'react-flickity-component'
import './HomeFlickity.css'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import Axios from 'axios'




function ALEVELFlickity() {

    const [ALEVELList, setALEVELList] = useState([])
    useEffect(() => {

        Axios.get('https://jexamapi.jknowledgetutor.com/getALEVEL').then((res) => {
            setALEVELList(res.data)
        })

    }, [])

    const flickityOptions = {
        initialIndex: 3,
        selectedAttraction: 0.01,
        friction: 0.15,
        contain: true,
        pageDots: false,
        wrapAround: true,
        autoPlay: true,
    }

    return (
        <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            reloadOnUpdate // default false
            static // default false
        >
            {ALEVELList.map((val, key) => {
                return (
                    <Box sx={{ mx: 2 }} key={key} className='exams-cell'>
                        <Card sx={{ width: 250, borderRadius: 10, border: 5, borderColor: 'white' }} className='card-exams-cell'>
                            <CardActionArea href={`/introduction/${val.product_id}`}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={val.pic}
                                    alt={val.name}
                                />
                                <Typography
                                    className='card-typography'
                                    noWrap
                                    sx={{
                                        marginTop: "-6rem",
                                        textAlign: 'center',
                                        color: 'white',
                                        fontSize: '1.25rem',
                                        fontWeight: 600,
                                        marginLeft: 1.5
                                    }}
                                >
                                    {val.name}
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Box>
                )
            })}

        </Flickity>

    )
}

export default ALEVELFlickity