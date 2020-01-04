import 'bootstrap/dist/css/bootstrap.min.css'
import React,{Component} from 'react';
import {render} from 'react-dom';

let bookList =[
    {"title":"one","author":"onea", "pages":320 },
    {"title":"two","author":"twoa", "pages":32 }
]

const Book=({title,author,pages})=>{
    return (
        <section>
    <h3>{title}</h3>
    <p>{author}</p>
    <p>{pages}</p>
        </section>
    )
}

const Library = ({books}) => {
return(
    <section>
        {
        books.map(
            (book,i)=>
            
        <Book title={book.title} author={book.author} pages={book.pages} />  
             )
        }
    
    </section>
)
}

var root=document.getElementById('root');
render(<Library books={bookList} />, root)