import { useRef, useState } from "react";

export default function useTimer(startTime) {
  let timeInterval = useRef(null);

  const [time, setTime] = useState(startTime);
  const [isRunning, setIsRunning] = useState(false);

  const clockSpeed = 1000
  const start = () => {
    setIsRunning(true);
    timeInterval.current = setInterval(() => {
      setTime((time) => time - 1);
    }, clockSpeed);
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(timeInterval.current);
    setTimeout(() => {}, clockSpeed);
  };

  return { time, setTime, isRunning, setIsRunning, start, stop };
}
