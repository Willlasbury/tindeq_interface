import { useRef, useState, useEffect } from "react";

export default function useTimer(startTime) {
  let timeInterval = useRef(null);

  const [time, setTime] = useState(startTime);
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    setIsRunning(true);
    timeInterval.current = setInterval(() => {
      setTime((time) => time - 1);
    }, 10);
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(timeInterval.current);
    setTimeout(() => {}, 1000);
  };
  return { time, setTime, isRunning, setTime, start, stop };
}
