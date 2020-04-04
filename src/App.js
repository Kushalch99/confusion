import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import MenuComponent from './components/MenuComponent';

class App extends Component{
  render(){
    return (
    <div >
      <Navbar dark color="secondary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con fusion</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent />
    </div>
  );
  }
}

export default App;
