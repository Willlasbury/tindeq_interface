import './styles.css'

import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import FingerForm from '../../FingerForm'

export default function ChooseWorkout ({styleData, setStyleData}) {
    return (
        <>
            <Outlet context={styleData}/>
            <FingerForm styleData={styleData} setStyleData={setStyleData}/>
        </>
    )
}