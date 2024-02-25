"use client";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import MaxPull from "./components/workouts/MaxPull";
import Landing from "./components/Landing";
import LoginForm from "./components/userFuncs/Login";
import RPEWorkout from "./components/workouts/RPE";
import Layout from "./components/Layout";

export default function () {
  const [sendChar, setSendChar] = useState(undefined);
  const [weight, setWeight] = useState(0);
  const [connected, setConnected] = useState(false);
  const [measuring, setMeasuring] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout connected={connected} setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>}>
          <Route
            index
            element={
              <Landing
                setConnected={setConnected}
                setSendChar={setSendChar}
                setWeight={setWeight}
              />
            }
          />
          <Route
            path="login"
            element={<LoginForm setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="workout"
            element={
              <RPEWorkout
                weight={weight}
                sendChar={sendChar}
                measuring={measuring}
                setConnected={setConnected}
                setMeasuring={setMeasuring}
              />
            }
          />
          <Route
            path="max_pull"
            element={
              <MaxPull
                weight={weight}
                sendChar={sendChar}
                measuring={measuring}
                setConnected={setConnected}
                setMeasuring={setMeasuring}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
