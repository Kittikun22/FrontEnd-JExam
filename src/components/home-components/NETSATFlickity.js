import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Flickity from 'react-flickity-component'
import './HomeFlickity.css'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import Axios from 'axios'



function NETSATFlickity() {

    const [NETSATList, setNETSATList] = useState([])
    useEffect(() => {

        Axios.get('http://localhost:8000/getNETSAT').then((res) => {
            setNETSATList(res.data)
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

        <Box sx={{ width: { xs: '100%', md: '100%' }, mx: 'auto' }}>

            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                reloadOnUpdate // default false
                static // default false
            >
                {NETSATList.map((val, key) => {
                    return (
                        <Box sx={{ mx: 2 }} key={key} className='exams-cell'>
                            <Card sx={{ width: 225, borderRadius: 10, border: 5, borderColor: 'white' }}>
                                <CardActionArea href={`/introduction/${val.id}`}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={val.pic}
                                        alt={val.name}
                                    />
                                    <Typography
                                        noWrap
                                        sx={{
                                            marginTop: "-6rem",
                                            textAlign: 'center',
                                            color: 'white',
                                            fontSize: '1.2rem',
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
        </Box>
    )
}

export default NETSATFlickity