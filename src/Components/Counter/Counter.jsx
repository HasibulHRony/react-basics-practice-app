import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleCountIncrease = () => {
            const plusCount = count + 1;
            setCount(plusCount)   
    }

    const handleCountDecrease = () =>{
        const minsCount = count-1;
        setCount(minsCount)
    }

    const handleReset = () =>{
       const reset = 0;
        setCount(reset)
    }

    return (
        <div>
            <div style={{ textAlign: "text-center", padding: "10px", border: "2px solid yellow", borderRadius: "10px", margin: "10px", fontSize: "30px" }}>
                Number: {count}
            </div>
            <button style={{ fontSize: "30px" }} onClick={handleCountIncrease}>++</button>
            <button style={{ fontSize: "30px" }} onClick={handleCountDecrease}>--</button>
            <button style={{ fontSize: "30px" }} onClick={handleReset}>Reset</button>
            
        </div>
    );
};

export default Counter;