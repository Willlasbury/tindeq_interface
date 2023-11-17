import { useEffect } from "react";
import "./styles.css";
import checkMaxWeight from "../../utils/handleData/checkMaxWeight";
import { useState } from "react";

export default function DisplayWeight({
  weight,
  connected
}) {
  const [maxWeight, setMaxWeight] = useState(undefined);

  checkMaxWeight(weight, maxWeight, setMaxWeight);

  if (!connected) {
    return <p className="weight-display">Not connected</p>;
  } else {
    return (
      <section id="weight-display">
        <p className="weight-display">{weight}</p>
        <p className="max-weight-display">{maxWeight}</p>
      </section>
    );
  }
}
