import React from "react";

const Input = ({ handleChange, searchCountry }) => (
  <input placeholder="search" value={searchCountry} onChange={handleChange} />
);

export default Input;
