"use client";
import { useState } from "react";

import blc from "../src/utils/connection";
import getChar from "../src/utils/characteristics";
import notify from "./utils/notify";
import CFT from "./components/CFT";
import get from "./utils/api/sendData"

export default function Home() {
  const [server, setServer] = useState();
  const [sendChar, setSendChar] = useState(undefined);
  const [recieveChar, setrecieveChar] = useState(undefined);
  const [data, setData] = useState([]);


  // initiate the connection and obtain the server
  async function connect() {
    const server = await blc();
    setServer(server);
    // recieve and save the chatacteristics
    const { send, recieve } = await getChar(server);
    setSendChar(send);
    setrecieveChar(recieve);
    
    // start the notifications
    notify(recieve, setData)
  }


// test server connection
  const doSomething = async () => {
    let data = await get.get()
    console.log(
     data
    );
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

      <CFT sendChar={sendChar}/>
    </main>
  );
}
