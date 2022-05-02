import React , { useState} from 'react';

function Counter(props) {
    const [count , setcount ] = useState(0)

    const increamentCounter = () => {
        setcount (() => count + 1)
    }
    const decreamentCounter = () => {
            if (count === 0) {
                count = 0;
            } else {
                setcount (() => count -1)
            }
    }
    return (
        <>
        <div>
            <button onClick={() => decreamentCounter()}>-</button>
            <span>{count}</span>
            <button onClick={() => increamentCounter()}>+</button>
        </div>
        </>
    );
}

export default Counter;