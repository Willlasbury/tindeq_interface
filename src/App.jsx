"use client";
import { useState } from "react";

import blc from "../src/utils/tindeqApi/connection";
import getChar from "./utils/tindeqApi/characteristics";
import notify from "./utils/tindeqApi/notify";
import CFT from "./components/tindeqBtns/CFT";
import DisconnectBtn from "./components/tindeqBtns/DisconnnectBtn";
import ContinuousWBtn from "./components/tindeqBtns/StartLoggingBtn";
import StopLoggingBtn from "./components/tindeqBtns/StopLoggingBtn"
import DisplayWeight from "./components/displayWeight";
import TareBtn from "./components/tindeqBtns/TareBtn";


export default function Home() {
  const [server, setServer] = useState();
  const [sendChar, setSendChar] = useState(undefined);
  const [recieveChar, setrecieveChar] = useState(undefined);
  const [weight, setWeight] = useState();

  // initiate the connection and obtain the server
  async function connect() {
    const server = await blc();
    setServer(server);
    // recieve and save the chatacteristics
    const { send, recieve } = await getChar(server);
    setSendChar(send);
    setrecieveChar(recieve);

    // start the notifications
    notify(recieve, setWeight);
  }

  // used for easy test of functions
  const doSomething = async () => {
    // test out tare func

  };

  return (
    <main className="h-screen flex flex-col justify-center items-center">
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
      <DisconnectBtn sendChar={sendChar} />
      <ContinuousWBtn sendChar={sendChar} />
      <StopLoggingBtn sendChar={sendChar} />
      <DisplayWeight weight={weight} />
      <TareBtn sendChar={sendChar} />
    </main>
  );
}
