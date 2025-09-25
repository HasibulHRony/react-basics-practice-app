import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleCount = () => {
    
            const plusCount = count + 1;
            setCount(plusCount)
      

    }
    return (
        <div>
            <div style={{ textAlign: "text-center", padding: "10px", border: "2px solid yellow", borderRadius: "10px", margin: "10px", fontSize: "30px" }}>
                Number: {count}
            </div>
            <button style={{ fontSize: "30px" }} onClick={handleCount}>++</button>
        </div>
    );
};

export default Counter;