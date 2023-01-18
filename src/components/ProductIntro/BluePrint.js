import { Box, Typography } from '@mui/material'
import React from 'react'

function BluePrint({ bluePrint }) {

    return (
        <>
            {bluePrint?.map((val, key) => {
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

        </>
    )
}


export default BluePrint