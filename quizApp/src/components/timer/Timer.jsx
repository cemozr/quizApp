import { useTimer } from "react-timer-hook";
function MyTimer({ expiryTimestamp }) {
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
    onExpire: () => console.warn("onExpire called"),
  });
  return (
    <progress id="progress-bar" value={seconds} max="30">
      {seconds}
    </progress>
  );
}
export default MyTimer;
