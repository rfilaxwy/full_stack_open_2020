import axios from "axios";
const baseUrl = "https://agile-springs-10319.herokuapp.com/api/persons";

const addPerson = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((response) => response.data);
};

const getAllPerson = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const updateNumber = (person) => {
  const request = axios.put(`${baseUrl}/${person.id}`, person);
  return request
    .then((response) => response.data)
    .catch((response) => response.err("failed"));
};

export default { addPerson, getAllPerson, deletePerson, updateNumber };
