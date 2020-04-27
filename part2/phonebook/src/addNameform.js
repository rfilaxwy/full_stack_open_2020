import React from "react";

const AddNameForm = props => (
  <form>
    <div>
      name: <input value={props.newName} onChange={props.handleNameChange} />
    </div>
    <div>
      phonenumber:{" "}
      <input value={props.newNumber} onChange={props.handleNumberChange} />
    </div>
    <div>
      <button onClick={props.add}>add</button>
    </div>
  </form>
);

export default AddNameForm;
