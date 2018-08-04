import React, { Component } from "react"
import "./CityOne.css"
import Header from "../Header/Header"
const API_KEY = "d0c74e4757653dd7d26fe20813b354d8"

class CityOne extends Component {
    state = {
        weatherResults: []
    };

    componentDidMount() {
        const cities = "New York"
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
        const {
            weatherResults
        } = this.state;
        return ( 
            <div> 
            <Header/>
            { this.state.weatherResults.length !== 0 &&
            <div className = "container" key = { weatherResults.city.id } >
                <h2> { weatherResults.city.name }</h2> 
                    <h3>Today</h3>
                        <table>
                            <tr>
                                <th>Date/Time</th>
                                <th>Description</th>
                                <th> Temperature</th>
                                <th>Pressure</th>
                                <th> Humidity</th>
                                <th> Wind </th>
                            </tr>
                            <tr>
                                <td>{weatherResults.list[0].dt_txt}</td>
                                <td>{weatherResults.list[0].weather[0].description}</td>
                                <td>{weatherResults.list[0].main.temp} </td>
                                <td>{weatherResults.list[0].main.pressure}</td>
                                <td>{weatherResults.list[0].main.humidity}</td>
                                <td> {weatherResults.list[0].wind.speed}</td>
                            </tr> 
                            <tr>
                                <td>{weatherResults.list[1].dt_txt}</td>
                                <td>{weatherResults.list[1].weather[0].description}</td>
                                <td>{weatherResults.list[1].main.temp} </td>
                                <td>{weatherResults.list[1].main.pressure}</td>
                                <td>{weatherResults.list[1].main.humidity}</td>
                                <td> {weatherResults.list[1].wind.speed}</td>
                            </tr>
                            <tr>
                                <td>{weatherResults.list[2].dt_txt}</td>
                                <td>{weatherResults.list[2].weather[0].description}</td>
                                <td>{weatherResults.list[2].main.temp} </td>
                                <td>{weatherResults.list[2].main.pressure}</td>
                                <td>{weatherResults.list[2].main.humidity}</td>
                                <td> {weatherResults.list[2].wind.speed}</td>
                            </tr>
                            <tr>
                                <td>{weatherResults.list[3].dt_txt}</td>
                                <td>{weatherResults.list[3].weather[0].description}</td>
                                <td>{weatherResults.list[3].main.temp} </td>
                                <td>{weatherResults.list[3].main.pressure}</td>
                                <td>{weatherResults.list[3].main.humidity}</td>
                                <td> {weatherResults.list[3].wind.speed}</td>
                            </tr>
                            <tr>
                                <td>{weatherResults.list[4].dt_txt}</td>
                                <td>{weatherResults.list[4].weather[0].description}</td>
                                <td>{weatherResults.list[4].main.temp} </td>
                                <td>{weatherResults.list[4].main.pressure}</td>
                                <td>{weatherResults.list[4].main.humidity}</td>
                                <td> {weatherResults.list[4].wind.speed}</td>
                             </tr>
                             <tr>
                                <td>{weatherResults.list[5].dt_txt}</td>
                                <td>{weatherResults.list[5].weather[0].description}</td>
                                <td>{weatherResults.list[5].main.temp} </td>
                                <td>{weatherResults.list[5].main.pressure}</td>
                                <td>{weatherResults.list[5].main.humidity}</td>
                                <td> {weatherResults.list[5].wind.speed}</td>
                            </tr>
                        </table>
                        
                    <h3>Week overview</h3>
                        <div className ="week_container">
                            <div className= "days_container">
                                <h4> Date/Time <br/> {weatherResults.list[6].dt_txt} </h4>
                                    <tr>
                                        <p>{weatherResults.list[6].weather[0].description}</p>
                                        <p>{weatherResults.list[6].main.temp} </p>
                                        <p>{weatherResults.list[6].main.pressure}</p>
                                        <p>{weatherResults.list[6].main.humidity}</p>
                                        <p> {weatherResults.list[6].wind.speed}</p>
                                  </tr>
                            </div>
                            <div className= "days_container">
                                <h4> Date/Time <br/> {weatherResults.list[14].dt_txt} </h4>
                                    <tr>
                                        <p>{weatherResults.list[14].weather[0].description}</p>
                                        <p>{weatherResults.list[14].main.temp} </p>
                                        <p>{weatherResults.list[14].main.pressure}</p>
                                        <p>{weatherResults.list[14].main.humidity}</p>
                                        <p> {weatherResults.list[14].wind.speed}</p>
                                    </tr>
                            </div>
                            <div className= "days_container">
                                <h4> Date/Time <br/> {weatherResults.list[22].dt_txt} </h4>
                                    <tr>
                                        <p>{weatherResults.list[22].weather[0].description}</p>
                                        <p>{weatherResults.list[22].main.temp} </p>
                                        <p>{weatherResults.list[22].main.pressure}</p>
                                        <p>{weatherResults.list[22].main.humidity}</p>
                                        <p> {weatherResults.list[22].wind.speed}</p>
                                    </tr>
                            </div>
                            <div className= "days_container">
                                <h4> Date/Time <br/> {weatherResults.list[30].dt_txt} </h4>
                                    <tr>
                                        <p>{weatherResults.list[30].weather[0].description}</p>
                                        <p>{weatherResults.list[30].main.temp} </p>
                                        <p>{weatherResults.list[30].main.pressure}</p>
                                        <p>{weatherResults.list[30].main.humidity}</p>
                                        <p> {weatherResults.list[30].wind.speed}</p>
                                    </tr>
                            </div> 
                       </div>
                </div> 
              }
         </div>
        );
    }
}


export default CityOne