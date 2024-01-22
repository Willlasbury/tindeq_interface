import "./styles.css";
import { ReferenceArea } from "recharts";
import { useEffect, useState } from "react";
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
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [RPE, setRPE] = useState(7);
  // place holder weight while I build out db
  const [maxWeight, setMaxWeight] = useState(5);
 
  
  const data = { weight: weight };
  useEffect(() => {
    console.log("weight, range.minRange:", weight, range.minRange)
    console.log("isRunning:", isRunning)
    if (!isRunning && weight > range.minRange){
      setIsRunning(true)
    }

    let clock;
    if (isRunning) {
      console.log('===\n\n\ntest\n\n\n===')
      clock = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    }
    return () => clearInterval(clock);
  }, [isRunning, time]);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    timeInterval.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 10);
  };



  function reset() {
    setIsRunning(false);
    setTime(0);
    setMeasuring(false);
  }

  // TODO: get max weight from db
  const workingWeight = ((RPE / 10) * maxWeight) >> 0
  const range = {
    minRange: workingWeight * 0.05 + workingWeight,
    maxRange: workingWeight - workingWeight * 0.05,
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
              isRunning={isRunning}
              setIsRunning={setIsRunning}
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
      <BarGraph weight={weight} reference={{maxWeight, range}} referenceType={'area'}>
        {/* <ReferenceArea y1={range.minRange} y2={range.maxRange} /> */}
        </BarGraph>
      </section>
    </div>
  );
}
