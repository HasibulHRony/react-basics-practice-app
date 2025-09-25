import React, { useState } from 'react';

const Runcount = () => {
    const [run, setRun] = useState(0)
    const [sixes, setsixes] = useState(0)

    const handleSingles = () => {
        const add1runs = run + 1;
        setRun(add1runs)
    }

    const handleFours = () => {
        const add4run = run + 4;
        setRun(add4run)
    }

    
    const handlesixes = () => {
        const add6runs = run + 6;
        const totalsixes = sixes + 1;
        setRun(add6runs)
        setsixes(totalsixes)
    }

    return (
        <div>
            <h1>Player: Atahar Ali Khan</h1>
            {
                run >= 50 ? <h2>Congrats, Atat! Your Score is 50 up! your runs: {run}</h2> : " "
            }
            <div style={{ textAlign: "text-center", padding: "10px", border: "2px solid yellow", borderRadius: "10px", margin: "10px", fontSize: "30px" }}>Runs: {run}</div>
            <p>Total sixes: {sixes}</p>
            <button onClick={handleSingles}>1 Run</button>
            <button onClick={handleFours}>4 run</button>
            <button onClick={handlesixes}>6 run</button>
        </div>
    );
};

export default Runcount;