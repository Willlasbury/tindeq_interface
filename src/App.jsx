"use client";
import { useEffect, useState } from "react";

import blc from "../src/utils/connection";
import getChar from "../src/utils/characteristics";
import notify from "./utils/notify";

export default function Home() {
  const [server, setServer] = useState();
  const [sendChar, setSendChar] = useState();
  const [recieveChar, setrecieveChar] = useState();

  // initiate the connection and obtain the server
  async function connect() {
    const server = await blc();
    setServer(server);
    // recieve and save the chatacteristics
    const { send, recieve } = await getChar(server);
    setSendChar(send);
    setrecieveChar(recieve);
    // start the notifications
    notify(recieveChar)
  }

  // start notifications once you have obtained the recieve characterisitic
  // useEffect(() => {
  //   console.log("receive start");
  //   async function startNotify() {
  //     await notify(recieveChar);
  //   }
  //   recieveChar && startNotify();
  // }, recieveChar);

  const doSomething = () => {
    console.log(
      "server, sendChar, recieveChar:",
      server,
      sendChar,
      recieveChar
    );
  };

  // get characteristics once you have the server
  // useEffect(() => {
  //   async function getCharacteristics() {
  //     const { send, recieve } = await getChar(server);
  //     setSendChar(send);
  //     setrecieveChar(recieve);
  //   }
  //   getCharacteristics();
  // }, server);

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <button
        className="border-2 border-white rounded-md p-3 mb-3"
        onClick={connect}
      >
        {" "}
        connect{" "}
      </button>
      <button
        className="border-2 border-white rounded-md p-3"
        onClick={doSomething}
      >
        {" "}
        do something{" "}
      </button>
    </main>
  );
}
