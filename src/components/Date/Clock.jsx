import React, { useState } from "react";

const Clock = () => {
  const [time, updateTime] = useState({ date: new Date() });
  function tick() {
    updateTime({
      date: new Date(),
    });
  }

  setInterval(() => tick(), 1000);

  return <div>{time.date.toLocaleTimeString()}</div>;
};

export default Clock;
