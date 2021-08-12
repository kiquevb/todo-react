import React from "react";

let date = new Date();
let dateOptions = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

const DateComponent = () => {
  return <p>{date.toLocaleDateString("en-US", dateOptions)}</p>;
};

export default DateComponent;
