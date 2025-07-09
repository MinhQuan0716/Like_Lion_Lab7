import React, { useState } from "react";

function useClockHook() {
  const date = new Date();
  const [time] = useState({
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
  });

  return time;
}

export default useClockHook;
