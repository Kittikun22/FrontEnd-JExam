import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
    Button,
    CardActionArea,
    CardActions,
    Box,
    Autocomplete,
    TextField,
    Chip
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment'
import Divider from '@mui/material/Divider'
import SnackbarAlert from '../SnackbarAlert'
import Login from '../Login-Dialog';
import Axios from 'axios'
import CheckIcon from '@mui/icons-material/Check';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import CircleLoading from '../CircleLoading';
import ExamAllList from './ExamAllList';
import ExamFavList from './ExamFavList';
import { motion } from 'framer-motion'
import ExamNewList from './ExamNewList';

const CryptoJS = require("crypto-js");
const EncryptSecret = "Jknow2022";

function ExamsList({ user, cartItem, setCartItem, allExams, mostFav, newestExam }) {

    const [openLogin, setOpenLogin] = useState(false)
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [message, setMessage] = useState('')
    const [snackBarColor, setSnackBarColor] = useState()

    const [filterExam, setFilterExam] = useState([]);

    const [searchValue, setSearchValue] = useState();
    const [inputValue, setInputValue] = useState('');

    const [loading, setLoading] = useState(true)

    const [myExamList, setMyExamList] = useState([])

    const [myFavExam, setMyFavExam] = useState([])


    useEffect(() => {
        if (!user) {
            setLoading(false)
        }

        if (user) {
            Axios.post('http://localhost:8000/getUserExams', {
                user_id: user.user_id
            }).then((res) => {
                setMyExamList(res.data)
            })

            Axios.post("http://localhost:8000/getFavExams", {
                user_id: user.user_id
            }).then((res) => {
                if (res.data[0].fav_exam === null) {
                    setLoading(false)
                } else {
                    setMyFavExam(JSON.parse(res.data[0].fav_exam))
                    setLoading(false)
                }
            })
        }

        const filterItem = allExams.filter(item => item.name === inputValue);
        if (inputValue) {
            filterItem.map((val) => {
                return setFilterExam(filterExam => [...filterExam, val])
            })
        }
        if (inputValue === '') {
            setFilterExam([])
        }

    }, [user, inputValue])


    useEffect(() => {
        if (user) {
            Axios.put("http://localhost:8000/updateFavExams", {
                user_id: user.user_id,
                myFavExam: JSON.stringify(myFavExam)
            })
        }
    }, [myFavExam])


    const staticChip = [
        { key: 1, label: 'TGAT', color: '#C8FFD4' },
        { key: 2, label: 'TPAT', color: '#C0EEE4' },
        { key: 3, label: 'A-LEVEL', color: '#FFACC7' },
        { key: 4, label: 'NETSAT', color: '#FEBE8C' },
    ];

    const [chipData, setChipData] = useState([]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
        setFilterExam((exams) => exams.filter((exam) => exam.category_id !== chipToDelete.key))
    };

    const handleClickChip = (data) => {
        const check_index = chipData.findIndex(item => item.key === data.key);
        if (check_index !== -1) {
            //
        } else {
            setChipData(chipData => [...chipData, { key: data.key, label: data.label, color: data.color }])
            const filterItem = allExams.filter(item => item.category_id === data.key);
            filterItem.map((val) => {
                return setFilterExam(filterExam => [...filterExam, val])
            })
        }
    }

    const onAddToCart = (exam) => {
        if (!user) {
            setOpenLogin(true)
        } else {
            const check_index = cartItem.findIndex(item => item.exam_id === exam.exam_id);
            if (check_index !== -1) {
                setMessage(exam.name + ' มีในตะกร้าอยู่แล้ว')
                setSnackBarColor('error')
                setOpenSnackBar(true)
            } else {
                setCartItem(JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('cart'), EncryptSecret).toString(CryptoJS.enc.Utf8)))
                setCartItem(cartItem => [...cartItem, exam]);
                setMessage(exam.name + ' ถูกเพิ่มเข้าตะกร้าแล้ว')
                setSnackBarColor('success')
                setOpenSnackBar(true)
            }
        }
    }

    const onClickFavExam = (exam_id) => {
        const check_index = myFavExam.findIndex(item => item.exam_id === exam_id);
        if (check_index !== -1) {
            //
        } else {
            setMyFavExam(myFavExam => [...myFavExam, { exam_id: exam_id }])
            Axios.put("http://localhost:8000/increaseFavExams", {
                exam_id: exam_id,
            })
        }
    }

    const onUnFavExam = (exam_id) => {
        setMyFavExam((favExams) => favExams.filter((favExam) => favExam.exam_id !== exam_id));
        Axios.put("http://localhost:8000/decreaseFavExams", {
            exam_id: exam_id,
        })
    };

    if (allExams) {
        return (
            <>
                <Login openLogin={openLogin} setOpenLogin={setOpenLogin} />
                <SnackbarAlert open={openSnackBar} setOpen={setOpenSnackBar} message={message} color={snackBarColor} />
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            flex={1}
                            variant='h4'
                        >
                            ข้อสอบ
                        </Typography>

                        <Autocomplete
                            freeSolo
                            flex={0}
                            id="free-solo-2-demo"
                            disableClearable
                            options={allExams.map((option) => option.name)}
                            sx={{ width: '40%' }}
                            onChange={(event, newValue) => {
                                setSearchValue(newValue);
                            }}
                            inputValue={inputValue}
                            onInputChange={(event, newInputValue) => {
                                setInputValue(newInputValue);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    size="small"
                                    label="ค้นหา..."
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />

                    </Box>

                    <Box m={2}>
                        {staticChip.map((data) => {
                            return (
                                <Button
                                    sx={{
                                        m: '3px',
                                        fontSize: '.8rem',
                                        color: 'black',
                                        background: data.color,
                                        borderRadius: 10
                                    }}
                                    key={data.key}
                                    onClick={() => handleClickChip(data)}
                                >
                                    {data.label}
                                </Button>
                            );
                        })}
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Box m={2}>
                        {chipData.map((chip) => {
                            return (
                                <Chip
                                    sx={{
                                        m: '3px',
                                        background: chip.color
                                    }}
                                    key={chip.key}
                                    label={chip.label}
                                    onDelete={handleDelete(chip)}
                                />
                            );
                        })}
                    </Box>
                    {loading === true ?
                        <CircleLoading />
                        :
                        <>
                            {filterExam?.length === 0 ?
                                <>
                                    <ExamNewList newestExam={newestExam} myFavExam={myFavExam} onClickFavExam={onClickFavExam} onUnFavExam={onUnFavExam} myExamList={myExamList} onAddToCart={onAddToCart} />
                                    <ExamFavList mostFav={mostFav} myFavExam={myFavExam} onClickFavExam={onClickFavExam} onUnFavExam={onUnFavExam} myExamList={myExamList} onAddToCart={onAddToCart} />
                                    <ExamAllList allExams={allExams} myFavExam={myFavExam} onClickFavExam={onClickFavExam} onUnFavExam={onUnFavExam} myExamList={myExamList} onAddToCart={onAddToCart} />
                                </>
                                :

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
                                    {filterExam.map((val, key) => {
                                        return (
                                            <Card sx={{ width: { xs: 175, md: 225 }, borderRadius: 5 }} elevation={3} key={key}>
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
                                                        <Tooltip title="ถูกใจ">
                                                            <IconButton onClick={() => onClickFavExam(val.exam_id)}>
                                                                <FavoriteIcon sx={{
                                                                    color: myFavExam?.findIndex(fav => fav.exam_id === val.exam_id) === -1 ? 'grey' : '#E90064'
                                                                }} />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip title="จำนวนคนถูกใจ">
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
                                        )
                                    })
                                    }
                                </Box>

                            }
                        </>
                    }
                </Box>
            </>
        )
    }
}

export default ExamsList