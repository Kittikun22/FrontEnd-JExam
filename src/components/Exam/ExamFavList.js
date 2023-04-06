import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import {
    Button,
    CardActionArea,
    CardActions,
    Box,
    Divider,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckIcon from '@mui/icons-material/Check';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { motion } from 'framer-motion'
import Flickity from 'react-flickity-component'
import './ExamFlickity.css'
import BookmarkIcon from '@mui/icons-material/Bookmark';


function ExamFavList({ mostFav, myFavExam, onClickFavExam, onUnFavExam, myExamList, onAddToCart }) {

    const flickityOptions = {
        initialIndex: 0,
        selectedAttraction: 0.01,
        friction: 0.15,
        autoPlay: true,
        contain: true,
        pageDots: false,
        prevNextButtons: false,
    }


    return (
        <>
            <Box>
                <Typography variant='h4' align='center'>คนชื่นชอบมากที่สุด</Typography>
            </Box>
            <Box
                component={motion.div}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    reloadOnUpdate // default false
                    static // default false
                >

                    {mostFav?.map((val, key) => {
                        return (
                            <Box sx={{ mx: 1, position: 'relative' }} key={key}>

                                <Box>
                                    <BookmarkIcon
                                        sx={{
                                            position: 'absolute',
                                            zIndex: 10,
                                            right: -20,
                                            top: -15,
                                            fontSize: 70,
                                            color: "#FBDF07",
                                        }}
                                    />
                                    <Typography variant='h5' align="center"
                                        sx={{
                                            fontWeight: 700,
                                            zIndex: 20,
                                            position: 'absolute',
                                            right: key !== 9 ? 9 : 2,
                                            top: 0,
                                            color: '#000',
                                        }}>
                                        {key + 1}
                                    </Typography>

                                </Box>



                                <Card sx={{ width: { xs: 175, md: 225 }, borderRadius: 5, }} elevation={3} key={key}>
                                    <CardActionArea href={`/introduction/${val.exam_id}`}>
                                        <CardMedia
                                            component="img"
                                            height="150px"
                                            image={val.pic}
                                            alt={val.name}
                                        />
                                        <CardContent>
                                            <Typography noWrap sx={{ fontSize: '1.2rem', fontWeight: 600 }}>
                                                {val.name}
                                            </Typography>
                                            <Typography color="text.secondary"
                                                sx={{
                                                    height: '50px',
                                                    fontSize: '.85rem'

                                                }}>
                                                {val.detail}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>

                                        <Box sx={{ display: 'flex' }}>
                                            {myFavExam?.findIndex(fav => fav.exam_id === val.exam_id) === -1 ?
                                                <Tooltip title="ชื่นชอบ">
                                                    <IconButton onClick={() => onClickFavExam(val.exam_id)}>
                                                        <FavoriteIcon sx={{
                                                            color: myFavExam?.findIndex(fav => fav.exam_id === val.exam_id) === -1 ? 'grey' : '#E90064'
                                                        }} />
                                                    </IconButton>
                                                </Tooltip>
                                                :
                                                <Tooltip title="ยกเลิกการชื่นชอบ">
                                                    <IconButton onClick={() => onUnFavExam(val.exam_id)}>
                                                        <FavoriteIcon sx={{
                                                            color: myFavExam?.findIndex(fav => fav.exam_id === val.exam_id) === -1 ? 'grey' : '#E90064'
                                                        }} />
                                                    </IconButton>
                                                </Tooltip>
                                            }

                                            <Tooltip title="จำนวนคนชื่นชอบ">
                                                <Typography alignSelf="center" variant='body2'>{new Intl.NumberFormat("th").format(val.favorite)} ครั้ง</Typography>
                                            </Tooltip>
                                        </Box>

                                        {myExamList?.findIndex(item => item.exam_id === val.exam_id) === -1 ?
                                            <Tooltip title="เพิ่มลงรถเข็น">
                                                <Button
                                                    variant='contained'
                                                    color="secondary"
                                                    startIcon={<AddShoppingCartIcon fontSize='large' />}
                                                    sx={{ borderRadius: 5, width: { xs: '150px', md: '200px' } }}
                                                    onClick={() => onAddToCart(val)}
                                                >
                                                    <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>
                                                        {val.amount} บาท
                                                    </Typography>
                                                </Button>
                                            </Tooltip>
                                            :
                                            <Button
                                                variant='contained'
                                                color="secondary"
                                                disabled
                                                startIcon={<CheckIcon fontSize='large' />}
                                                sx={{ borderRadius: 5, width: { xs: '150px', md: '200px' } }}
                                            >
                                                <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>
                                                    มีข้อสอบแล้ว
                                                </Typography>
                                            </Button>
                                        }
                                    </CardActions>
                                </Card>
                            </Box>
                        )
                    })}

                </Flickity>
            </Box>
            <Divider sx={{ my: 4 }} />
        </>
    )
}

export default ExamFavList