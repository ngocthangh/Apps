import React, {useState} from 'react'

function useCounter() {
    const [count, setCount] = useState(3)

    return (
        <div>
            <h1>Counter 2 {count}</h1>
            <button onClick={() => {setCount(count+1)}}></button>
        </div>
    )
}

export default useCounter
