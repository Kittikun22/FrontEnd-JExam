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

function StepThree({ provinceData, termAndCondition,expectationOption }) {
  const { register } = useFormContext();

  const termAndConditionContent = JSON.parse(termAndCondition.content)

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
        return <Student provinceData={provinceData} expectationOption={expectationOption}/>
      case 'ผู้ปกครอง':
        return <Parent provinceData={provinceData} expectationOption={expectationOption}/>
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
        <DialogTitle id="scroll-dialog-title">{termAndCondition?.title}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
            {termAndConditionContent?.map((val, key) => {
                return (
                    <Box key={key} sx={{ mb: 2 }}>
                        <Typography sx={{ fontSize: '1.2rem', color: '#0081C9', fontWeight: 600 }}>{val.topic}</Typography>
                        {val.subtopics.map((val, key) => {
                            return (
                                <Box key={key}>
                                    <Typography sx={{ ml: 2, fontSize: '1rem', fontWeight: 600, mt: 1 }}>{val.subtopic ? `${key + 1}. ${val.subtopic}` : null}</Typography>
                                    <Typography sx={{ ml: 4 }}>{val.explanation}</Typography>
                                    {val.details.map((val, key) => {
                                        return (
                                            <Typography sx={{ ml: 4, mt: 1 }} key={key}>{val.detail ? <li>{val.detail}</li> : null}</Typography>
                                        )
                                    })}
                                </Box>
                            )
                        })}

                    </Box>
                )
            })}
          </DialogContentText>
        </DialogContent>
      </Dialog>

    </>
  )
}

export default StepThree