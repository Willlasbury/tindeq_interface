import "./styles.css";
import { useEffect, useState } from "react";
import BarGraph from "../../graphs/GraphCurrent";
import useTimer from "../../../utils/workout/useTimer";
import ControlBoard from "../../ControlBoard";
import weightApi from "../../../utils/server/crud";

export default function RPEWorkout({
  weight,
  sendChar,
  measuring,
  setConnected,
  setMeasuring,
  setStyleData
}) {
  const [RPE, setRPE] = useState(8);
  const [maxPull, setMaxPull] = useState(undefined);
  
  const [pullTime, setPullTime] = useState(7);
  const [restTime, setRestTime] = useState(180);

  const [resting, setResting] = useState(false);

  // place holder weight while I build out db
  const { time, setTime, isRunning, start, stop } = useTimer(pullTime);

  
  useEffect(() => {
    if (maxPull == undefined) {
      const getMaxPull = async () => {
        const data = await weightApi.getUsersMaxPull()
        setMaxPull(data.weight_kg)
        setStyleData(data.style)
      }
      getMaxPull()
    }

    if (maxPull != undefined && !isRunning && weight > range.minRange) {
      setResting(false);
      start();
    }

    if (time < 1) {
      setResting(!resting);
      stop();
      if (resting) {
        setTime(pullTime);
      } else {
        setTime(restTime);
        start();
      }
    }
  }, [time, measuring, weight]);

  const formatTime = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes} : ${seconds}`;
  };

  function reset() {
    setResting(false);
    setTime(pullTime);
    stop();
  }

  // TODO: get max weight from db
  const workingWeight = ((RPE / 10) * maxPull) >> 0;
  const range = {
    maxRange: workingWeight * 0.05 + workingWeight,
    minRange: workingWeight - workingWeight * 0.05,
  };

  return (
    <>
      <ul className="controls">
        <li id="setMax">
          <label htmlFor="userSetMaxPull">
            Set Max:
            <input
              htmlFor="userSetMaxPull"
              defaultValue={maxPull}
              onChange={(e) => setMaxPull(Number(e.target.value))}
            ></input>
          </label>
        </li>
        <li id="timer-li">
          <h4 id="timer">
            {resting ? formatTime(time) : `Time left: ${time}`}
          </h4>
        </li>
        <li className="control-li">
          <button className="control-board-btn" onClick={() => reset()}>
            {" "}
            reset
          </button>
        </li>
        <ControlBoard
          sendChar={sendChar}
          setConnected={setConnected}
          setMeasuring={setMeasuring}
          measuring={measuring}
        />
      </ul>

      <BarGraph
        weight={weight}
        reference={{ maxPull, range }}
        referenceType={"area"}
      />
    </>
  );
}
