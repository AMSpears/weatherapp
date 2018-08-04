import React from "react"

import {Link} from "react-router-dom"
import "./Header.css"

const Header= () => {
    return(
        <div className= "container">
        <div className= "tabs">

        <Link to= "/">Home</Link>
        <Link to= "/cityone">New York</Link>
        <Link to= "/citytwo">Washington </Link>
        <Link to= "/citythree">Los Angeles</Link>
        <Link to= "/cityfour">Boston</Link>
        <Link to= "/cityfive">Houston</Link>
        </div>
        </div>
    )
}

export default Header 