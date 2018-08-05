import React, { Component } from "react"

import "./CityOne.css"
import Header from "../Header/Header"

const API_KEY = "d0c74e4757653dd7d26fe20813b354d8"
const dateFormat = require('dateformat');
const now = new Date();

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
            <nav>
                <Header/>
            </nav>
            { this.state.weatherResults.length !== 0 &&
            <div className = "container" key = { weatherResults.city.id } >
                <h1>{ weatherResults.city.name } /  {Math.round(weatherResults.list[0].main.temp)}&#176;</h1> 
                    <div className= "cities_weather_container">
                        <div className= "cities_weather_summary">
                             <h3>Today / {dateFormat(now, "h:ss TT")}</h3>
                                <p id= "description">{weatherResults.list[0].weather[0].description}</p>
                                <p id= "temp"> {Math.round(weatherResults.list[0].main.temp)}&#176;</p>
                                <div className = "weather_details">
                                <p>Min: {Math.round(weatherResults.list[0].main.temp_min)}&#176;</p>
                                <p >Max: {Math.round(weatherResults.list[0].main.temp_max)}&#176;</p>
                                <p>Humidity: {weatherResults.list[0].main.humidity}%</p>
                                <p> SW {Math.round(weatherResults.list[0].wind.speed)} mph</p>
                            </div>
                        </div>
                         <div className = "cities_weather_summary">
                            <table>
                                <h3>Hourly</h3>
                                <tr>
                                    <th>Time</th>
                                    <th>Description</th>
                                    <th> Temperature</th>
                                    <th> Min/Max</th>
                                    <th> Humidity</th>
                                    <th> Wind </th>
                                </tr>
                                <tr>
                                    <td> {dateFormat(weatherResults.list[1].dt_txt, "h TT")} </td>
                                    <td>{weatherResults.list[1].weather[0].description}</td>
                                    <td>{Math.round(weatherResults.list[1].main.temp)}&#176;</td>
                                    <td>{Math.round(weatherResults.list[1].main.temp_min)}&#176; / 
                                        {Math.round(weatherResults.list[1].main.temp_max)}&#176;</td>
                                    <td>{weatherResults.list[1].main.humidity}%</td>
                                    <td> SW {Math.round(weatherResults.list[1].wind.speed)} mph</td>
                                </tr>
                                <tr>
                                    <td>{dateFormat(weatherResults.list[2].dt_txt, "h TT")}</td>
                                    <td>{weatherResults.list[2].weather[0].description}</td>
                                    <td>{Math.round(weatherResults.list[2].main.temp)}&#176;</td>
                                    <td>{Math.round(weatherResults.list[2].main.temp_min)}&#176; / 
                                        {Math.round(weatherResults.list[2].main.temp_max)}&#176;</td>
                                    <td>{weatherResults.list[2].main.humidity}%</td>
                                    <td> SW {Math.round(weatherResults.list[2].wind.speed)} mph</td>
                                </tr>
                                <tr>
                                    <td>{dateFormat(weatherResults.list[3].dt_txt,"h TT")}</td>
                                    <td>{weatherResults.list[3].weather[0].description}</td>
                                    <td>{Math.round(weatherResults.list[3].main.temp)}&#176;</td>
                                    <td>{Math.round(weatherResults.list[3].main.temp_min)}&#176; / 
                                        {Math.round(weatherResults.list[3].main.temp_max)}&#176;</td> 
                                    <td>{weatherResults.list[3].main.humidity}%</td>
                                    <td> SW {Math.round(weatherResults.list[3].wind.speed)} mph</td>
                                </tr>
                                <tr>
                                    <td>{dateFormat(weatherResults.list[4].dt_txt,"h TT")}</td>
                                    <td>{weatherResults.list[4].weather[0].description}</td>
                                    <td>{Math.round(weatherResults.list[4].main.temp)}&#176;</td>
                                    <td>{Math.round(weatherResults.list[4].main.temp_min)}&#176; / 
                                        {Math.round(weatherResults.list[4].main.temp_max)}&#176;</td>
                                    <td>{weatherResults.list[4].main.humidity}%</td>
                                    <td> SW {Math.round(weatherResults.list[4].wind.speed)} mph</td>
                                </tr>
                                <tr>
                                    <td>{dateFormat(weatherResults.list[5].dt_txt,"h TT")}</td>
                                    <td>{weatherResults.list[5].weather[0].description}</td>
                                    <td>{Math.round(weatherResults.list[5].main.temp)}&#176;</td>
                                    <td>{Math.round(weatherResults.list[5].main.temp_min)}&#176;/             
                                        {Math.round(weatherResults.list[5].main.temp_max)}&#176;</td>
                                    <td>{weatherResults.list[5].main.humidity}%</td>
                                    <td> SW {Math.round(weatherResults.list[5].wind.speed)} mph</td>
                                </tr>
                            </table>
                         </div>
                    </div>     

                    <h3>Week Overview</h3>
                    <div className ="week_container">
                        <div className= "days_container">
                            <h4 id = "weekday_header">Tomorrow,<br/>
                                {dateFormat(weatherResults.list[6].dt_txt,"dddd, mmmm dS")} 
                            </h4>
                            <div className= "weather_details">
                                <p id = "temp" >{Math.round(weatherResults.list[6].main.temp)}&#176;</p>
                                <p id = "description">{weatherResults.list[6].weather[0].description}</p>
                                <p>Min: {Math.round(weatherResults.list[6].main.temp_min)}&#176;</p> 
                                <p>Max: {Math.round(weatherResults.list[6].main.temp_max)}&#176;</p>
                                <p>Humidity: {weatherResults.list[6].main.humidity}%</p>
                                <p> SW {Math.round(weatherResults.list[6].wind.speed)} mph</p>
                            </div>
                            </div>
                            <div className= "days_container">
                                <h4 id= "weekday_header">
                                    {dateFormat(weatherResults.list[14].dt_txt,"dddd")},<br/>
                                    {dateFormat(weatherResults.list[14].dt_txt,"mmmm dS")}
                                 </h4>
                                 <p id= "temp">{Math.round(weatherResults.list[14].main.temp)}&#176;</p>
                                <div className= "weather_details">
                                    <p id= "description"> {weatherResults.list[14].weather[0].description}</p>
                                    <p>Min: {Math.round(weatherResults.list[14].main.temp_min)}&#176; </p>
                                    <p>Max: {Math.round(weatherResults.list[14].main.temp_max)}&#176;</p>
                                    <p>Humidity: {weatherResults.list[14].main.humidity}%</p>
                                    <p> SW {Math.round(weatherResults.list[14].wind.speed)} mph</p>
                                </div>
                            </div>
                            <div className= "days_container">
                                    <h4 id= "weekday_header">
                                    {dateFormat(weatherResults.list[22].dt_txt,"dddd")},<br/>
                                    {dateFormat(weatherResults.list[22].dt_txt,"mmmm dS")}
                                    </h4>
                                    <p id = "temp">{Math.round(weatherResults.list[22].main.temp)}&#176;</p>
                                <div className= "weather_details">
                                    <p id= "description">{weatherResults.list[22].weather[0].description}</p>
                                    <p>Min: {Math.round(weatherResults.list[22].main.temp_min)}&#176;</p> 
                                    <p>Max: {Math.round(weatherResults.list[22].main.temp_max)}&#176;</p>
                                    <p>Humidity: {weatherResults.list[22].main.humidity}%</p>
                                    <p> SW {Math.round(weatherResults.list[22].wind.speed)} mph</p>
                                </div>
                            </div>
                            <div className= "days_container">
                                    <h4 id= "weekday_header">
                                    {dateFormat(weatherResults.list[30].dt_txt,"dddd")},<br/>
                                    {dateFormat(weatherResults.list[30].dt_txt,"mmmm dS")}
                                    </h4>                                    
                                    <p id= "temp" >{Math.round(weatherResults.list[30].main.temp)}&#176;</p>
                                 <div className= "weather_details">
                                    <p id= "description">{weatherResults.list[30].weather[0].description}</p>
                                    <p>Min: {Math.round(weatherResults.list[30].main.temp_min)}&#176;</p> 
                                    <p>Max: {Math.round(weatherResults.list[30].main.temp_max)}&#176;</p>
                                    <p>Humidity: {weatherResults.list[30].main.humidity}%</p>
                                    <p> SW {Math.round(weatherResults.list[30].wind.speed)} mph</p>
                                </div>
                             </div> 
                         </div>
                     </div> 
                    }
                </div>
            );
        }
    }


export default CityOne