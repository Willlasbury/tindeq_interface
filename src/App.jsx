"use client";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import MaxPull from "./components/workouts/MaxPull";
import Landing from "./components/Landing";
import LoginForm from "./components/Login";
import RPEWorkout from "./components/workouts/RPE";
import Layout from "./components/Layout";
import ChooseWorkout from "./components/workouts/ChooseWorkout";

export default function () {
  const [sendChar, setSendChar] = useState(undefined);
  const [weight, setWeight] = useState(0);
  const [connected, setConnected] = useState(true);
  const [measuring, setMeasuring] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              connected={connected}
              setConnected={setConnected}
              setLoggedIn={setLoggedIn}
              loggedIn={loggedIn}
            />
          }
        >
          <Route path="/" element={<ChooseWorkout />}>
            <Route
              path="rpe"
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
          <Route
            path="connect"
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
        </Route>
      </Routes>
    </Router>
  );
}
