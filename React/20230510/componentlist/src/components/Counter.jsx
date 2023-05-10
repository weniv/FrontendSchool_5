import React, { useState } from 'react'

export default function Counter() {
    const [number, setNumber] = useState(0);

    function increment() {
        setNumber(number + 1);
        setNumber(prevNumber => prevNumber + 1);
    }

    function decrement() {
        // setNumber(number - 1);
        setNumber(prevNumber => prevNumber - 1);
    }

    return (
        <div>
            <h2>Counter : {number}</h2>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    )
}
