import './styles.css'

import { Outlet } from 'react-router-dom'
import FingerForm from '../../FingerForm'

export default function ChooseWorkout ({styleData, setStyleData}) {
    return (
        <>
            <Outlet/>
            <FingerForm styleData={styleData} setStyleData={setStyleData}/>
        </>
    )
}