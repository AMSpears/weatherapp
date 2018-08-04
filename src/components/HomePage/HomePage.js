import React, {Component} from "react"

const API_KEY = "d0c74e4757653dd7d26fe20813b354d8"

class HomePage extends Component {
  state = {
    weatherResults: []
  };

  componentDidMount() {
    const cities = ["New York", "Washington", "Los Angeles", "Boston", "Houston"];

    const promises = cities.map(city => {
      return fetch(`http://api.openweathermap.org/data/2.5/forecast?id=52490&units=imperial&appid=${API_KEY}&q=${city}&cnt=60`)
        .then(res => res.json());
    });

    Promise.all(promises)
      .then(weatherResults => {
        this.setState({ weatherResults });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { weatherResults } = this.state;

    if (weatherResults.length === 0) {
      return null;
    }

    return (
      <div className="container">
        {weatherResults.map(weatherResult => (
          <div key={weatherResult.city.id}>
            <h2>{weatherResult.city.name}</h2>
            <p>{weatherResult.list[0].main.temp}</p>
            <p>{weatherResult.list[0].weather[0].description}</p>
            <p>Humidity: {weatherResult.list[0].main.humidity}</p>
            <p>Wind: {weatherResult.list[0].wind.speed}</p>
          </div>
        ))}
      </div>
    );
  }
}
    
export default HomePage