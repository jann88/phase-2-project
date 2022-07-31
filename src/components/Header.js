import React from 'react';
import Navbar from './Navbar'
import "./styles/Header.css";
import SearchForm from './SearchForm';
import BookDetails from './BookDetails';

const Header = () => {
  return (
    <>
    <div className="header">

      <Navbar/>

    <div className="row1">

        <h1>A room without books is like<br/> a body without a soul.</h1>
    </div>

    <div className="row2">

        <h2>Find Your Book</h2>

        <div className="search">

          <SearchForm/>
            {/* <input type="text" placeholder="Enter Your Book Name"
            value={search} onChange={e=>setSearches(e.target.value)}
            onKeyPress={searchBook}/>
            <button><i className="fas fa-search"></i></button> */}
        </div>
        {/* <img src="./Images.jpg" alt="background-image" /> */}
    </div>
</div>

<div className="container">
  {
        <BookDetails/>
  }  
</div>
</>
)
}
    // <div className='holder'>
    //     <header className='header'>
    //         <Navbar />
    //         <div className='header-content flex flex-c text-center text-purple'>
    //             <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
    //             <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
    //             <SearchForm />
    //         </div>
    //     </header>
    // </div>

export default Header;