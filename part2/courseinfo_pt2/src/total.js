import React from "react";

const Total = ({ parts }) => {
  let total = parts.reduce((i, part) => {
    return i + part.exercises;
  }, 0);
  return <h3>total exercises {total}</h3>;
};

export default Total;
