import React from 'react'
import ReactDom from 'react-dom'


// Nested components, React Tools
function Greeting() {
    return (
        <div>
            <Person />
            <Message /> 
        </div>
    );
}

const Person = () => <h2>Chizaram Tabby</h2>;
const Message = () => {
    return (
        <>
        <p>All the things dem talk about me no be true.</p>
        <p>Dem be saying all these things to get to you ooou.</p>
        <p>Aii sisi no be true, no be true</p>
        </> 
    )     
};

ReactDom.render(<Greeting />, document.getElementById('root'));






//JSX Rules
//return single statement
//div/ section / article or Fragment
//use camelCase for html attribute
//className instead of class
//close every element
//formatting: always use () after return