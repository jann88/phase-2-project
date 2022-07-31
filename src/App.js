import React, { useState} from 'react';
import './App.css';
import SearchForm from './components/SearchForm'
import Navbar from './components/Navbar';
import BookDetails from './components/BookDetails';
import Context from './components/Context';
import AddBook from './components/AddBook';
import Header from './components/Header';

function App() {
  const [books, setBooks] = useState([]);

  
  
  return (

    <div>
      <Navbar/>
      <SearchForm setBooks={setBooks}/>
    {/* <Home/>   */}
    <div className='body'>
      <BookDetails />
      <Context books={books} setBooks={setBooks}/>
      <AddBook/>
    </div>
    </div>
   )

}

export default App;
