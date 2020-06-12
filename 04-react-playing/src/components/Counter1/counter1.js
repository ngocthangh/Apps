import React, {useState} from 'react'

function Counter1() {
    const [count, setCount] = useState(9)
    return (
        <div>
            hello {count}
        </div>
    )
}

export default Counter1
