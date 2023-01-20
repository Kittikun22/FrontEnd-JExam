import React, { useState, useEffect } from 'react'
import Appbar from '../components/Appbar'
import ProfileSidebar from '../components/profile-components/ProfileSidebar'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import ProfileHomepage from '../components/profile-components/ProfileHomepage'
import ProfileMyExam from '../components/profile-components/ProfileMyExam'
import ProfileExams from '../components/profile-components/ProfileExams'
import ProfilePayment from '../components/profile-components/ProfilePayment'
import ProfileSetting from '../components/profile-components/ProfileSetting'
import ProfileAnalysis from '../components/profile-components/ProfileAnalysis'
import ProfileHistory from '../components/profile-components/ProfileHistory'
import DialogDreamFac from '../components/DialogDreamFac'
import { useAuthState } from '../context/AuthContext'

function Profile() {

    const { user } = useAuthState();

    const [activeContent, setActiveContent] = useState('profile-homepage')
    const [facDream, setFacDream] = useState(localStorage.getItem('popup'))

    useEffect(() => {
        setActiveContent(localStorage.getItem("ActiveContent"))
        const popup = JSON.parse(localStorage.getItem('popup'))
        setFacDream(popup)
    }, [])

    function getContent(activeContent) {
        switch (activeContent) {
            case 'profile-homepage':
                return <ProfileHomepage user={user} />
            case 'profile-myexam':
                return <ProfileMyExam user={user} />
            case 'profile-exams':
                return <ProfileExams user={user} />
            case 'profile-payment':
                return <ProfilePayment user={user} />
            case 'profile-analysis':
                return <ProfileAnalysis user={user} />
            case 'profile-history':
                return <ProfileHistory user={user} />
            case 'profile-setting':
                return <ProfileSetting user={user} />

            default: <ProfileHomepage user={user} />
        }

    }

    return (
        <>
            <Appbar setActiveContent={setActiveContent} />
            <DialogDreamFac open={facDream} setOpen={setFacDream} />
            {user ?
                <Box>
                    <Stack direction='row'>
                        <Box flex={2} sx={{ display: { xs: 'none', md: 'flex' }, m: 2, p: 2 }}>
                            <ProfileSidebar user={user} activeContent={activeContent} setActiveContent={setActiveContent} />
                        </Box>
                        <Box flex={10}
                            sx={{
                                background: 'linear-gradient(0deg, rgba(239,245,245,1) 0%, rgba(214,228,229,1) 100%)',
                                minHeight: '100vh'

                            }}>
                            {getContent(activeContent)}
                        </Box>
                    </Stack>
                </Box>

                : null
            }
        </>
    )
}

export default Profile