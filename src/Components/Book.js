import React from 'react';

const Book = ({ book, onBookClick }) => {
  return (
    <div className="book" onClick={() => onBookClick(book)}>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <div className="book-details">
        {/* <h3>{book.volumeInfo.title}</h3>
        <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p> */}
      </div>
    </div>
  );
};

export default Book;