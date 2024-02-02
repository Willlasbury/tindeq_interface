import "./styles.css";
import CreateConnection from "../CreateConnectionBtn";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function Landing({ connected, setConnected, setSendChar, setWeight }) {

  const navigate = useNavigate()

  useEffect(()=>{
    if (connected) {
      navigate("/workout")
    }
  },[connected])


  return (
    <section id="landing">
      <h1 id="title">Tindeq Progressor</h1>
      <CreateConnection
        setSendChar={setSendChar}
        setConnected={setConnected}
        setWeight={setWeight}
      />
    </section>
  );
}
