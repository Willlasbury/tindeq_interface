import { useEffect } from "react";
import "./styles.css";

export default function TimeDisplay({
  resting,
  setResting,
  restTime,
  pullTime,
  measuring,
  weight,
  maxPull,
  RPE,
  time,
  setTime,
  isRunning,
  start,
  stop,
  bothHands,
  setBothHands,
  toggleHand,
}) {
  const workingWeight = ((RPE / 10) * maxPull) >> 0;
  const range = {
    maxRange: workingWeight * 0.1 + workingWeight,
    minRange: workingWeight,
  };
  useEffect(() => {
    if (maxPull != undefined && !isRunning && weight > range.minRange) {
      setResting(false);
      start();
    }

    if (time < 0) {
      stop();
      if (resting) {
        // reset after rest
        setBothHands(false);
        setResting(false);
        setTime(pullTime);
      } else {
        //  if you are still pulling
        if (bothHands) {
          // begin rest after both pulls
          setResting(true);
          setTime(restTime);
          start();
        } else {
          // start second hand pull
          setTime(pullTime);
          setBothHands(true);
        }
      toggleHand();
      }
    }
  }, [time, measuring, weight]);

  const formatTime = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes} : ${seconds}`;
  };

  return (
    <h4 id="timer">{resting ? formatTime(time) : `Time left: ${time}`}</h4>
  );
}
