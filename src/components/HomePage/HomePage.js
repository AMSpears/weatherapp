import React, {Component} from "react"

const API_KEY = "d0c74e4757653dd7d26fe20813b354d8"

class HomePage extends Component {
    state = {
        weatherResults: []
    };
    
    componentDidMount() {
        const cities = ["Boston", "New York"]
        fetch(`http://api.openweathermap.org/data/2.5/forecast?id=52490&units=imperial&appid=${API_KEY}&q=${cities}&cnt=60`)
            .then(res => res.json())
            .then(results => {
                this.setState({
                    weatherResults: results
                });
                console.log(results)
            })
            .catch(error => console.error(error));
    }

    render() {
        const { weatherResults
        } = this.state;
        return (
            <div>
             { 
             this.state.weatherResults.length !== 0 &&
                    <div className = "container" key={weatherResults.city.id} >
                    <h2> { weatherResults.city.name}  </h2> 
                    <p> {weatherResults.list[0].main.temp} </p>
                    <p> {weatherResults.list[0].weather[0].description} </p>
                    <p> Humidity: {weatherResults.list[0].main.humidity} </p>
                    <p> Wind: {weatherResults.list[0].wind.speed} </p>
                </div>
             }
            </div>
        );
    }
}

export default HomePage