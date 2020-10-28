import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const firstBook = {
    title :'Becoming: A Guided Journal for Discovering Your Voice',
    author : 'Michelle Obama',
    img : "https://m.media-amazon.com/images/I/81bFNmhKrTL._AC_UY218_.jpg"

}

const secondBook = {
    title:'Conversations with RBG: Ruth Bader Ginsburg on Life, Love, Liberty, and Law',
    author : 'Jeffery Rosen',
    img : "https://images-na.ssl-images-amazon.com/images/I/412IXS1qNJL._SX329_BO1,204,203,200_.jpg"

}


function BookList() {
    return (
        <section className ='booklist'> 
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />

            <Book  img={secondBook.img} title={secondBook.title} author={secondBook.author} />
            
            
        </section>
    );
}

const Book = ({ img, title, author }) => {
    //const { img, title, author } = props;
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