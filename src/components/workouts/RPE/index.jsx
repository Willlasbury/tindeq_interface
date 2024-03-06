import "./styles.css";
import { useEffect, useState } from "react";
import RPELoggingBtn from "../../buttons/tindeqBtns/RPELoggingBtn";
import TareBtn from "../../buttons/tindeqBtns/TareBtn";
import BarGraph from "../../graphs/GraphCurrent";
import DisconnectBtn from "../../buttons/tindeqBtns/DisconnnectBtn";
import useTimer from "../../../utils/workout/useTimer";
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
  const [maxPull, setMaxPull] = useState(120);

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
    <div id="rpe-board">
      <section id="rpe-controls">
        <h4 id="timer">{resting ? formatTime(time) : time}</h4>
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
            <TareBtn sendChar={sendChar} setMeasuring={setMeasuring} />
          </li>
          <li className="rpe-li">
            <DisconnectBtn
              sendChar={sendChar}
              setConnected={setConnected}
              setMeasuring={setMeasuring}
            />
          </li>
        </ul>
      </section>

      <section id="rpe-graph">
        <BarGraph
          weight={weight}
          reference={{ maxPull, range }}
          referenceType={"area"}
        />
      </section>
    </div>
  );
}
