import "./styles.css";
import checkMaxWeight from "../../utils/handleData/checkMaxWeight";
import { useState } from "react";
import BarGraph from "../GraphCurrent";

export default function DisplayWeight({
  weight,
  connected
}) {
  const [maxWeight, setMaxWeight] = useState(0);

  checkMaxWeight(weight, maxWeight, setMaxWeight);
  if (!connected) {
    return <p className="weight-display">Not connected</p>;
  } else {
    return (
      <section id="weight-display">
        <BarGraph weight={weight} reference={maxWeight} referenceType={'line'}/>
        <button id='reset-max-weight' onClick={()=>setMaxWeight(0)}>Reset Max Weight</button>
      </section>
    );
  }
}
