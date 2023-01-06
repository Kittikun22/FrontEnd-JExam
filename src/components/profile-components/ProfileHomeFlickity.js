import React from 'react'
import Box from '@mui/material/Box'
import Flickity from 'react-flickity-component'
import './ProfileHomeFlickity.css'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'

const SubjectList = [
    {
        id: 1,
        name: "Math",
        img: 'https://cdn.pixabay.com/photo/2017/07/19/16/44/questions-2519654_960_720.png'
    },
    {
        id: 2,
        name: "Sci",
        img: 'images/4.jpg'
    },
    {
        id: 3,
        name: "Computer",
        img: 'https://cdn.pixabay.com/photo/2020/09/24/16/50/board-5599231_960_720.png'
    },
    {
        id: 4,
        name: "Chem",
        img: 'https://cdn.pixabay.com/photo/2020/09/24/16/50/board-5599231_960_720.png'
    },
    {
        id: 5,
        name: "Bio",
        img: 'images/4.jpg'
    },
    {
        id: 6,
        name: "Chem2",
        img: 'https://cdn.pixabay.com/photo/2020/09/24/16/50/board-5599231_960_720.png'
    },
    {
        id: 7,
        name: "Chem3",
        img: 'https://cdn.pixabay.com/photo/2017/07/19/16/44/questions-2519654_960_720.png'
    },
    {
        id: 8,
        name: "Chem4",
        img: 'https://cdn.pixabay.com/photo/2017/07/19/16/44/questions-2519654_960_720.png'
    },
    {
        id: 9,
        name: "Chem5",
        img: 'images/4.jpg'
    }
]


function ProfileHomeFlickity() {

    const flickityOptions = {
        initialIndex: 3,
        selectedAttraction: 0.01,
        friction: 0.15,
        contain: true,
        pageDots: false,
        wrapAround: true
    }

    return (
        <>
            <Stack>
                <Box>
                    <Flickity
                        className={'carousel'} // default ''
                        elementType={'div'} // default 'div'
                        options={flickityOptions} // takes flickity options {}
                        reloadOnUpdate // default false
                        static // default false
                    >

                        {SubjectList.map((val, key) => {
                            return (
                                <Box sx={{ mx: 2 }} key={key} className='exams-cell'>
                                    <Card sx={{ width: 200, borderRadius: 5}}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="180"
                                                image={val.img}
                                                alt="green iguana"
                                            />
                                            <Typography
                                                sx={{
                                                    textAlign: 'center',
                                                    color: 'black',
                                                    fontSize: '1.3rem',
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
            </Stack >
        </>

    )
}

export default ProfileHomeFlickity