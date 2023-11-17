"use client";
import { useState } from "react";
import "./App.css";

import DisconnectBtn from "./components/tindeqBtns/DisconnnectBtn";
import DisplayWeight from "./components/DisplayWeight";
import CreateConnection from "./components/CreateConnectionBtn";
import ControlBoard from "./components/ControlBoard";

export default function Home() {
  const [server, setServer] = useState();
  const [sendChar, setSendChar] = useState(undefined);
  const [recieveChar, setRecieveChar] = useState(undefined);
  const [weight, setWeight] = useState();
  const [connected, setConnected] = useState(false);

  return (
    <main>
      {connected ? (
        <ControlBoard sendChar={sendChar} setConnected={setConnected} />
      ) : (
        <CreateConnection
          setServer={setServer}
          setSendChar={setSendChar}
          setConnected={setConnected}
          setRecieveChar={setRecieveChar}
          setWeight={setWeight}
        />
      )}
      <DisplayWeight weight={weight} connected={connected} />
    </main>
  );
}
