import  { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackhook = () => {
    
   const incrementFather = useCallback(
      () => {
        setCounter((value) => value + 1)
      },
      [],
    )
    

    const [counter, setCounter] = useState(10)
   
  
    return (
        <>
            <h1>CallBackhook: {counter} </h1>
            <hr />
            <button onClick={incrementFather}>incrementar</button>
        </>
    )
}
