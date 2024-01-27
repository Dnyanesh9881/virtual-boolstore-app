
import React, { useEffect, useState } from 'react';
import BookList from './Components/BookList';
import BookDetail from './Components/BookDetail';
import SearchBar from './Components/SearchBar';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchBooksData = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      return data.items || [];
    } catch (error) {
      console.error(`Error fetching ${query} books:`, error);
      return [];
    }
  };

  useEffect(() => {
    

    const fetchAllBooks = async () => {
      const harryPotterBooks = await fetchBooksData('harry+potter');
      const sherlockHolmesBooks = await fetchBooksData('sherlock+holmes');
      const allBooks = [...harryPotterBooks, ...sherlockHolmesBooks];
      setBooks(allBooks);
    };

    fetchAllBooks();
  }, []);


  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleSearch = async (query) => {
    const searchResults = await fetchBooksData(query);
    setBooks(searchResults);
  };

  const closeBookDetail = () => {
    setSelectedBook(null);
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      {selectedBook ? (
        <BookDetail book={selectedBook} onClose={closeBookDetail} />
      ) : (
        <BookList books={books} onBookClick={handleBookClick} />
      )}
    </div>
  );
};

export default App;

