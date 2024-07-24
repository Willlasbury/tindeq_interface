"use client";
import { useState, useEffect } from "react";
import "./App.css";

import MaxPull from "./components/workouts/MaxPull";
import StartStopBtn from "./components/buttons/tindeqBtns/StartStopBtn";
import RPEWorkout from "./components/workouts/RPE";
import ChooseWorkout from "./components/workouts/ChooseWorkout";
import LoginModal from "./components/login/modal";
import ConnectTindeqModal from "./components/connectTindeq/modal";
import Settings from "./components/Settings";
import FingerForm from "./components/workouts/FingerForm/form";
import TimerSettings from "./components/Settings/PullSettings";
import TimeDisplay from "./components/TimeDisplay";
import useTimer from "./utils/workout/useTimer";

export default function App() {
  const [sendChar, setSendChar] = useState(undefined);
  const [weight, setWeight] = useState(0);
  const [measuring, setMeasuring] = useState(false);

  const [loggedIn, setLoggedIn] = useState(true);
  const [connected, setConnected] = useState(true);

  const [workout, setWorkout] = useState("RPE");
  const [pullTime, setPullTime] = useState(7);
  const [restTime, setRestTime] = useState(180);
  const [RPE, setRPE] = useState(8);
  const [maxPull, setMaxPull] = useState(3);
  const [bothHands, setBothHands] = useState(false);

  const [resting, setResting] = useState(false);

  const [displaySettings, setDisplaySettings] = useState(false);

  const [styleData, setStyleData] = useState({
    hand: "left",
    edge: 20,
    grip: "open",
    index: true,
    middle: true,
    ring: true,
    pinky: true,
  });
  
  const { time, setTime, isRunning, start, stop } = useTimer(pullTime);

  window.onpopstate = (event) => {
    event.preventDefault();
    setWorkout(undefined);
  };

  return (
    <>
      {!loggedIn && <LoginModal setLoggedIn={setLoggedIn} />}
      {loggedIn && !connected && (
        <ConnectTindeqModal
          setConnected={setConnected}
          setSendChar={setSendChar}
          setWeight={setWeight}
        />
      )}

      {workout && (
        <header className="nav-head">
          <button
            className="back-btn"
            onClick={() => {
              setWorkout(undefined);
            }}
          >
            back
          </button>
          <img
            onClick={() => {
              setDisplaySettings(!displaySettings);
            }}
            className="settings-img"
            src="src/icons/gear.svg"
          />
        </header>
      )}
      {displaySettings && (
        <Settings
          setDisplaySettings={setDisplaySettings}
        >
          <FingerForm
            key={"FF"}
            styleData={styleData}
            setStyleData={setStyleData}
          />
          <TimerSettings
            key={"TS"}
            // maxPull={maxPull}
            // RPE={RPE}
            // setRPE={setRPE}
            pullTime={pullTime}
            setPullTime={setPullTime}
            restTime={restTime}
            setRestTime={setRestTime}
            // time={time}
            // setTime={setTime}
          />
        </Settings>
      )}
      <main>
        {workout != "Max Pull" && workout != undefined && (
          <TimeDisplay
            time={time}
            setTime={setTime}
            restTime={restTime}
            RPE={RPE}
            isRunning={isRunning}
            resting={resting}
            setResting={setResting}
            pullTime={pullTime}
            measuring={measuring}
            weight={weight}
            maxPull={maxPull}
            setMaxPull={setMaxPull}
            bothHands={bothHands}
            setBothHands={setBothHands}
            start={start}
            stop={stop}
          />
        )}
        <ChooseWorkout workout={workout} setWorkout={setWorkout}>
          <RPEWorkout
            key="RPE"
            weight={weight}
            measuring={measuring}
            setStyleData={setStyleData}
            pullTime={pullTime}
            restTime={restTime}
            stop={stop}
            maxPull={maxPull}
            setMaxPull={setMaxPull}
            bothHands={bothHands}
            setBothHands={setBothHands}
            resting={resting}
            setResting={setResting}
            setTime={setTime}
            RPE={RPE}
            setRPE={setRPE}
          >
            <StartStopBtn
              sendChar={sendChar}
              measuring={measuring}
              setMeasuring={setMeasuring}
            />
          </RPEWorkout>
          <MaxPull key="Max Pull" weight={weight} styleData={styleData}>
            <StartStopBtn
              sendChar={sendChar}
              measuring={measuring}
              setMeasuring={setMeasuring}
            />
          </MaxPull>
        </ChooseWorkout>
      </main>
    </>
  );
}
