import React from "react";
import styled from "@emotion/styled";

let date = new Date();
let dateOptions = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

const DateStyled = styled.h1`
  color: #fff;
  margin: 0;
  font-weight: 400;
`;

const DateComponent = () => {
  return (
    <DateStyled>{date.toLocaleDateString("en-US", dateOptions)}</DateStyled>
  );
};

export default DateComponent;
