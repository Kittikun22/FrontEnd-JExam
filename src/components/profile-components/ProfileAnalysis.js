import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler, ArcElement, Tooltip, Legend
} from 'chart.js';

import { Radar } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';

ChartJS.register(RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    ArcElement,
    Tooltip,
    Legend);


export const dataRadar = {
    labels: ['ชีววิทยา', 'ฟิสิกส์', 'ภาษาไทย', 'สังคมศึกษา', 'คณิตศาสตร์ประยุกต์ 1', 'ภาษาอังกฤษ', 'เคมี'],
    datasets: [
        {
            label: 'A-Level',
            data: [78, 91, 61, 43, 100, 69, 54],
            backgroundColor: '#a3cc5380',
            borderColor: '#0e3746',
            borderWidth: 3,
        },
    ],
};

const ProfileAnalysis = () => {
    return (
        <>

            <Box p={2} m={2} sx={{ borderRadius: 3, bgcolor: 'white', boxShadow: 1 }}>

                <Typography sx={{ fontSize: '2rem', textAlign: 'center' }}>วิเคราะห์คะแนนยังไม่พร้อมใช้งาน</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: 'auto' }}>
                        <Radar data={dataRadar} />
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default ProfileAnalysis