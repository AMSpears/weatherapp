import React from "react"
import {Link} from "react-router-dom"

const Header= () => {
    return(
        <div>
        <Link to= "/">Home</Link>
        <Link to= "/cityone">CityOne</Link>
        <Link to= "/citytwo">CityTwo</Link>
        <Link to= "/citythree">CityThree</Link>
        <Link to= "/cityfour">CityFour</Link>
        <Link to= "/cityfive">CityFive</Link>
        </div>
    )
}

export default Header 