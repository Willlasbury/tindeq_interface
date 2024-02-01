"use client";
import { useState } from "react";
import "./App.css";

import MaxPull from "./components/workouts/MaxPull";
import Landing from "./components/Landing";
import LoginForm from "./components/userFuncs/Login";
import RPEWorkout from "./components/workouts/RPE";

export default function Home() {
  const [sendChar, setSendChar] = useState(undefined);
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
          <MaxPull
            weight={weight}
            sendChar={sendChar}
            setConnected={setConnected}
            setMeasuring={setMeasuring}
            measuring={measuring}
          />
          // <RPEWorkout weight={weight}
          // sendChar={sendChar}
          // measuring={measuring}
          // setConnected={setConnected}
          // setMeasuring={setMeasuring} />
        ) : (
          <Landing
            setSendChar={setSendChar}
            setConnected={setConnected}
            setWeight={setWeight}
          />
        )}
      </main>
    );
  }
}
