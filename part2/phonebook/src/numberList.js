import React from "react";

const NumberList = ({ persons, searchName }) => {
  let numbersArray;

  if (searchName.length > 0) {
    numbersArray = persons
      .filter(person => {
        let personName = person.name.toLowerCase();
        return personName.includes(searchName);
      })
      .map(person => (
        <p key={person.name}>{`${person.name}    ${person.number}`}</p>
      ));
  } else {
    numbersArray = persons.map(person => (
      <p key={person.name}>{`${person.name}    ${person.number}`}</p>
    ));
  }
  return <div>{numbersArray}</div>;
};
export default NumberList;
