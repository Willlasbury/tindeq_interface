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
        <p className="weight-display">Weight: {weight}</p>
        <p className="max-weight-display">Max Weight: {maxWeight}</p>
        <BarGraph weight={weight} maxWeight={maxWeight} />
        <button onClick={()=>setMaxWeight(0)}>reset max</button>
      </section>
    );
  }
}
