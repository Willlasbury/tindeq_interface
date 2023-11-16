"use client";
import { useState } from "react";
import "./App.css";

import CFT from "./components/tindeqBtns/CFT";
import DisconnectBtn from "./components/tindeqBtns/DisconnnectBtn";
import ContinuousWBtn from "./components/tindeqBtns/StartLoggingBtn";
import StopLoggingBtn from "./components/tindeqBtns/StopLoggingBtn";
import DisplayWeight from "./components/DisplayWeight";
import TareBtn from "./components/tindeqBtns/TareBtn";
import CreateConnection from "./components/CreateConnectionBtn";

export default function Home() {
  const [server, setServer] = useState();
  const [sendChar, setSendChar] = useState(undefined);
  const [recieveChar, setRecieveChar] = useState(undefined);
  const [weight, setWeight] = useState();
  const [connected, setConnected] = useState(false);

  return (
    <main className="app">
      <CreateConnection
        setServer={setServer}
        setSendChar={setSendChar}
        setConnected={setConnected}
        setRecieveChar={setRecieveChar}
        setWeight={setWeight}
      />
      <CFT sendChar={sendChar} />
      <DisconnectBtn sendChar={sendChar} setConnected={setConnected} />
      <ContinuousWBtn sendChar={sendChar} />
      <StopLoggingBtn sendChar={sendChar} />
      <TareBtn sendChar={sendChar} />
      <DisplayWeight weight={weight} connected={connected} />
    </main>
  );
}
