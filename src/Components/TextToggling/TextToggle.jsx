import React from 'react';

function TextToggle({text, handleToggle}){
    return (
        <div>
            {
                text ? <h1>Practicing React</h1> : " "
            }
            <button onClick={handleToggle}>{text ? "Hide text" : "Shaw text"}</button>
           
        </div>
    );
};

export default TextToggle;