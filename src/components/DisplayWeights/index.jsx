import "./styles.css";
import { useEffect, useState } from "react";

import api from "../../utils/fastApi/crud";

export default function DisplayMaxWeights() {
  const [maxWeights, setMaxWeights] = useState();
  const [displayMaxWeight, setDisplayMaxWeight] = useState(false);

    useEffect(()=>{
        const func = async () => {
            const data = await api.getAllMaxWeight();
            console.log("data:", data)
            setMaxWeights(data);
        }
        if (displayMaxWeight) {
            func()
        }

    },[displayMaxWeight])

  if (displayMaxWeight) {

    return (
      <section>
        {maxWeights && <div>{maxWeights.map(obj => {
            return <p key={obj.id}>{obj.weight}</p>
        })}</div>}
        <button onClick={()=> setDisplayMaxWeight(false)}>hide</button>
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
