import "./styles.css";

import ControlBoard from "../ControlBoard";
import BarGraph from "../GraphCurrent";

export default function MeasurementPage({
  weight,
  maxWeight,
  sendChar,
  measuring,
  setConnected,
  setMeasuring,
}) {
  return (
    <section>
      <ControlBoard
        sendChar={sendChar}
        setConnected={setConnected}
        setMeasuring={setMeasuring}
        measuring={measuring}
      />
      <BarGraph weight={weight} maxWeight={maxWeight} />
    </section>
  );
}
