"use client";
import { useState } from "react";
import "./App.css";

import DisplayWeight from "./components/DisplayCurrnetWeight";
import CreateConnection from "./components/CreateConnectionBtn";
import ControlBoard from "./components/ControlBoard";
import DisplayMaxWeight from "./components/DisplayWeightHistory";
import MeasurementPage from "./components/MeasurementPage";

export default function Home() {
  const [server, setServer] = useState();
  const [sendChar, setSendChar] = useState(undefined);
  const [recieveChar, setRecieveChar] = useState(undefined);
  const [weight, setWeight] = useState(0);
  const [connected, setConnected] = useState(false);
  const [measuring, setMeasuring] = useState(false);
  return (
    <main>
      {connected ? (
        // <ControlBoard
        //   sendChar={sendChar}
        //   setConnected={setConnected}
        //   setMeasuring={setMeasuring}
        //   measuring={measuring}
        // />
        <MeasurementPage
          weight={weight}
          sendChar={sendChar}
          setConnected={setConnected}
          setMeasuring={setMeasuring}
          measuring={measuring}
        />
      ) : (
        <CreateConnection
          setServer={setServer}
          setSendChar={setSendChar}
          setConnected={setConnected}
          setRecieveChar={setRecieveChar}
          setWeight={setWeight}
        />
      )}
    </main>
  );
}
