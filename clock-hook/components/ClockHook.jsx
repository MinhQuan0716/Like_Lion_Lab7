import React from "react";
import useClockHook from "../hooks/useClockHook";

function ClockHook() {
  const { hours, minutes, seconds, period } = useClockHook();

  // Helper to pad minutes/seconds with 0
  const pad = (n) => n.toString().padStart(2, "0");

  return (
    <div>
      {hours}:{pad(minutes)}:{pad(seconds)} {period}
    </div>
  );
}

export default ClockHook;
