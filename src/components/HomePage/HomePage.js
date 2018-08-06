import React, {Component} from "react"

import "./HomePage.css"

const API_KEY = "d0c74e4757653dd7d26fe20813b354d8"

class HomePage extends Component {
  state = {
    weatherResults: []
  };

  componentDidMount() {
    const cities = ["New York", "Washington", "Los Angeles", "Boston", "Miami"];

    const promises = cities.map(city => {
      return fetch(`http://api.openweathermap.org/data/2.5/forecast?id=52490&units=imperial&appid=${API_KEY}&q=${city}&cnt=60`)
        .then(res => res.json());
    });

    Promise.all(promises)
      .then(weatherResults => {
        this.setState({ weatherResults });
      })
  }

  render() {
    const { weatherResults } = this.state;
    
    if (weatherResults.length === 0) {
      return null;
    }
    return (
      <div className= "weather_container" >
        {weatherResults.map(weatherResult => (
          <div className= "weather_summary" key={weatherResult.city.id}>
              <div className= "weather_initial_content">
                <h2 id= "main_title">{weatherResult.city.name}</h2>
              </div>
              <div className= "weather_main_content">
                <h3 id = "date_title">Today</h3>
                <p id= "temp">{Math.round(weatherResult.list[0].main.temp)}&#176;</p>
              </div>
              <div className= "weather_details">
                <p id= "description">{weatherResult.list[0].weather[0].description}</p>
                <img src = {`http://openweathermap.org/img/w/${weatherResult.list[0].weather[0].icon}.png`}/>
                <p> Humidity:  {weatherResult.list[0].main.humidity}%</p>
                <p>Wind: SW {Math.round(weatherResult.list[0].wind.speed)} mph</p>
              </div>
            </div>
            ))}
        </div>
    );
  }
}
    
export default HomePage