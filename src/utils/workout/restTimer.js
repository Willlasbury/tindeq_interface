import { useEffect, useRef, useState } from "react";


export default function useRestTimer (length) {
    let timeInterval = useRef(null)
    
    const [time, setTime] = useState(length);
    const [isRunning, setIsRunning] = useState(false);
    
    // useEffect(()=>{
    //     if (time < 1) {
    //         stop()
    //       }
    // },[time])

    // const formatTime = (seconds) => {
    //     let minutes = Math.floor(seconds / 60)
    //     seconds -= minutes * 60
    //     return `${minutes} : ${seconds}`
    // }

    const start = () => {
        setIsRunning(true);
        timeInterval.current = setInterval(() => {
            setTime(time - 1);
        }, 1000);
    };

    const stop = () => {
        setIsRunning(false);
        clearInterval(timeInterval.current);
        setTimeout(() => {
        setTime(length);
        }, 1000);
    }
    return {time, isRunning, setIsRunning, setTime, start, stop, timeInterval}
}