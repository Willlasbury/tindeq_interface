"use client";
import { useState } from "react";
import "./App.css";

import MeasurementPage from "./components/MeasurementPage";
import Landing from "./components/Landing";

import userApi  from "./utils/fastApi/users"
import checkMaxWeight from "./utils/handleData/checkMaxWeight";

const func = async () => {
  const res = await userApi.createUser()
  console.log("res:", res)
}



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
        <MeasurementPage
          weight={weight}
          sendChar={sendChar}
          setConnected={setConnected}
          setMeasuring={setMeasuring}
          measuring={measuring}
        />
      ) : (
        <Landing 
        setServer={setServer}
        setSendChar={setSendChar}
        setConnected={setConnected}
        setRecieveChar={setRecieveChar}
        setWeight={setWeight}
        />
      )}

      <button onClick={() => func()}>test fdsa</button>
    </main>
  );
}
