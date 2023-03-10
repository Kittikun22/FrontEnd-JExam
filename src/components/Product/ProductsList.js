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
import { motion } from 'framer-motion'

function ProductsList({ user, cartItem, setCartItem, allProduct }) {

    const [openLogin, setOpenLogin] = useState(false)
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [message, setMessage] = useState('')
    const [snackBarColor, setSnackBarColor] = useState()

    const [filterProduct, setFilterProduct] = useState([]);

    const [searchValue, setSearchValue] = useState();
    const [inputValue, setInputValue] = useState('');

    const [myExamList, setMyExamList] = useState([])

    useEffect(() => {
        if (user) {
            Axios.post('http://localhost:8000/getuserproductandexams', {
                user_id: user.user_id
            }).then((res) => {
                setMyExamList(res.data)
            })
        }

        const filterItem = allProduct.filter(item => item.name === inputValue);
        if (inputValue) {
            filterItem.map((val) => {
                return setFilterProduct(filterProduct => [...filterProduct, val])
            })
        }
        if (inputValue === '') {
            setFilterProduct([])
        }
    }, [user, inputValue])


    const staticChip = [
        { key: 1, label: 'TGAT', color: '#C8FFD4' },
        { key: 2, label: 'TPAT', color: '#C0EEE4' },
        { key: 3, label: 'A-LEVEL', color: '#FFACC7' },
        { key: 4, label: 'NETSAT', color: '#FEBE8C' },
    ];

    const [chipData, setChipData] = useState([]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
        setFilterProduct((products) => products.filter((product) => product.category_id !== chipToDelete.key))
    };

    const handleClickChip = (data) => {
        const check_index = chipData.findIndex(item => item.key === data.key);
        if (check_index !== -1) {
            //
        } else {
            setChipData(chipData => [...chipData, { key: data.key, label: data.label, color: data.color }])
            const filterItem = allProduct.filter(item => item.category_id === data.key);
            filterItem.map((val) => {
                return setFilterProduct(filterProduct => [...filterProduct, val])
            })
        }
    }

    const onAddToCart = (product) => {

        if (!user) {
            setOpenLogin(true)
        } else {
            const check_index = cartItem.findIndex(item => item.product_id === product.product_id);
            if (check_index !== -1) {
                setMessage(product.name + ' ??????????????????????????????????????????????????????')
                setSnackBarColor('error')
                setOpenSnackBar(true)
            } else {
                setCartItem(JSON.parse(localStorage.getItem('cart')))
                setCartItem(cartItem => [...cartItem, product]);
                setMessage(product.name + ' ??????????????????????????????????????????????????????????????????')
                setSnackBarColor('success')
                setOpenSnackBar(true)
            }
        }

    }

    if (allProduct) {
        return (
            <>
                <Login openLogin={openLogin} setOpenLogin={setOpenLogin} />
                <SnackbarAlert open={openSnackBar} setOpen={setOpenSnackBar} message={message} color={snackBarColor} />
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            flex={1}
                            sx={{
                                fontSize: '2rem',
                            }}>
                            ???????????????????????????????????????
                        </Typography>

                        <Autocomplete
                            freeSolo
                            flex={0}
                            id="free-solo-2-demo"
                            disableClearable
                            options={allProduct.map((option) => option.name)}
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
                                    label="???????????????..."
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

                    <Divider variant="middle" />

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
                        {filterProduct?.length === 0 ?
                            <>
                                {allProduct?.map((val, key) => {
                                    return (
                                        <Card sx={{ width: { xs: 175, md: 225 }, borderRadius: 7, }} elevation={3} key={key}>
                                            <CardActionArea href={`/introduction/${val.product_id}`}>
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
                                            <CardActions sx={{ display: 'flex', height: '35px', justifyContent: 'center' }}>

                                                {myExamList?.findIndex(item => item.product_id === val.product_id) === -1 ?
                                                    <Button
                                                        variant='contained'
                                                        color="secondary"
                                                        startIcon={<AddShoppingCartIcon fontSize='large' />}
                                                        sx={{ borderRadius: 5, width: '200px' }}
                                                        onClick={() => onAddToCart(val)}
                                                    >
                                                        <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>
                                                            {val.amount} ?????????
                                                        </Typography>
                                                    </Button>
                                                    :
                                                    <Button
                                                        variant='contained'
                                                        color="secondary"
                                                        disabled
                                                        startIcon={<CheckIcon fontSize='large' />}
                                                        sx={{ borderRadius: 5, width: '200px' }}
                                                    >
                                                        <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>
                                                            ????????????????????????????????????
                                                        </Typography>
                                                    </Button>
                                                }

                                            </CardActions>
                                        </Card>
                                    )
                                })}
                            </>

                            :

                            <>
                                {filterProduct.map((val, key) => {
                                    return (
                                        <Card sx={{ width: { xs: 175, md: 225 }, borderRadius: 7 }} elevation={3} key={key}>
                                            <CardActionArea href={`/introduction/${val.product_id}`}>
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
                                            <CardActions sx={{ display: 'flex', height: '35px', justifyContent: 'center' }}>

                                                {myExamList?.findIndex(item => item.product_id === val.product_id) === -1 ?
                                                    <Button
                                                        variant='contained'
                                                        color="secondary"
                                                        startIcon={<AddShoppingCartIcon fontSize='large' />}
                                                        sx={{ borderRadius: 5, width: '200px' }}
                                                        onClick={() => onAddToCart(val)}
                                                    >
                                                        <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>
                                                            {val.amount} ?????????
                                                        </Typography>
                                                    </Button>
                                                    :
                                                    <Button
                                                        variant='contained'
                                                        color="secondary"
                                                        disabled
                                                        startIcon={<CheckIcon fontSize='large' />}
                                                        sx={{ borderRadius: 5, width: '200px' }}
                                                    >
                                                        <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>
                                                            ?????????????????????????????????????????????
                                                        </Typography>
                                                    </Button>
                                                }

                                            </CardActions>
                                        </Card>
                                    )
                                })
                                }
                            </>

                        }
                    </Box>

                </Box>
            </>
        )
    }
}

export default ProductsList