import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Cart from './component/Cart'
import './App.css';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;