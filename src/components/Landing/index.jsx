import "./styles.css";
import CreateConnection from "../CreateConnectionBtn";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function Landing({ setConnected, setSendChar, setWeight }) {

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
