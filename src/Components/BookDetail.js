
import React from 'react';

const BookDetail = ({ book, onClose }) => {
  return (
    <div className="book-detail">
      <div className="book-detail-content">
       
        <div><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} /></div>
        
        <div>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <h2>{book.volumeInfo.title}</h2>
        <p>{book.volumeInfo.description}</p>
        <div className="details">
          <p><strong>Author:</strong> {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
          <p><strong>Published Date:</strong> {book.volumeInfo.publishedDate}</p>
          <p><strong>Average Rating:</strong> {book.volumeInfo.averageRating || 'N/A'}</p>
          <p><strong>Rating Count:</strong> {book.volumeInfo.ratingsCount || 'N/A'}</p>
          <p><strong>Publisher:</strong> {book.volumeInfo.publisher || 'N/A'}</p>
          <p><strong>Language:</strong> {book.volumeInfo.language || 'N/A'}</p>
        </div>
        <div className="actions">
          <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
            Read Now
          </a>
          <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
            More Info
          </a>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

