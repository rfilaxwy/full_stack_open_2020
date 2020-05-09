import React, { useState } from "react";
import Button from "./button";

const CountryDisplay = ({ country }) => {
  const [showCountry, setShowCountry] = useState(false);

  const handleClick = () => {
    console.log(showCountry);
    setShowCountry(!showCountry);
  };

  console.log(country);
  if (showCountry) {
    return (
      <div>
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h3>Languages</h3>
        <ul>
          {country.languages.map((language) => (
            <li key={language.iso639_1}>{language.name}</li>
          ))}
        </ul>
        <img
          alt={`${country.name}'s flag`}
          src={country.flag}
          style={{ width: "350px", height: "250px" }}
        />
        <Button buttonFunction={handleClick} title="Hide" />
      </div>
    );
  } else {
    return (
      <div>
        {country.name} <Button buttonFunction={handleClick} title="Show" />
      </div>
    );
  }
};

export default CountryDisplay;
