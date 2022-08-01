import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import Header from './Header';
import About from './About';


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
<div className='nav_menu'>
  <ul className='nav_list'>
    {NavLinks.map((item,index)=> (
      <li className='nav_item' key={index}>
        <a href={item.ur}>{item.display}</a>
        <Link to="/" className='Home' element={<Header/>}/>
        <Link to="/about" className='About' element={<About/>}/>
      </li>
    ))}
  </ul>

</div>
<div className='nav_right d-flex align-items-center gap-'>
  <button className='btn'>
    <span className='mobile-menu'>
      <i className="ri-menu-5-line"></i>
    </span>
  </button>
</div>
  </div>

  </header>
)
}

export default Navbar;
