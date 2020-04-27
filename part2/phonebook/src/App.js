import React, { useState } from "react";

//Components
import AddNameForm from "./addNameform";
import NumberList from "./numberList";
import Title from "./title";
import Filter from "./filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "247-866-5555" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");

  const handleNameChange = e => {
    setNewName(e.target.value);
  };
  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };
  const handleSeachName = e => {
    setSearchName(e.target.value.toLowerCase());
  };

  const add = e => {
    e.preventDefault();
    let update = true;
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        update = false;
        break;
      }
    }
    if (update) {
      const newPersons = persons.concat({ name: newName, number: newNumber });
      setPersons(newPersons);
      setNewNumber("");
      setNewName("");
    } else {
      alert(`${newName} is already added to the phonebook. Enter a new name.`);
      setNewName("");
    }
  };

  return (
    <div>
      <Title title="Phonebook" />
      <Filter search={searchName} handleSeachName={handleSeachName} />
      <Title title="add a new" />
      <AddNameForm
        add={add}
        newNumber={newNumber}
        newName={newName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <Title title="Numbers" />
      <NumberList searchName={searchName} persons={persons} />
    </div>
  );
};

export default App;
