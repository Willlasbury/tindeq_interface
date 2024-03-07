import "./styles.css";
import { useState } from "react";

import RPEWorkout from "../RPE";
import MaxPull from "../MaxPull";
import FingerForm from "../../FingerForm";

export default function ChooseWorkout({
  weight,
  sendChar,
  measuring,
  setConnected,
  setMeasuring,
}) {
  const [workout, setWorkout] = useState(undefined);
  const [adjustForm, setAdjustForm] = useState(true);


  return (<>
    hi
  </>);
}
