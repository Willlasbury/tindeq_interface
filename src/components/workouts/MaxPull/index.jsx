import "./styles.css";
import {useState} from 'react'

import ControlBoard from "../../ControlBoard";
import BarGraph from "../../graphs/GraphCurrent";
import DisplayWeight from "../../DisplayCurrnetWeight";

export default function MaxPull({
  weight,
  sendChar,
  measuring,
  setConnected,
  setMeasuring,
}) {
  const [maxWeight, setMaxWeight] = useState(0);
  return (
    <section id="measurementSct">
      <ControlBoard
        sendChar={sendChar}
        setConnected={setConnected}
        setMeasuring={setMeasuring}
        measuring={measuring}
        maxWeight={maxWeight}
      />
      <DisplayWeight weight={weight} connected={true} maxWeight={maxWeight} setMaxWeight={setMaxWeight}/>
    </section>
  );
}
