import React, { Fragment, useState } from "react";

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ text, value }) => <div>{`${text} ${value}`}</div>;

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <Fragment>
      <h1>Statistics</h1>
      {!all ? (
        <div>No feeback given</div>
      ) : (
        <div>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </div>
      )}
    </Fragment>
  );
};

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
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={totalScore()}
          average={averageScore()}
          positive={positivePercentage()}
        />
      </div>
    </div>
  );
};
export default App;
