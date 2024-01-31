"use client";
import { useState } from "react";
import "./App.css";

import MeasurementPage from "./components/MeasurementPage";
import Landing from "./components/Landing";
import LoginForm from "./components/login";
import RPEWorkout from "./components/RPE";

export default function Home() {
  const [server, setServer] = useState(undefined);
  const [sendChar, setSendChar] = useState(undefined);
  const [recieveChar, setRecieveChar] = useState(undefined);
  const [weight, setWeight] = useState(0);
  const [connected, setConnected] = useState(false);
  const [measuring, setMeasuring] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  if (!loggedIn) {
    return (
      <main>
        <LoginForm setLoggedIn={setLoggedIn}/>
      </main>
    );
  } else {
    return (
      <main>
        {connected ? (
          // <MeasurementPage
          //   weight={weight}
          //   sendChar={sendChar}
          //   setConnected={setConnected}
          //   setMeasuring={setMeasuring}
          //   measuring={measuring}
          // />
          <RPEWorkout weight={weight} sendChar={sendChar}
          setConnected={setConnected}
          setMeasuring={setMeasuring}
          measuring={measuring}/>
        ) : (
          <Landing
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
}
