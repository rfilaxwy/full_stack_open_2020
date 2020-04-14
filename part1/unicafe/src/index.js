import React, { useState } from "react";
import ReactDOM from "react-dom";

const Title = ({ title }) => <h1>{title}</h1>;
const Statistics = ({ stat, label }) => (
  <tr>
    <td>{label}</td>
    <td>{stat}</td>
  </tr>
);

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + bad + neutral;
  const avg = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good / all) * 100;

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  if (all > 0) {
    return (
      <div>
        <Title title="Give feedback" />
        <Button text="Good" handleClick={handleGoodClick} />
        <Button text="Neutral" handleClick={handleNeutralClick} />
        <Button text="Bad" handleClick={handleBadClick} />
        <Title title="Statistics" />
        <table>
          <tbody>
            <Statistics label="Good" stat={good} />
            <Statistics label="Bad" stat={bad} />
            <Statistics label="Neutral" stat={neutral} />
            <Statistics label="All" stat={all} />
            <Statistics label="Average" stat={avg} />
            <Statistics label="Positive" stat={positive + " %"} />
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div>
      <Title title="Give feedback" />
      <Button text="Good" handleClick={handleGoodClick} />
      <Button text="Neutral" handleClick={handleNeutralClick} />
      <Button text="Bad" handleClick={handleBadClick} />
      <Title title="Statistics" />
      <h3>No feedback recorded</h3>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
