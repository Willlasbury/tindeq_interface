"use client"
import { useEffect, useState } from "react";

import blc from "../src/utils/connection";
import getChar from "../src/utils/characteristics"

export default function Home() {
    const [server, setServer] = useState()
    const [sendChar, setSendChar] = useState();
    const [recienveChar, setRecienveChar] = useState();


    async function connect () {
        const server = await blc()
        setServer(server)
    }

    async function doSomething () {
      const {send, recieve} = await getChar(server)
      setSendChar(send)
      setRecienveChar(recieve)
    }
    // TODO: customize notify event to handle personal uses 
    // TODO: move notify funcionality to its own folder
    function notify (event) {
      try {
        var value = event.target.value;
        var len = value.byteLength;
        var bytes = [];
        for (var k = 0; k < len; k++)
        {
            var b = value.getUint8(k);
            bytes.push(b);
        }
        console.log("Data: ", bytes);

    } catch (ex) {
        alert("ERROR: " + ex.message);
    }
    }

    useEffect(()=>{
      // console.log("server change:", server)
      // console.log("startNotifications:", startNotifications)
    },[server])
  return (
    <main className='h-screen flex flex-col justify-center items-center'>
      
      <button className='border-2 border-white rounded-md p-3 mb-3'onClick={connect}> connect </button>
      <button className='border-2 border-white rounded-md p-3'onClick={doSomething}> do something </button>
    </main>
  );
}
