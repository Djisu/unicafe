import React, { useState } from 'react'
import ReactDOM from 'react-dom'

  // do not define a component within another component
  const Statistics = (props) => {
    return (
        <div>
            <strong>statistics</strong><br />
            Good <span>{props.good}</span><br />
            Neutral <span>{props.neutral}</span><br />
            Bad <span>{props.bad}</span><br />
            all <span>{props.good + props.bad + props.neutral}</span><br />
            average  <span>{((props.good * 1) + (props.bad * -1) + (props.neutral * 0))/(props.good + props.bad + props.neutral)}</span><br />
            positive  <span>{(props.good/(props.good + props.bad + props.neutral)) * 100} %</span><br /> 
        </div>
     )
  }

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  } 

  const handleBadClick = () => {
    setBad(bad + 1)
  } 

  return (
    <div>
      {/* code here */}
      <p><strong>give feedback</strong></p><br />

      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
