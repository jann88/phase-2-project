import React, {useRef,useState} from 'react';
import {FaSearch} from "react-icons/fa";
import "./styles/SearchForm.css";

const SearchForm = ({ setBooks }) => {

  const searchText = useRef('');
  const [searches, setSearches] = useState('');

  const searchChange = (e)=>{
    setSearches(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/books")
      .then((response) => response.json())
      .then((data) =>{
        if(data){
          setBooks(data.filter(item=> item.title.toLowerCase().includes(searches)))
        
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type = "text" className='form-control' value={searches} onChange={searchChange} placeholder='The Lost Word ...' ref = {searchText} />
              <button type = "submit" className='flex flex-c' onClick={handleSubmit}>
                <FaSearch className='text-purple' size = {25} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SearchForm;