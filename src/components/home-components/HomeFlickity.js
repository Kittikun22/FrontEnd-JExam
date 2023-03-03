import React, { useState } from 'react'
import Box from '@mui/material/Box'
import './HomeFlickity.css'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button'
import TGATFlickity from './TGATFlickity'
import TPATFlickity from './TPATFlickity'
import ALEVELFlickity from './ALEVELFlickity'
import NETSATFlickity from './NETSATFlickity'

function HomeFlickity() {

    const [category, setCategory] = useState('NETSAT');

    function SwitchCategory(category) {
        switch (category) {
            case 'TGAT':
                return <TGATFlickity />
            case 'TPAT':
                return <TPATFlickity />
            case 'A-LEVEL':
                return <ALEVELFlickity />
            case 'NETSAT':
                return <NETSATFlickity />
            default:
                return <TGATFlickity />

        }
    }

    return (
        <>
            <Stack>
                <Box>
                    <Typography color='white'
                        sx={{ fontSize: '2.5rem', textAlign: 'center' }}>
                        จำลองการสอบ พิชิต TCAS
                    </Typography>
                </Box>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                        <ButtonGroup variant="contained" color='secondary'>
                            <Button
                                sx={{
                                    background: category === 'TGAT' ? '#35858B' : null
                                }}
                                onClick={() => { setCategory('TGAT') }}>
                                <Typography>TGAT</Typography>
                            </Button>
                            <Button sx={{ background: category === 'TPAT' ? '#35858B' : null }}
                                onClick={() => { setCategory('TPAT') }}>
                                <Typography>TPAT</Typography>
                            </Button>
                            <Button sx={{ background: category === 'A-LEVEL' ? '#35858B' : null }}
                                onClick={() => { setCategory('A-LEVEL') }}>
                                <Typography>A-LEVEL</Typography>
                            </Button>
                            <Button sx={{ background: category === 'NETSAT' ? '#35858B' : null }}
                                onClick={() => { setCategory('NETSAT') }}>
                                <Typography>NETSAT</Typography>
                            </Button>
                        </ButtonGroup>
                    </Box>

                    {SwitchCategory(category)}

                </Box>
            </Stack >
        </>

    )
}

export default HomeFlickity