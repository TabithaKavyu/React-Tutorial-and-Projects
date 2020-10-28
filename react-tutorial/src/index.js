import React from 'react'
import ReactDom from 'react-dom'


// Nested components, React Tools
function BookList() {
    return (
        <section>
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
        <article>
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

const Author = () => <h4>Michelle  Obama</h4>;


ReactDom.render(<BookList />, document.getElementById('root'));






//JSX Rules
//return single statement
//div/ section / article or Fragment
//use camelCase for html attribute
//className instead of class
//close every element
//formatting: always use () after return