import React, {useState} from 'react'

const Counter = (prop) => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => {setCount(count+1)}}>Increment</button>
        </div>
    )
}

export default Counter
