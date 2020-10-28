import React from 'react'
import ReactDom from 'react-dom'


//JSX Rules
//return single statement
//div/ section / article or Fragment
//use camelCase for html attribute
//className instead of class
//close every element
//formatting: always use () after return
function Greeting() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

ReactDom.render(<Greeting />, document.getElementById('root'));

