import { useRef, useState } from "react";


export default function rpeTimer (length) {

    let timeInterval = useRef(null)

    const [time, setTime] = useState(length);
    const [isRunning, setIsRunning] = useState(false);
    
    const start = (time) => {
        setIsRunning(true);
        timeInterval.current = setInterval(() => {
            setTime((time) => time - 1);
        }, 1000);
    };

    const stop = () => {
        setIsRunning(false);
        clearInterval(timeInterval.current);
        setTimeout(() => {
        setTime(length);
        }, 1000);
    }
    return {time, isRunning, setTime, start, stop}
}