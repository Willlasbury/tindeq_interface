import "./styles.css";

import ControlBoard from "../ControlBoard";
import BarGraph from "../GraphCurrent";
import DisplayWeight from "../DisplayCurrnetWeight";

export default function MeasurementPage({
  weight,
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
      <DisplayWeight weight={weight} connected={true} />
    </section>
  );
}
