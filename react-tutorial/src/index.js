import React from 'react'
import ReactDom from 'react-dom'


//CSS
import './index.css'
function BookList() {
    return (
        <section className ='booklist'> 
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            
        </section>
    );
}

const Book = () => {
    return (
        <article className='book'>
            <Image></Image>
            <Title />
            <Author />
        </article>
    );
};

const Image = () => (
    <img src="https://m.media-amazon.com/images/I/81bFNmhKrTL._AC_UY218_.jpg" alt="Michelle Obama" />
);

const Title = () => <h1>Becoming: A Guided Journal for Discovering Your Voice</h1>;

const Author = () => <h4 style={{color:'#617d98',fontSize: '0.75rem', marginTop:'0.25rem' }}>Michelle  Obama</h4>;


ReactDom.render(<BookList />, document.getElementById('root'));






//JSX Rules
//return single statement
//div/ section / article or Fragment
//use camelCase for html attribute
//className instead of class
//close every element
//formatting: always use () after return