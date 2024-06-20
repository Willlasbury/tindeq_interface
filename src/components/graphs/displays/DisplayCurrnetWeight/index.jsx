import "./styles.css";
import BarGraph from "../../GraphCurrent";

export default function DisplayWeight({
  weight,
  connected,
  maxWeight,
  setMaxWeight
}) {
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
