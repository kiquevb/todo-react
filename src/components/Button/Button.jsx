import React from "react";

const Button = ({ text = "Submit" }) => {
  return <button type="submit">{text}</button>;
};

export default Button;
