import "./styles.css";
import { useState } from "react";


import BarGraph from "../../graphs/GraphCurrent";
import SaveMaxWeight from "../../buttons/server/SaveMaxWeight";

export default function MaxPull({
  weight,
  styleData,
  controlComp,
  loggedIn,
  children
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
        <li className="control-li">
          <SaveMaxWeight maxWeight={maxWeight} styleData={styleData} loggedIn={loggedIn}/>
        </li>
        <li className="control-li">
          <button className="control-board-btn" onClick={() => setMaxWeight(0)}>
            Reset Max Weight
          </button>
        </li>
        {controlComp}
      </ul>
      <BarGraph weight={weight} reference={maxWeight} referenceType={"line"} />
      {children}
    </>
  );
}
