import React, { useState, useEffect } from "react";

function ComponentTimer() {
  const [timer, setTimer] = useState(10);
  useEffect(() => {
    if (timer === 0) {
      alert("Timeout");
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000); // 1 second interval);
    return () => clearInterval(interval); // cleanup
  }, [timer]);
  return <p>Count down from {timer}</p>;
}

export default ComponentTimer;
