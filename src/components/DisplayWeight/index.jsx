import { useEffect } from 'react'
import './styles.css' 

export default function DisplayWeight ({weight, connected, setMaxWeight, maxWeight}) {
    // TODO: move max weight check to handletindeqres (maybe)
    function checkMax (weight, maxWeight, setMaxWeight) {
        if (weight > maxWeight){
            setMaxWeight(weight)
        }
        else if (!maxWeight && weight) {
            setMaxWeight(weight)
        }
    }

    useEffect(()=>{
        checkMax(weight, maxWeight, setMaxWeight)
    },[weight])

    if (!connected) {
        return (
            <p className='weight-display'>Not connected</p>
        )
    }
    else if (!weight) {
        return (
            <p className='weight-display'>No current weight</p>
        )
    }
    else {
        return (
        <section id='weight-display'>

        <p className='weight-display'>{weight}</p>
        <p className='max-weight-display'>{maxWeight}</p>
        </section>
        )
    }
}