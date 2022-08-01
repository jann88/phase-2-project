import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import Header from './Header';
import About from './About';
import Home from './Home';


function    Navbar() {
const NavLinks = [
  {
    display:'Home',
    url: '#home'
  },
  {
    display:'About',
    url:'#About'
  }
]
return(
  <header className='header'>

  <div className='navigation d-flex align-items-center justify-content-between'>
<div className='title'>
  <h2>BOOK HUB</h2>
</div>
<div>
 
        
        <Link to='/' element={<Home/>}>Home</Link>
        <Link to='/about' element={<About/>}>About</Link>
       

</div>
{/* <div className='nav_right d-flex align-items-center gap-'>
  <button className='btn'>
    <span className='mobile-menu'>
      <i className="ri-menu-5-line"></i>
    </span>
  </button> */}
</div>
  

  </header>
)
}

export default Navbar;
