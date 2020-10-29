import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const books = [
    {   id: 1,
        title: 'Becoming: A Guided Journal for Discovering Your Voice',
        author: 'Michelle Obama',
        img: "https://m.media-amazon.com/images/I/81bFNmhKrTL._AC_UY218_.jpg"

    },

    {   
        id: 2,
        title: 'Humans',
        author: 'Brandon Stanton',
        img: "https://images-na.ssl-images-amazon.com/images/I/51B-BOBtQtL._AC_SX184_.jpg"

    },

    {
        id: 3,
        title: 'Greenlights',
        author: 'Mathew McConaughey',
        img: "https://images-na.ssl-images-amazon.com/images/I/41rbthdtokL._AC_SX184_.jpg"
    },
];

function BookList() {
    return (
    
        <section className = 'booklist'>
                {books.map((book) => {
                const { img, title, author } = book;
                    return <Book key={book.id}  {...book}></Book>
        })
    }
            
        </section>
    );
}

const Book = (props) => {
    const { img, title, author } = props;
    return (
        <article className='book'>
             <img src={img} alt='' />
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