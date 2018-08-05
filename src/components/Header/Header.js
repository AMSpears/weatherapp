import React from "react"

import "./Header.css"

const Header= () => {
    return(
    <div className= "tabs_container">
        <div className= "tabs">
            <a id= "logo" href= "/"> My Weather</a>
            <a href= "/">Home</a>
            <a href= "http://my-weather-personalized.surge.sh/cityone">New York</a>
            <a href= "http://my-weather-personalized.surge.sh/citytwo">Washington </a>
            <a href= "http://my-weather-personalized.surge.sh/citythree">Los Angeles</a>
            <a href= "http:/my-weather-personalized.surge.sh/cityfour">Boston</a>
            <a href= "http://my-weather-personalized.surge.sh/cityfive">Miami</a>
        </div>
    </div>
    )
}

export default Header 