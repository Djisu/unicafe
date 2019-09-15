import React, { useState } from 'react'
import ReactDOM from 'react-dom'

  // do not define a component within another component
  const Statistics = (props) => {
    if (props.good > 0 || props.neutral > 0 || props.bad > 0) {
        return (
            <div>              
                {/* Good <span>{props.good}</span><br />
                Neutral <span>{props.neutral}</span><br />
                Bad <span>{props.bad}</span><br />  */}

                <Statistic text="good" value ={props.good} />
                <Statistic text="neutral" value ={props.neutral} />
                <Statistic text="bad" value ={props.bad} />

                all <span>{props.good + props.bad + props.neutral}</span><br />
                average  <span>{((props.good * 1) + (props.bad * -1) + (props.neutral * 0))/(props.good + props.bad + props.neutral)}</span><br />
                positive  <span>{(props.good/(props.good + props.bad + props.neutral)) * 100} %</span><br /> 
            </div>
        )
    } else {
        return (<p> No feedback given</p>)   
    }
  }

  const Statistic = (props) => {  
        return (
            <div>                
                {props.text} <span>{props.value}</span><br />
            </div>
        )
  }

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

const App = () => {
  // Calling hooks
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
      <p><strong>give feedback</strong></p><br />

      {/* <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button> */}

      <strong>statistics</strong><br />

      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' /> 
      <Button onClick={handleBadClick} text='Bad' /> 
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
