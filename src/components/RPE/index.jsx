import "./styles.css";
import { ReferenceArea } from "recharts";
import { useEffect, useRef, useState } from "react";
import RPELoggingBtn from "../tindeqBtns/RPELoggingBtn";
import TareBtn from "../../components/tindeqBtns/TareBtn";
import BarGraph from "../GraphCurrent";
import DisconnectBtn from "../tindeqBtns/DisconnnectBtn";
import useRpeTimer from "../../utils/workout/rpeTimer";

export default function RPEWorkout({
  weight,
  sendChar,
  measuring,
  setConnected,
  setMeasuring,
}) {
  const [RPE, setRPE] = useState(7);
  // place holder weight while I build out db
  const [maxWeight, setMaxWeight] = useState(2);
  const [length, setLength] = useState(3);

  const {time, isRunning, setTime, start, stop} = useRpeTimer(length)

  const data = { weight: weight };
  useEffect(() => {
    if (!isRunning && weight > range.minRange) {
      start()
    }

    if (time < 1) {
      stop()
    }
  }, [time, measuring, weight]);

  function reset() {
    setIsRunning(false);
    setTime(length);
    clearInterval(timeInterval.current);
  }

  // TODO: get max weight from db
  const workingWeight = ((RPE / 10) * maxWeight) >> 0;
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
            <TareBtn sendChar={sendChar} setMeasuring={setMeasuring} />
          </li>
          <li className="rpe-li">
            <DisconnectBtn sendChar={sendChar} setConnected={setConnected}/>
          </li>
        </ul>
      </section>
      <section id="rpe-graph">
        <BarGraph
          weight={weight}
          reference={{ maxWeight, range }}
          referenceType={"area"}
        />
      </section>
    </div>
  );
}
