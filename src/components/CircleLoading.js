import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'

function CircleLoading() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress size={60} thickness={4} sx={{ p: 2 }} />
        </Box>
    )
}

export default CircleLoading