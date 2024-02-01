import "./styles.css";

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
  return (
    <section id="measurementSct">
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
