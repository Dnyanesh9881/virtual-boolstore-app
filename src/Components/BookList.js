import React from 'react';
import Book from './Book';

const BookList = ({ books, onBookClick }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book key={book.id} book={book} onBookClick={onBookClick} />
      ))}
    </div>
  );
};

export default BookList;
