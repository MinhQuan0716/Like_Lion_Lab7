import React, { useEffect, useState } from "react";

function useClockHook() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(interval); // clean up when unmounted
  }, []);
  const hours24 = time.getHours();
  const ampm = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 || 12; // convert 0 to 12
  return {
    hours: hours12,
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
    period: ampm,
  };
}

export default useClockHook;
