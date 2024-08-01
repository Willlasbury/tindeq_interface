import "./styles.css";
import { useEffect, useState } from "react";
import BarGraph from "../../graphs/GraphCurrent";
import weightApi from "../../../utils/server/crud";
import ChangeHand from "../ChangeHand";

export default function RPEWorkout({
  weight,
  measuring,
  RPE,
  setRPE,
  stop,
  setStyleData,
  pullTime,
  setTime,
  children,
  maxPull,
  setMaxPull,
  setBothHands,
  setResting,
  hand,
  setHand,
}) {

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
  }, [weight]);

  function reset() {
    setResting(false);
    setTime(pullTime);
    setBothHands(false);
    stop();
  }

  const workingWeight = ((RPE / 10) * maxPull) >> 0;
  const range = {
    maxRange: workingWeight * 0.1 + workingWeight,
    minRange: workingWeight,
  };
  const rpes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <ChangeHand hand={hand} setHand={setHand} setStyleData={setStyleData} measuring={measuring}/>
      <BarGraph
        weight={weight}
        reference={{ maxPull, range }}
        referenceType={"area"}
      />
      {children}

      <button className="control-board-btn" onClick={() => reset()}>
        reset
      </button>

      <ul className="controls">
        <li id="set-max">
          <label className="user-set-vals" htmlFor="userSetMaxPull">
            Set Max:
            <input
              htmlFor="userSetMaxPull"
              defaultValue={maxPull}
              onChange={(e) => setMaxPull(Number(e.target.value))}
            ></input>
          </label>
        </li>
        <li id="set-rpe">
          <label className="user-set-vals" htmlFor="userSetMaxPull">
            Set RPE:
            <select
              htmlFor="userSetMaxPull"
              defaultValue={RPE}
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
      </ul>
    </>
  );
}
