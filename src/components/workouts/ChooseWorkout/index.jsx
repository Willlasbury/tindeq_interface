import './styles.css'

import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import FingerForm from '../../FingerForm'
import LoginModal from "../../../components/Login/modal";


export default function ChooseWorkout ({styleData, setStyleData, loggedIn, setLoggedIn}) {

    return (
        <>
             {/* {!loggedIn && <LoginModal setLoggedIn={setLoggedIn} />} */}
            <Outlet />
            {/* {loggedIn && <FingerForm styleData={styleData} setStyleData={setStyleData}/>} */}
        </>
    )
}