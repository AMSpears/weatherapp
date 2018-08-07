import React from "react"

import "./Header.css"

const Header= () => {
    return(
        <div className = "scrollNavs">
            <a id= "logo" href= "/"> My Weather</a>
            <a href= "/" id= "home">Home</a>
            <a href= "/cityone" id= "cityone">New York</a>
            <a href= "/citytwo" id= "citytwo">Washington </a>
            <a href= "/citythree" id= "citythree">Los Angeles</a>
            <a href= "/cityfour" id= "cityfour">Boston</a>
            <a href= "/cityfive" id= "cityfive">Miami</a>
        </div>
    )
}

export default Header 