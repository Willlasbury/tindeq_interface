"use client";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import MaxPull from "./components/workouts/MaxPull";
import ControlBoard from "./components/ControlBoard";
import RPEWorkout from "./components/workouts/RPE";
import Layout from "./components/Layout";

export default function () {
  const [sendChar, setSendChar] = useState(undefined);
  const [weight, setWeight] = useState(0);
  const [measuring, setMeasuring] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [connected, setConnected] = useState(true);
  const [showFingerForm, setShowFingerForm] = useState(false);
  const [styleData, setStyleData] = useState({
    hand: "left",
    edge: 20,
    grip: "open",
    index: true,
    middle: true,
    ring: true,
    pinky: true,
  });

  return (
    <>
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
                setSendChar={setSendChar}
                setWeight={setWeight}
                styleData={styleData}
                setStyleData={setStyleData}
                showFingerForm={showFingerForm}
                setShowFingerForm={setShowFingerForm}
              />
            }
          >
            <Route
              path="rpe"
              element={
                <RPEWorkout
                  weight={weight}
                  measuring={measuring}
                  setStyleData={setStyleData}
                  controlComp={
                    <ControlBoard
                      sendChar={sendChar}
                      measuring={measuring}
                      setConnected={setConnected}
                      setMeasuring={setMeasuring}
                      showFingerForm={showFingerForm}
                      setShowFingerForm={setShowFingerForm}
                    />
                  }
                />
              }
            />

            <Route
              path="max_pull"
              element={
                <MaxPull
                  weight={weight}
                  styleData={styleData}
                  controlComp={
                    <ControlBoard
                      sendChar={sendChar}
                      measuring={measuring}
                      setConnected={setConnected}
                      setMeasuring={setMeasuring}
                      showFingerForm={showFingerForm}
                      setShowFingerForm={setShowFingerForm}
                    />
                  }
                />
              }
            />
            <Route
            path="*"
            element={
              <div>Sorry, We can not find this endpoint at the moment</div>
            }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
