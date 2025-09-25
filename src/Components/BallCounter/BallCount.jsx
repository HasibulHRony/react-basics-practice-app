import React, { useState } from 'react';

const BallCout = () => {
    const [ball, setBall] = useState(0)
    const handleBall = () =>{
        if(ball <= 5){ 
            const totalBall = ball + 1;
            setBall(totalBall)
        }
        else{
            setBall(<p>Over Completed</p>)
        }
    }

    const handleNoBall = () =>{
        const ballSum = ball - 1
        setBall(ballSum);
        alert("Ops! it was a no ball! free hit! you should do an extra ball!")
    }
    return (
        <div>
            <div style={{ textAlign: "text-center", padding: "10px", border: "2px solid yellow", borderRadius: "10px", margin: "10px", fontSize: "30px" }}>Ball: {ball}</div>
            <button onClick={handleBall}>1 Ball</button>
            <button onClick={handleNoBall}>No Ball</button>
        </div>
    );
};

export default BallCout;