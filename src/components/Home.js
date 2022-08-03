import React, { useState } from 'react'
import Context from './Context';
import BookDetails from './BookDetails';
import AddBook from './AddBook';
import SearchForm from './SearchForm';
import Navbar from './Navbar';




function Home() {
  const [books, setBooks] = useState([]);
  return (
    <div>
      
      <SearchForm setBooks={setBooks}/>
        <BookDetails/>
        <Context setBooks={setBooks}
        books={books}/>
        
    </div>
  )
}

export default Home;