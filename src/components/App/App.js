import React, { Component } from 'react';

import Header from "../Header/Header"
import HomePage from "../HomePage/HomePage"


class App extends Component {

 
  render() {
    return (

      <div className="App">
          <nav>
            <Header/>
            <h1>Weather App</h1>
          </nav>
          <main>
          <HomePage/>
          </main>
      </div>
   
    );
  }
}

export default App;
