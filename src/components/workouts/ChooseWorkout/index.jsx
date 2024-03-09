import './styles.css'

import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import FingerForm from '../../FingerForm'

export default function ChooseWorkout () {
    // TODO: get style data from db
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