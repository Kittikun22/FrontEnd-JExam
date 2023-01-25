import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../App'
import Appbarstatic from '../components/Appbarstatic'
import System from '../components/takeanexam_components/system'
import { useParams } from 'react-router-dom';



function Takeanexam() {
    const { netsat } = useParams();
    const { subject } = useParams();

    return (
        <>
            <Appbarstatic  />
            <System subject={subject}/>
        </>
    )
}

export default Takeanexam