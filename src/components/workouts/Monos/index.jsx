import BarGraph from '../../graphs/GraphCurrent'
import './styles.css'

export default function MonoWorkout (weight,
    styleData,
    controlComp,
    loggedIn,
    children) {
    return (
        <>
        <BarGraph weight={weight} referenceType={"line"} />
        {children}
        </>

    )
}