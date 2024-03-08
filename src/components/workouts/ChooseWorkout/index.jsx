import './styles.css'

import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import FingerForm from '../../FingerForm'
import MaxPull from '../MaxPull'
import RPEWorkout from '../RPE'

export default function ChooseWorkout () {

    const [styleData, setStyleData] = useState({
        hand: "left",
        edge: 20,
        grip: "open",
        index: true,
        middle: true,
        ring: true,
        pinky: true,
      });
    
    return (
        <>
            <Outlet context={styleData}/>
            <FingerForm styleData={styleData} setStyleData={setStyleData}/>
        </>
    )
}