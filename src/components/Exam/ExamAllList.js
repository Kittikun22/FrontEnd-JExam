import React from 'react'
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
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckIcon from '@mui/icons-material/Check';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { motion } from 'framer-motion'

function ExamAllList({ allExams, myFavExam, onClickFavExam, onUnFavExam, myExamList, onAddToCart }) {
    return (
        <>
            <Box>
                <Typography variant='h4' align='center'>ข้อสอบทั้งหมด</Typography>
            </Box>
            <Box
                component={motion.div}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '15px',
                    marginBottom: 15,
                    marginTop: 2,
                    justifyContent: 'center'
                }}>

                {allExams?.map((val, key) => {
                    return (
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
                                        <Typography alignSelf="center" variant='body2'>{val.favorite} ครั้ง</Typography>
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
                    )
                })}
            </Box>

        </>
    )
}

export default ExamAllList