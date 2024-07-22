import "./styles.css";
import { useEffect, useState } from "react";
import BarGraph from "../../graphs/GraphCurrent";
import useTimer from "../../../utils/workout/useTimer";
import weightApi from "../../../utils/server/crud";

export default function RPEWorkout({
  weight,
  measuring,
  setStyleData,
  pullTime,
  restTime,
  children,
  RPE,
  maxPull,
  setMaxPull,
  bothHands,
  setBothHands,
  resting,
  setResting
}) {
  // place holder weight while I build out db
  const { time, setTime, isRunning, setIsRunning, start, stop } =
    useTimer(pullTime);

  useEffect(() => {
    if (maxPull == undefined) {
      const getMaxPull = async () => {
        const data = await weightApi.getUsersMaxPull();
        if (data instanceof Error) {
          setMaxPull(100);
        } else {
          setMaxPull(data.weight_kg);
          setStyleData(data.style);
        }
      };
      getMaxPull();
    }

    if (maxPull != undefined && !isRunning && weight > range.minRange) {
      setResting(false);
      start();
    }

    if (time < 0) {
      stop();
      if (!resting) {
        if (bothHands) {
          setResting(true);
          setTime(restTime);
          start();
        } else {
          setTime(pullTime);
          setBothHands(true);
        }
      } else {
        setBothHands(false);
        setResting(false);
        setTime(pullTime);
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
    setBothHands(false);
    stop();
  }

  const workingWeight = ((RPE / 10) * maxPull) >> 0;
  const range = {
    maxRange: workingWeight * 0.05 + workingWeight,
    minRange: workingWeight - workingWeight * 0.05,
  };
  const rpes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <ul className="controls">
        <li id="setMax">
          <label className="userSetVals" htmlFor="userSetMaxPull">
            Set Max:
            <input
              htmlFor="userSetMaxPull"
              defaultValue={maxPull}
              onChange={(e) => setMaxPull(Number(e.target.value))}
            ></input>
          </label>
          <label className="userSetVals" htmlFor="userSetMaxPull">
            Set RPE:
            <select
              htmlFor="userSetMaxPull"
              defaultValue={maxPull}
              onChange={(e) => setRPE(Number(e.target.value))}
            >
              {rpes.map((val) => {
                return (
                  <option key={val} value={val}>
                    {val}
                  </option>
                );
              })}
            </select>
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
      </ul>
      <BarGraph
        weight={weight}
        reference={{ maxPull, range }}
        referenceType={"area"}
      />
      {children}
    </>
  );
}
