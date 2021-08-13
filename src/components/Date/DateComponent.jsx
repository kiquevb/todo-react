import React from "react";

let date = new Date();
let dateOptions = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

const DateComponent = () => {
  return <h1>{date.toLocaleDateString("en-US", dateOptions)}</h1>;
};

export default DateComponent;
