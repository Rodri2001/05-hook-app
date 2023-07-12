import React, { useState } from 'react'

export const CounterApp = () => {
 
    const [counter, setCounter] = useState(10)
    
    return (
    <div>
        <h1>Counter: </h1>
        <hr/>
        <button className='btn' onClick={ () => setCounter(counter + 1)} >+1</button>
    </div>
  )
}
