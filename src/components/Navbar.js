import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import Header from './Header';
import About from './About';
import Home from './Home';
import AddBook from './AddBook';


function    Navbar() {

  return(
    
    // <nav className="navbar m bg-light justify-content-center">
    <nav className="navbar navbar-expand-sm bg-light navbar-dark">
      <div className='container fluid'>
      <div className='navbar'>
        <Header/>
        <div className='links'>
        <Link to='/' element={<Home/>}>Home</Link>
  
   
        <Link to='/about' element={<About/>}>About</Link>
  
    
        <Link to='/addbook' element={<AddBook/>}>AddBook</Link>

        </div>
        </div>
  </div>
</nav>
)
}
export default Navbar;