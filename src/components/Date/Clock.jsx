import React, { useState } from "react";
import styled from "@emotion/styled";

const StyledClock = styled.p`
  position: absolute;
  bottom: 0;
  left: 15px;
  font-size: 0.7em;
`;

const Clock = () => {
  const [time, updateTime] = useState({ date: new Date() });
  function tick() {
    updateTime({
      date: new Date(),
    });
  }

  setInterval(() => tick(), 1000);

  return <StyledClock>{time.date.toLocaleTimeString()}</StyledClock>;
};

export default Clock;
