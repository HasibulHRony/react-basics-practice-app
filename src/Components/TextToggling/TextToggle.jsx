import React from 'react';

function TextToggle({text, handleToggle}){
    return (
        <div>
            {
                text ? <h1>Practicing React</h1> : " "
            }
            <button onClick={handleToggle}>Shaw Text</button>
            <button onClick={handleToggle}>Hide Text</button>
        </div>
    );
};

export default TextToggle;