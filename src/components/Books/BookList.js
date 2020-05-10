import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";

const BookList = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const booksAPI = await axios.get(
          "https://express-book-codersx-2020.herokuapp.com/api/books"
        );
        setBookList(booksAPI.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  async function handleFilterBookList(text) {
    const filterBookList = await axios.get(
      `https://express-book-codersx-2020.herokuapp.com/api/books/search?q=${text}`
    );
    setBookList(filterBookList.data);
    // console.log(text);
  }
  return <Book bookList={bookList} filterBookList={handleFilterBookList} />;
};

export default BookList;
