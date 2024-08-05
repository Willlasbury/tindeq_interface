"use client";
import { useState } from "react";
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
import whichHand from "./utils/workout/whichHand";

export default function App() {
  const [sendChar, setSendChar] = useState(undefined);
  const [weight, setWeight] = useState(0);
  const [measuring, setMeasuring] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  const [connected, setConnected] = useState(false);

  const [workout, setWorkout] = useState("RPE");
  const [pullTime, setPullTime] = useState(7);
  const [restTime, setRestTime] = useState(160);
  const [RPE, setRPE] = useState(8);
  const [maxPull, setMaxPull] = useState(undefined);
  const [bothHands, setBothHands] = useState(false);
  const [hand, setHand, swapHand] = whichHand();
  
  const [resting, setResting] = useState(false);

  const [displaySettings, setDisplaySettings] = useState(false);

  const [styleData, setStyleData] = useState({
    hand: "left",
    edge: 20,
    grip: "open",
    index: false,
    middle: true,
    ring: true,
    pinky: true,
  });
  const { time, setTime, isRunning, setIsRunning, start, stop } = useTimer(pullTime);

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
            key="FF"
            styleData={styleData}
            setStyleData={setStyleData}
            hand={hand}
            setHand={setHand}
          />
          <TimerSettings
            key="TS"
            pullTime={pullTime}
            setPullTime={setPullTime}
            restTime={restTime}
            setRestTime={setRestTime}
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
            setIsRunning={setIsRunning}
            resting={resting}
            setResting={setResting}
            pullTime={pullTime}
            measuring={measuring}
            weight={weight}
            maxPull={maxPull}
            setMaxPull={setMaxPull}
            bothHands={bothHands}
            setBothHands={setBothHands}
            swapHand={swapHand}
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
            hand={hand}
            setHand={setHand}
          >
            <StartStopBtn
              sendChar={sendChar}
              measuring={measuring}
              setMeasuring={setMeasuring}
            />
          </RPEWorkout>
          <MaxPull key="Max Pull" weight={weight} styleData={styleData} loggedIn={loggedIn}>
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
