import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import AddBook from './components/AddBook';


function App() {
  
return (
    <div>
        <Navbar/>
          <Switch>
    <Route  exact path="/" >
          <Home/>
    </Route>
    <Route exact path="/about">
      <About/>
    </Route>
    <Route exact path="/addbook">
     <AddBook/>
    </Route>
    </Switch>
   
   </div>
    
   )

}

export default App;
