import "./styles.css";
import { useEffect, useState } from "react";
import BarGraph from "../../graphs/GraphCurrent";
import weightApi from "../../../utils/server/crud";
import ChangeHand from "./ChangeHand";
import RPERange from "../../../utils/workout/rpeRange";

export default function RPEWorkout({
  weight,
  measuring,
  RPE,
  setRPE,
  stop,
  pullTime,
  setTime,
  children,
  maxPull,
  setMaxPull,
  setBothHands,
  setResting,
  styleData,
  setStyleData,
  updateHand
}) {
  useEffect(() => {
    const getMaxPull = async () => {
      const data = await weightApi.getUsersMaxPull();
      if (data instanceof Error) {
        setMaxPull(100);
      } else {
        setMaxPull(data.weight_kg);
        setStyleData(data.style);
      }
    };
    if (maxPull == undefined) {
      getMaxPull();
    }
  }, [weight]);

  function reset() {
    setResting(false);
    setTime(pullTime);
    setBothHands(false);
    stop();
  }

  const { range, rpes } = RPERange(RPE, maxPull);

  return (
    <>
      <ChangeHand
        styleData={styleData}
        updateHand={updateHand}
        measuring={measuring}
      />
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
