import React from 'react'
import ReactDom from 'react-dom'


//CSS
import './index.css'
function BookList() {
    return (
        <section className ='booklist'> 
            <Book />
            
            
        </section>
    );
}
const author = 'Michelle Obama'
const Book = () => {
    const title = 'Becoming: A Guided Journal for Discovering Your Voice'
    return (
        <article className='book'>
             <img src="https://m.media-amazon.com/images/I/81bFNmhKrTL._AC_UY218_.jpg" alt="Michelle Obama" />
            <h1>{title}</h1>
            <h4 >{author}</h4>

        </article>
    );
};





ReactDom.render(<BookList />, document.getElementById('root'));






//JSX Rules
//return single statement
//div/ section / article or Fragment
//use camelCase for html attribute
//className instead of class
//close every element
//formatting: always use () after return