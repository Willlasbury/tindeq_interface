"use client"
import { useEffect, useState } from "react";

import blc from "../src/utils/connection";
// import getChar from "../src/utils/characteristics"

export default function Home() {
    const [server, setServer] = useState()
    const [char, setChar] = useState()

    async function connect () {
        const server = await blc()
        setServer(server)
    }

    async function doSomething () {
      const cmds = {
        TARE_SCALE: 0x64,
        START_WEIGHT_MEAS: 0x65,
        STOP_WEIGHT_MEAS: 0x66,
        START_PEAK_RFD_MEAS: 0x67,
        START_PEAK_RFD_MEAS_SERIES: 0x68,
        ADD_CALIB_POINT: 0x69,
        SAVE_CALIB: 0x6a,
        GET_APP_VERSION: '0x6b',
        GET_ERR_INFO: 0x6c,
        CLR_ERR_INFO: 0x6d,
        SLEEP: 0x6e,
        GET_BATT_VLTG: 0x6f,
      };
      try {
        const primary_service = "7e4e1701-1ea6-40c9-9dcc-13d34ffead57";
        const notifyUuid = "7e4e1702-1ea6-40c9-9dcc-13d34ffead57";
        const writeUuid = "7e4e1703-1ea6-40c9-9dcc-13d34ffead57";
    
        const service = await server.getPrimaryService(primary_service);
        const recieve = await service?.getCharacteristic(notifyUuid)

        // console.log("recieve:", recieve)
        recieve.addEventListener("characteristicvaluechanged", notify)
        await recieve.startNotifications()
        const sendChar = await service?.getCharacteristic(writeUuid)
        const start = new Uint8Array([cmds.START_WEIGHT_MEAS])
        const stop = new Uint8Array([cmds.STOP_WEIGHT_MEAS])
        await sendChar.writeValueWithResponse(start)
        setTimeout(async () => {
          await sendChar.writeValueWithResponse(stop)
        },5000)
        

      } catch (error) {
        return new Error(`some error: ${error}`);
      }
    }

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
