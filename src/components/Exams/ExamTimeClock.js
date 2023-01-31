import React, { useEffect } from 'react'
import { Typography, Box, } from '@mui/material'

function ExamTimeClock({ timeControl, setTimeControl, timeSpend, setTimeSpend, duration, setOpenDialog }) {

    const timeSpending = new Date((duration - timeSpend) * 1000).toISOString().substring(14, 19)

    useEffect(() => {
        if (timeControl === true) {
            const intervalId = setInterval(() => {
                setTimeSpend(timeSpend + 1);
            }, 1000);

            if (timeSpend === duration) {
                setTimeControl(false);
                setOpenDialog(true);
            }
            return () => clearInterval(intervalId);
        }
    }, [timeSpend, duration, setOpenDialog, setTimeControl, setTimeSpend, timeControl]);
    


    return (
        <>
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                <Typography sx={{ fontSize: '1.5rem' }}>
                    {timeSpending}
                </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <Typography sx={{ fontSize: '1.5rem' }}>
                    เหลือเวลา {timeSpending} นาที
                </Typography>
            </Box>
        </>
    )
}

export default ExamTimeClock