import React from "react";

const NumberList = ({ persons, searchName, deletePerson }) => {
  let numbersArray;

  if (searchName.length > 0) {
    numbersArray = persons
      .filter((person) => {
        let personName = person.name.toLowerCase();
        return personName.includes(searchName);
      })
      .map((person) => (
        <div key={person.name}>
          <p>{`${person.name}    ${person.number}`}</p>
          <button
            onClick={() => {
              deletePerson(person.id);
            }}
          >
            delete
          </button>
        </div>
      ));
  } else {
    numbersArray = persons.map((person) => (
      <div key={person.name}>
        <p>{`${person.name}    ${person.number}`}</p>
        <button
          onClick={() => {
            deletePerson(person.id, person.name);
          }}
        >
          delete
        </button>
      </div>
    ));
  }
  return <div>{numbersArray}</div>;
};
export default NumberList;
