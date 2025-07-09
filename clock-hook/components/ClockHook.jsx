import React, { useState } from "react";
import useClockHook from "../hooks/useClockHook";

function ClockHook() {
  const { time } = useClockHook();
  return <div>{time}</div>;
}

export default ClockHook;
