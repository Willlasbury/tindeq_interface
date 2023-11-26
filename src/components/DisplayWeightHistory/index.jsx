import "./styles.css";
import { useEffect, useState } from "react";
import Graph from "../GraphHistory";

import api from "../../utils/fastApi/crud";

export default function DisplayMaxWeights() {
  const [maxWeights, setMaxWeights] = useState();
  const [displayMaxWeight, setDisplayMaxWeight] = useState(false);


  useEffect(() => {
    const func = async () => {
      const data = await api.getAllMaxWeight();
      setMaxWeights(data);
    };
    if (displayMaxWeight) {
      func();
    }
  }, [displayMaxWeight]);

  if (displayMaxWeight) {
    return (
      <section id="max-weights">
        {maxWeights && <Graph data={maxWeights} />}
        <button onClick={() => setDisplayMaxWeight(false)}>hide</button>
      </section>
    );
  } else {
    return (
      <button
        onClick={() => {
          setDisplayMaxWeight(true);
        }}
      >
        see maxes
      </button>
    );
  }
}
