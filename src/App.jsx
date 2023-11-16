"use client";
import { useState } from "react";
import './App.css'

import blc from "../src/utils/tindeqApi/connection";
import getChar from "./utils/tindeqApi/characteristics";
import notify from "./utils/tindeqApi/notify";
import CFT from "./components/tindeqBtns/CFT";
import DisconnectBtn from "./components/tindeqBtns/DisconnnectBtn";
import ContinuousWBtn from "./components/tindeqBtns/StartLoggingBtn";
import StopLoggingBtn from "./components/tindeqBtns/StopLoggingBtn";
import DisplayWeight from "./components/DisplayWeight";
import TareBtn from "./components/tindeqBtns/TareBtn";

export default function Home() {
  const [server, setServer] = useState();
  const [sendChar, setSendChar] = useState(undefined);
  const [recieveChar, setrecieveChar] = useState(undefined);
  const [weight, setWeight] = useState();
  const [connected, setConnected] = useState(false);

  // initiate the connection and obtain the server
  async function connect() {
    try {
      const server = await blc();
      setServer(server);
      // recieve and save the chatacteristics
      const { send, recieve } = await getChar(server);
      setSendChar(send);
      setrecieveChar(recieve);
      setConnected(true)
      // start the notifications
      notify(recieve, setWeight);
    } catch (error) {
      throw new Error("could not connect to tindeq: ", error);
    }
  }

  // used for easy test of functions
  const doSomething = async () => {
   
  };

  return (
    <main className="app">
      <button
        className="border-2 border-white rounded-md p-3 mb-3"
        onClick={connect}
      >
        connect
      </button>
      <button
        className="border-2 border-white rounded-md p-3"
        onClick={doSomething}
      >
        do something
      </button>

      <CFT sendChar={sendChar} />
      <DisconnectBtn sendChar={sendChar} setConnected={setConnected} />
      <ContinuousWBtn sendChar={sendChar} />
      <StopLoggingBtn sendChar={sendChar} />
      <TareBtn sendChar={sendChar} />
      <DisplayWeight weight={weight} connected={connected} />
    </main>
  );
}
