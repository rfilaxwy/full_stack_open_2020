import React from "react";

const Filter = ({ searchName, handleSeachName }) => (
  <div>
    filter shown with <input value={searchName} onChange={handleSeachName} />
  </div>
);

export default Filter;
