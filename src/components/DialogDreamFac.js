import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Stack, Typography } from '@mui/material';
import Axios from 'axios'
import { useAuthState } from '../context/AuthContext'


const options = ['แพท', 'ครู', 'วิศวะ'];

export default function DialogDreamFac({ open, setOpen }) {

    const { user } = useAuthState();

    const [dreamOne, setDreamOne] = React.useState();
    const [dreamTwo, setDreamTwo] = React.useState();

    const [valueOne, setValueOne] = React.useState('');
    const [valueTwo, setValueTwo] = React.useState('');

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        console.log('dreamOne : ', dreamOne);
        console.log('dreamTwo : ', dreamTwo);

        Axios.put('http://localhost:8000/updateDreamFac', {
            dream1: dreamOne,
            dream2: dreamTwo,
            user_id: user.user_id
        }).then(() => {
            localStorage.setItem('popup', false)
            handleClose()
        })
    }


    return (
        <>
            <Dialog
                open={open}
                fullWidth='true'
                maxWidth='sm'>
                <DialogContent >
                    <Stack spacing={2}>
                        <Typography sx={{ fontSize: '1.5rem', textAlign: 'center' }}>เลือกคณะในฝัน</Typography>
                        <Autocomplete
                            size='small'
                            fullWidth
                            value={dreamOne}
                            onChange={(event, newValue) => {
                                setDreamOne(newValue);
                            }}
                            inputValue={valueOne}
                            onInputChange={(event, newInputValue) => {
                                setValueOne(newInputValue);
                            }}
                            id="controllable-states-demo"
                            options={options}
                            renderInput={(params) => <TextField {...params} label="เลือกคณะในฝันอันดับที่ 1" />}
                        />

                        <Autocomplete
                            size='small'
                            fullWidth
                            value={dreamTwo}
                            onChange={(event, newValue) => {
                                setDreamTwo(newValue);
                            }}
                            inputValue={valueTwo}
                            onInputChange={(event, newInputValue) => {
                                setValueTwo(newInputValue);
                            }}
                            id="controllable-states-demo"
                            options={options}
                            renderInput={(params) => <TextField {...params} label="เลือกคณะในฝันอันดับที่ 2" />}
                        />

                    </Stack>
                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'space-between', mx: 2 }}>
                    <Button onClick={handleClose}>ภายหลัง</Button>
                    <Button onClick={handleSubmit}>ยืนยัน</Button>
                </DialogActions>
            </Dialog>


        </>
    );
}