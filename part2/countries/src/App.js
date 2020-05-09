import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Input from "./input";
import Button from "./button";
import SearchArray from "./searchArray";

const App = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleChange = (e) => {
    setSearchCountry(e.target.value.toLowerCase());
    search();
  };

  const search = () => {
    let searchCountries = countries.filter((country) => {
      let cName = country.name.toLowerCase();
      return cName.includes(searchCountry);
    });
    setFilteredCountries(searchCountries);
  };

  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(res.data);
    });
  };

  useEffect(hook, []);

  return (
    <div>
      <Input searchCountry={searchCountry} handleChange={handleChange} />

      <SearchArray array={filteredCountries} />
    </div>
  );
};

export default App;
