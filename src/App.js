import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {ConfigureStore} from './Redux/configureStore'
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
const store = ConfigureStore();

class App extends Component{
 
  render(){
    return (
    <Provider store={store}>
      <BrowserRouter>
        <div >
          <MainComponent />
        </div>
      </BrowserRouter>
    </Provider>
  );
  }
}

export default App;
