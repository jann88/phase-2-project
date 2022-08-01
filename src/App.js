import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';

function App() {
  

  
  
  return (
    <div>
    <Navbar/>
   <Switch>
   <Route path="/" >
    <Home/>
    </Route>
    <Route path="/about">
      <About/>
    </Route>
    {/* <Route  exact path="/" element={<Home/>}/>
    <Route  exact path="/about" element={<About/>}/> */}
   </Switch>
   </div>
    
   )

}

export default App;
