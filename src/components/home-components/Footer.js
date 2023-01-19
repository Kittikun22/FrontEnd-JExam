import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Footer() {
    return (

        <Box sx={{
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(180deg, rgba(1,83,82,1) 0%, rgba(0,12,38,1) 100%)',
            mb: { xs: '60px', md: '0px' }
        }}>
            <Typography sx={{ color: '#fff' }}>
                Copyright 2023 © J Knowledge Tutor 2023
            </Typography>
        </Box>
    )
}

export default Footer