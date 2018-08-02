import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Header from "../Header/Header"
import HomePage from "../HomePage/HomePage"
import CityOne from "../CityOne/CityOne"
import CityTwo from "../CityTwo/CityTwo"
import CityThree from "../CityThree/CityThree"
import CityFour from "../CityFour/CityFour"
import CityFive from "../CityFive/CityFive"


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <nav>
          <Header/>
          </nav>
          <main>
          <Switch>
          <Route
            exact path= "/"
            render= {(props) => (
              <HomePage {... props}
                setDetails = { (data) => this.setDetails(data)}
              />
            )}
          />
          <Route
            path = '/cityone'
            render = {(props) => ( 
              <CityOne { ...props }
                setDetails = { (data) => this.setDetails(data) }
              />
           )}
         />
         <Route 
            path="/citytwo"
            render= {(props) => (
              <CityTwo {...props}
               setDetails = { (data) => this.setDetails(data)}
              />
          )}
        />
        <Route
          path="/citythree"
          render= {(props) => (
            <CityThree {...props}
              setDetails  = { (data) => this.setDetails(data)}  
            />
         )}
        />
        <Route
          path= "/cityfour"
          render= {(props) => (
           <CityFour
             setDetails = { (data) => this.setDetails(data)}
            />
          )}
        />
        <Route
          path= "/cityfive"
          render={(props) => (
            <CityFive
             setDetails = { (data) => this.setDetails(data)}
            />
          )}
        />
        <Route
          path= "/*"
          render= {() => (
            <Redirect to= "/"/>
          )}
        />
          </Switch>
          </main>
      </div>
      </Router>
    );
  }
}

export default App;
