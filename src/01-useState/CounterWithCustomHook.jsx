import { useCounter } from '../Hooks/useCounter'

const CounterWithCustomHook = () => {
    const { counter, increment,
        decrement,
        reset } = useCounter()

    return (
        <div>
            <h1> Counter with Hook: {counter}</h1>
            <hr />

            <button onClick={() => increment()} className='btn btn-primary'>+1</button>
            <button onClick={reset} className='btn btn-primary'>reset</button>
            <button onClick={() => decrement()} className='btn btn-primary'>-1</button>
        </div>
    )
}

export default CounterWithCustomHook