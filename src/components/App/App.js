import React, { Component } from 'react';

import Header from "../Header/Header"
import HomePage from "../HomePage/HomePage"
import CityOne from "../CityOne/CityOne"

class App extends Component {

 
  render() {
    return (
      <div className="App">
          <Header/>
          <HomePage/>
      </div>
   
    );
  }
}

export default App;
