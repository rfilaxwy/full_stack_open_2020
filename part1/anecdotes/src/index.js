import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);
  const handleSelectClick = () => setSelected(Math.floor(Math.random() * 6));

  const highestRated = votes.indexOf(Math.max(...votes));

  const handleVoteClick = () => {
    const copy = [...votes];
    copy[selected]++;
    setVotes(copy);
  };
  return (
    <div>
      {anecdotes[selected]}
      <br />
      <p>has {votes[selected]} votes</p>
      <br />
      <button onClick={() => handleVoteClick()}>vote</button>
      <button onClick={() => handleSelectClick()}>next anecdote</button>
      <h3>Anecodte with the most votes</h3>
      <p>{anecdotes[highestRated]}</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
