import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    return `${hours}:${minutes}:${seconds} ${meridiem}`;
  }

  return (
    <div className="clock-container">
      <div className="clock font-bold text-xl cursor-pointer">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default Clock;
