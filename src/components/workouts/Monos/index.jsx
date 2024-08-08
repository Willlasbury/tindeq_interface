import RPERange from "../../../utils/workout/rpeRange";
import BarGraph from "../../graphs/GraphCurrent";
import ChangeFinger from "./ChangeFinger";
import "./styles.css";

export default function MonoWorkout(
  weight,
  measuring,
  RPE,
  setRPE,
  stop,
  setStyleData,
  pullTime,
  setTime,
  children,
  maxPull,
  setMaxPull,
  setBothHands,
  setResting,
//   children
) {
  const { range, rpes } = RPERange(RPE, maxPull);
  return (
    <>
      <ChangeFinger
        setStyleData={setStyleData}
        measuring={measuring}
      />
      <BarGraph
        weight={weight}
        reference={{ maxPull, range }}
        referenceType={"area"}
      />
      {children}
    </>
  );
}
