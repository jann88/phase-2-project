import React, {useRef,useState} from 'react';



const SearchForm = ({ setBooks }) => {

  const searchText = useRef('');
  const [searches, setSearches] = useState('');

  const searchChange = (e)=>{
    setSearches(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://my-bookhub-backend.herokuapp.com/books")
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
          <form className='search-form' action="action_page.php" onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type = "text" className='form-control' value={searches} onChange={searchChange} placeholder='The Lost Word ...' ref = {searchText} />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SearchForm;