import React, { useState, useEffect } from "react";
import personService from "./services/persons";

//Components
import AddNameForm from "./addNameform";
import NumberList from "./numberList";
import Title from "./title";
import Filter from "./filter";
import Message from "./message";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [failMessage, setFailMessage] = useState(null);

  const hook = () => {
    personService.getAllPerson().then((res) => setPersons(res));
  };

  useEffect(hook, []);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };
  const handleSeachName = (e) => {
    setSearchName(e.target.value.toLowerCase());
  };

  const notDuplicateName = () => {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        return false;
      }
    }
    return true;
  };

  const clearFields = () => {
    setNewNumber("");
    setNewName("");
    setTimeout(() => {
      setSuccessMessage(null);
      setFailMessage(null);
    }, 6000);
  };

  const add = (e) => {
    e.preventDefault();
    let notDuplicate = notDuplicateName();

    if (notDuplicate) {
      const newPerson = { name: newName, number: newNumber };
      personService.addPerson(newPerson).then((response) => {
        setPersons(persons.concat(newPerson));
        setSuccessMessage(`${newName} was added to phonebook.`);
      });
      clearFields();
    } else {
      if (
        window.confirm(
          `${newName} was already added to phonebook are you sure you want to update number?`
        )
      ) {
        const updateperson = persons.find((person) => person.name === newName);
        updateperson.number = newNumber;
        personService
          .updateNumber(updateperson)
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.name !== response.name ? person : response
              )
            );
          })
          .catch((err) => {
            setFailMessage(`${newName} does not exist in db.`);
            setTimeout(hook, 5000);
          });

        clearFields();
      }
    }
  };

  const deleteP = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.deletePerson(id).then(() => {
        let newPersons = persons.filter((x) => x.id !== id);
        setPersons(newPersons);
      });
    }
  };

  return (
    <div>
      <Title title="Phonebook" />
      <Filter search={searchName} handleSeachName={handleSeachName} />
      <Message successMessage={successMessage} failMessage={failMessage} />
      <Title title="add a new" />
      <AddNameForm
        add={add}
        newNumber={newNumber}
        newName={newName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <Title title="Numbers" />
      <NumberList
        searchName={searchName}
        persons={persons}
        deletePerson={deleteP}
      />
    </div>
  );
};

export default App;
