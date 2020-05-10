import React from 'react';
import Book from './components/Books/Book';
import "bootstrap/dist/css/bootstrap.min.css";


export default { title: 'Book' };
const books = [
    {
        title: "HTML",
        description: "HTML"
    }
]
export const book = () => (
  <Book bookList={books}/>
);