import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      {/* code here */}
      <p><strong>give feedback</strong></p><br />

      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <p>
        <strong>statistics</strong><br />
        Good <span>{good}</span><br />
        Neutral <span>{neutral}</span><br />
        Bad <span>{bad}</span><br />
      </p>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
