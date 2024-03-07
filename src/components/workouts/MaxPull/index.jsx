import "./styles.css";
import { useState } from "react";

import ControlBoard from "../../ControlBoard";
import BarGraph from "../../graphs/GraphCurrent";
import DisplayWeight from "../../DisplayCurrnetWeight";
import SaveMaxWeight from "../../buttons/server/SaveMaxWeight";

export default function MaxPull({
  weight,
  sendChar,
  measuring,
  setConnected,
  setMeasuring,
}) {
  const [maxWeight, setMaxWeight] = useState(0);
  if (weight > maxWeight) {
    setMaxWeight(weight);
    localStorage.setItem("maxWeight", weight);
  } else if (!maxWeight && weight) {
    setMaxWeight(weight);
    localStorage.setItem("maxWeight", weight);
  }

  return (
    <>
      <ul className="controls">
        <ControlBoard
          sendChar={sendChar}
          setConnected={setConnected}
          setMeasuring={setMeasuring}
          measuring={measuring}
          maxWeight={maxWeight}
        />
        <li className="control-li">
          <SaveMaxWeight maxWeight={maxWeight} />
        </li>
        <li className="control-li">
          <button className="control-board-btn" onClick={() => setMaxWeight(0)}>
            Reset Max Weight
          </button>
        </li>
      </ul>
      <BarGraph weight={weight} reference={maxWeight} referenceType={"line"} />
    </>
  );
}
