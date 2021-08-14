import React from "react";
import styled from "@emotion/styled";

let date = new Date();
let dateOptions = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

const DateStyled = styled.h4`
  color: #fff;
  margin: 0;
  font-weight: 300;
`;

const DateComponent = () => {
  return (
    <DateStyled>{date.toLocaleDateString("en-US", dateOptions)}</DateStyled>
  );
};

export default DateComponent;
