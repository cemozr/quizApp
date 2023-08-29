import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp, unsuccessful, timeCheck, func }) {
  const [isTimeOver, setIsTimeOver] = useState(false);

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      setIsTimeOver(true),
        console.warn("onExpire called"),
        unsuccessful(),
        restart(expiryTimestamp);
      console.log(seconds);
    },
  });

  const res = () => {
    restart(expiryTimestamp);
    setIsTimeOver(false);
  };
  func(res);
  return (
    <progress
      id="progress-bar"
      value={isTimeOver ? res() : seconds}
      max="5"
    ></progress>
  );
}
export default MyTimer;
