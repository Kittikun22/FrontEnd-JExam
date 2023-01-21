import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { TextField, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import WarningIcon from '@mui/icons-material/Warning';
import ListSubheader from '@mui/material/ListSubheader';

function Student({ provinceData, expectationOption }) {

    const { register, formState: { errors } } = useFormContext();

    const [grade, setGrade] = useState('');
    const [province, setProvince] = useState('');
    const [expectation, setExpectation] = useState('');

    return (
        <>
            <TextField
                {...register('fname',
                    {
                        required: { value: true, message: "โปรดกรอกชื่อของคุณ" }
                    })}
                id="fname"
                label="ชื่อ"
                variant="outlined"
                size='small'
            />

            {
                errors.fname ?
                    <Typography wrap="true" sx={{
                        fontSize: '.9rem',
                        color: 'red',
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <WarningIcon sx={{ fontSize: '1rem' }} /> {errors.fname.message}
                    </Typography>
                    : null
            }


            <TextField
                {...register('lname',
                    {
                        required: 'โปรดกรอกนามสกุลของคุณ'
                    })}
                id="lname"
                label="นามสกุล"
                variant="outlined"
                size='small'
            />

            {
                errors.lname ?
                    <Typography wrap="true" sx={{
                        fontSize: '.9rem',
                        color: 'red',
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <WarningIcon sx={{ fontSize: '1rem' }} /> {errors.lname.message}
                    </Typography>
                    : null
            }


            <TextField
                {...register('email',
                    {
                        required: 'โปรดกรอกอีเมลของคุณ'
                    })}
                type='email'
                id="email"
                label="อีเมล"
                variant="outlined"
                size='small'
            />

            {
                errors.email ?
                    <Typography wrap="true" sx={{
                        fontSize: '.9rem',
                        color: 'red',
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <WarningIcon sx={{ fontSize: '1rem' }} /> {errors.email.message}
                    </Typography>
                    : null
            }


            <FormControl
            >
                <InputLabel>ระดับชั้น</InputLabel>
                <Select
                    {...register('grade',
                        {
                            required: "โปรดเลือกระดับชั้นของคุณ"
                        }
                    )}
                    id="grade"
                    label='ระดับชั้น'
                    size='small'
                    value={grade}
                    onChange={(e) => { setGrade(e.target.value) }}

                >
                    <ListSubheader>มัธยมศึกษาตอนปลาย</ListSubheader>
                    <MenuItem value='มัธยมศึกษาปีที่ 6'>มัธยมศึกษาปีที่ 6</MenuItem>
                    <MenuItem value='มัธยมศึกษาปีที่ 5'>มัธยมศึกษาปีที่ 5</MenuItem>
                    <MenuItem value='มัธยมศึกษาปีที่ 4'>มัธยมศึกษาปีที่ 4</MenuItem>
                    <ListSubheader>มัธยมศึกษาตอนต้น</ListSubheader>
                    <MenuItem value='มัธยมศึกษาปีที่ 3'>มัธยมศึกษาปีที่ 3</MenuItem>
                    <MenuItem value='มัธยมศึกษาปีที่ 2'>มัธยมศึกษาปีที่ 2</MenuItem>
                    <MenuItem value='มัธยมศึกษาปีที่ 1'>มัธยมศึกษาปีที่ 1</MenuItem>
                </Select>
            </FormControl>

            {
                errors.grade ?
                    <Typography wrap="true" sx={{
                        fontSize: '.9rem',
                        color: 'red',
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <WarningIcon sx={{ fontSize: '1rem' }} /> {errors.grade.message}
                    </Typography>
                    : null
            }

            <TextField
                {...register('school',
                    {
                        required: 'โปรดกรอกชื่อโรงเรียนของคุณ'
                    })}
                id="school"
                variant="outlined"
                label="โรงเรียน"
                size='small'
            />

            {
                errors.school ?
                    <Typography wrap="true" sx={{
                        fontSize: '.9rem',
                        color: 'red',
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <WarningIcon sx={{ fontSize: '1rem' }} /> {errors.school.message}
                    </Typography>
                    : null
            }


            <FormControl
            >
                <InputLabel>จังหวัด</InputLabel>
                <Select
                    {...register('province',
                        {
                            required: 'โปรดเลือกจังหวัดที่คุณอยู่'
                        }
                    )}
                    id="province"
                    label='จังหวัด'
                    size='small'
                    value={province}
                    onChange={(e) => { setProvince(e.target.value) }}
                >
                    {provinceData.map((val) =>
                        <MenuItem value={val.name_th}>{val.name_th}</MenuItem>

                    )}
                </Select>
            </FormControl>

            {
                errors.province ?
                    <Typography wrap="true" sx={{
                        fontSize: '.9rem',
                        color: 'red',
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <WarningIcon sx={{ fontSize: '1rem' }} /> {errors.province.message}
                    </Typography>
                    : null
            }

            <FormControl>
                <InputLabel>ความคาดหวัง</InputLabel>
                <Select
                    {...register('expectation',
                        {
                            required: "โปรดเลือกความคาดหวังของคุณ"
                        }
                    )}
                    id="expectation"
                    label='ความคาดหวัง'
                    size='small'
                    value={expectation}
                    onChange={(e) => { setExpectation(e.target.value) }}
                >

                    {expectationOption.map((val,key) => {
                        return <MenuItem key={key} value={val.expectation_value}>{val.expectation_value}</MenuItem>
                    })}
                </Select>
            </FormControl>

            {
                errors.expectation ?
                    <Typography wrap="true" sx={{
                        fontSize: '.9rem',
                        color: 'red',
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <WarningIcon sx={{ fontSize: '1rem' }} /> {errors.expectation.message}
                    </Typography>
                    : null
            }
        </>
    )
}

export default Student