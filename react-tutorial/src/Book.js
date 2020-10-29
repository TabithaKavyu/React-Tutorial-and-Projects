import React from 'react'

const Book = (props) => {
    const { img, title, author } = props;
    const clickHandler = (e) => {
        console.log(e.target);
        console.log(e);
        alert('hello world');
    }
    const complexExample = (author) => {
        console.log(author);
    }
    
    return (
        <article className='book' onMouseOver={() => {
            console.log(title);
        }}>
             <img src={img} alt='' />
            <h1>{title}</h1>
            <h4 >{author}</h4>
            <button type="button" onClick={clickHandler} > View Here</button>
            <button type="button" onClick={() => complexExample(author)} > More Complex Examples</button>
            
            
        </article>
    );
};




export default Book
