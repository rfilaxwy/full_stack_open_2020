import React from "react";

const Button = ({ buttonFunction, title }) => (
  <button onClick={buttonFunction}>{title}</button>
);
export default Button;
