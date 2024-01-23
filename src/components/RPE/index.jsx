import "./styles.css";
import { ReferenceArea } from "recharts";
import { useEffect, useRef, useState } from "react";
import RPELoggingBtn from "../tindeqBtns/RPELoggingBtn";
import TareBtn from "../../components/tindeqBtns/TareBtn";
import BarGraph from "../GraphCurrent";

export default function RPEWorkout({
  weight,
  sendChar,
  measuring,
  setConnected,
  setMeasuring,
}) {
  let length = 7
  let timeInterval = useRef(null)
  const [time, setTime] = useState(length);
  const [isRunning, setIsRunning] = useState(false);
  const [RPE, setRPE] = useState(7);
  // place holder weight while I build out db
  const [maxWeight, setMaxWeight] = useState(3);
 
  
  const data = { weight: weight };
  useEffect(() => {
    if (!isRunning && weight > range.minRange){
      handleStart(true)
    } 
    if (time < 1) {
      setIsRunning(false)
      clearInterval(timeInterval.current)
      setTimeout(() => {
        setMeasuring(false)
        setTime(length)
      },1000)
    }
    
  }, [time, weight]);

  const handleStart = () => {
    setIsRunning(true);
    timeInterval.current = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    }

 


  function reset() {
    setIsRunning(false);
    setTime(0);
  }

  // TODO: get max weight from db
  const workingWeight = ((RPE / 10) * maxWeight) >> 0
  const range = {
    maxRange: workingWeight * 0.05 + workingWeight,
    minRange: workingWeight - workingWeight * 0.05,
  };
  return (
    <div id="rpe-board">
      <section id="rpe-controls">
        <h4 id="timer">{time}</h4>
        <ul id="rpe-controls">
          <li className="rpe-li">
            <button className="rpe-btn" onClick={() => reset()}>
              {" "}
              reset
            </button>
          </li>
          <li className="rpe-li">
            <RPELoggingBtn
              sendChar={sendChar}
              measuring={measuring}
              setMeasuring={setMeasuring}
            />
          </li>
          <li className="rpe-li">
            <TareBtn sendChar={sendChar} />
          </li>
        </ul>
      </section>
      <section id="rpe-graph">
      <BarGraph weight={weight} reference={{maxWeight, range}} referenceType={'area'} />
      </section>
    </div>
  );
}
