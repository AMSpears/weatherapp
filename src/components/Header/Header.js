import React from "react"

import "./Header.css"

const Header= () => {
    return(
    <div className= "tabs_container">
        <div className= "tabs">
            <a id= "logo" href= "/"> My Weather</a>
            <a href= "/">Home</a>
            <a href= "/cityone">New York</a>
            <a href= "/citytwo">Washington </a>
            <a href= "/citythree">Los Angeles</a>
            <a href= "/cityfour">Boston</a>
            <a href= "/cityfive">Miami</a>
        </div>
    </div>
    )
}

export default Header 