import "./styles.css";
import { useEffect, useState } from "react";
import BarGraph from "../../graphs/GraphCurrent";
import useTimer from "../../../utils/workout/useTimer";
import ControlBoard from "../../ControlBoard";
// import useRestTimer from "../../utils/workout/restTimer";

export default function RPEWorkout({
  weight,
  sendChar,
  measuring,
  setConnected,
  setMeasuring,
}) {
  const [RPE, setRPE] = useState(8);
  const [pullTime, setPullTime] = useState(7);
  const [restTime, setRestTime] = useState(180);

  const [resting, setResting] = useState(false);

  // place holder weight while I build out db
  const [maxPull, setMaxPull] = useState(3);

  const { time, setTime, isRunning, start, stop } = useTimer(pullTime);

  useEffect(() => {
    if (!isRunning && weight > range.minRange) {
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
          <h4 id="timer">{resting ? formatTime(time) : time}</h4>

        <BarGraph
          weight={weight}
          reference={{ maxPull, range }}
          referenceType={"area"}
        />
    </>
  );
}
