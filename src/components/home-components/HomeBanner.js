import React from 'react'
import Box from '@mui/material/Box'
import { Button, Typography } from '@mui/material'
import HomeFlickity from './HomeFlickity'
import sidepic from '../../asset/sidepic.PNG'
import sidepicMini from '../../asset/sidepic2.png'
import prop from '../../asset/prop1.png'
import { motion } from "framer-motion";


function HomeBanner() {

    return (
        <>
            <Box
                sx={{
                    background: 'linear-gradient(0deg, rgba(1,83,82,1) 0%, rgba(0,12,38,1) 100%)',
                    paddingBottom: '5rem'
                }}>
                <Box component={motion.div}
                    initial={{ y: -15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Box component='img' src={sidepic}
                        sx={{
                            display: { xs: 'none', sm: 'none', md: 'flex' },
                            maxWidth: { xs: 'none', sm: 'none', md: '700px' },
                            position: 'absolute',
                            right: { md: '2%', lg: '10%' },

                        }}
                    />

                    <Box component='img' src={prop}
                        sx={{
                            display: { xs: 'none', sm: 'none', md: 'flex' },
                            maxWidth: { xs: 'none', sm: 'none', md: '175px' },
                            position: 'absolute',
                            right: { md: '2%', lg: '11%' },
                        }}
                    />

                </Box>

                <Box component={motion.div}
                    initial={{ x: 20, y: '-1.2em', opacity: 0 }}
                    animate={{ x: 0, y: '-1.2rem', opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Box component='img' src={sidepicMini}
                        sx={{
                            display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' },
                            maxWidth: { xs: '250px', sm: '300px', md: 'none', lg: 'none' },
                            position: 'absolute',
                            right: '0',
                            top: '-1rem',
                        }}
                    />
                </Box>

                <Box
                    component={motion.div}
                    initial={{ x: -15, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <Box
                        position='relative'
                        sx={{
                            display: 'flex', flexDirection: 'column',
                            pt: { xs: "25px", sm: "50px", lg: "50px" },
                            px: { xs: "5%", sm: "7%", lg: "15%" },

                        }}>
                        <Typography color='white'
                            sx={{
                                fontSize: { xs: "1.2rem", sm: "1.5rem" },
                            }}
                        >
                            สนามสอบจำลอง
                        </Typography>

                        <Typography color='white'
                            sx={{
                                marginTop: '-1rem',
                                fontSize: { xs: "3.3rem", sm: "5rem", md: '5.5rem' },
                                fontWeight: 700,
                            }}
                        >
                            J TCAS
                        </Typography>

                        <Typography color='white'
                            sx={{
                                marginTop: { xs: '-1.5rem', sm: '-2.5rem' },
                                color: '#a3cc53',
                                fontSize: { xs: "3.3rem", sm: "5rem", md: '5.5rem' },
                                fontWeight: 700

                            }}
                        >
                            TEST 2023
                        </Typography>

                        <Typography color='white'
                            sx={{

                                fontSize: { xs: "1.3rem", sm: "2rem" },
                            }}
                        >
                            สนามจำลองการสอบ TCAS ออนไลน์ <br />
                            ที่ครบและรอบด้านที่สุดในประเทศไทย
                        </Typography>
                        <Typography color='white'
                            sx={{
                                fontSize: { xs: "1rem", sm: "1.2rem" },
                            }}
                        >
                            ให้น้องๆ ได้ฝึกการสอบเสมือนจริงเตรียมความพร้อมก่อนลงสนามสอบ
                        </Typography>

                        <Button
                            variant="contained"
                            color="error"
                            href='/register'
                            sx={{
                                mt: '10px',
                                borderRadius: 5,
                                fontSize: '1.4rem',
                                maxWidth: { xs: "350px", sm: "500px", lg: "500px" },
                                "&:hover": {
                                    transition: "transform .3s",
                                    transform: "scale(1.06)"
                                }
                            }}>
                            สมัครสอบ
                        </Button>

                    </Box>
                </Box>

                <Box
                    component={motion.div}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    mt={4}
                >
                    <HomeFlickity />
                </Box>
            </Box>

        </>
    )
}

export default HomeBanner