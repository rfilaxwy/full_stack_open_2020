import React from "react";
import CountryDisplay from "./countryDisplay";

const SearchArray = ({ array }) => {
  if (array.length === 0) {
    return <p>No results</p>;
  } else if (array.length > 9) {
    return <p>To many matches, specify another filter.</p>;
  } else if (array.length > 1) {
    return array.map((country) => (
      <CountryDisplay key={country.name} country={country} />
    ));
  } else {
    let country = array[0];
    return <CountryDisplay country={country} />;
  }
};
export default SearchArray;
