import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Checkbox, Box, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Student from './Student';
import Parent from './Parent';
import Teacher from './Teacher';

function StepThree({ provinceData }) {
  const { register } = useFormContext();

  const [roleSelect, setRoleSelect] = useState(null);

  const [openModal, setOpenModal] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const handleClickOpenModal = (scrollType) => () => {
    setOpenModal(true);
    setScroll(scrollType);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const SwitchRole = (roleSelect) => {
    switch (roleSelect) {
      case 'นักเรียน':
        return <Student provinceData={provinceData} />
      case 'ผู้ปกครอง':
        return <Parent provinceData={provinceData} />
      case 'คุณครู':
        return <Teacher provinceData={provinceData} />
      default:
    }
  }


  return (
    <>
      <RadioGroup
        row
        value={roleSelect}
        onChange={(e) => { setRoleSelect(e.target.value) }}
      >
        <FormControlLabel {...register('user_role')} value="นักเรียน" control={<Radio size="small" />} label="นักเรียน" />
        <FormControlLabel {...register('user_role')} value="ผู้ปกครอง" control={<Radio size="small" />} label="ผู้ปกครอง" />
        <FormControlLabel {...register('user_role')} value="คุณครู" control={<Radio size="small" />} label="คุณครู" />
      </RadioGroup>

      {roleSelect ? null
        :
        <Typography wrap="true" sx={{
          fontSize: '1rem',
          color: '#F49D1A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <LightbulbIcon sx={{ fontSize: '1.3rem' }} />โปรดเลือกสถานะของคุณ
        </Typography>
      }

      {SwitchRole(roleSelect)}

      <Box sx={{ display: roleSelect === null ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <FormControlLabel
          {...register('termCondition')}
          value="ยอมรับ"
          control={<Checkbox />}
          labelPlacement="end"

        />
        <Typography sx={{ cursor: 'pointer' }} onClick={handleClickOpenModal('paper')}>ยอมรับข้อตกลงและเงื่อนไข</Typography>
      </Box>


      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">ข้อตกลงและเงื่อนไข</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
            เงื่อนไข
          </DialogContentText>
        </DialogContent>
      </Dialog>

    </>
  )
}

export default StepThree