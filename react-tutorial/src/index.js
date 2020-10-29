import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import {books} from './books'
import Book from './Book'

function BookList() {
    return (
    
        <section className = 'booklist'>
                {books.map((book) => {
            
                    return <Book key={book.id}  {...book}></Book>
        })
    }
            
        </section>
    );
}




ReactDom.render(<BookList />, document.getElementById('root'));






//JSX Rules
//return single statement
//div/ section / article or Fragment
//use camelCase for html attribute
//className instead of class
//close every element
//formatting: always use () after return