import "./styles.css";
import { useEffect, useState } from "react";

export default function RPEWorkout({ maxWeight, rpe }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
 
  useEffect(() => {
    let clock
    if (isRunning){
      clock = setInterval(()=>{setTime(time+1)},1000)
    } 
    return () => clearInterval(clock)
    },[isRunning, time])

  function reset() {
    setIsRunning(false)
    setTime(0)
  }
  return (
    <>
      <h3>RPE: {rpe}</h3>
      <h4>{time}</h4>
      <button onClick={()=>setIsRunning(!isRunning)}>start timer</button>
      <button onClick={()=>reset()} > reset</button>
    </>
  );
}
