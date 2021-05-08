import React, { useState } from "react";

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalScore = () => good + neutral + bad;
  const averageScore = () => {
    return totalScore() ? (good + bad * -1) / totalScore() : 0;
  };
  const positivePercentage = () =>
    `${totalScore() ? (good / totalScore()) * 100 : 0} %`;

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button text="good" handleClick={() => setGood(good + 1)} />
        <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
        <Button text="bad" handleClick={() => setBad(bad + 1)} />
      </div>
      <div>
        <div>Statistics</div>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {totalScore()}</div>
        <div>average {averageScore()}</div>
        <div>positive {positivePercentage()}</div>
      </div>
    </div>
  );
};
export default App;
