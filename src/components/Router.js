import React from 'react'
import {
    BrowserRouter as Routing,
    Route,
    Switch
} from "react-router-dom"

import CityOne from "./CityOne/CityOne"
import CityTwo from "./CityTwo/CityTwo"
import CityThree from "./CityThree/CityThree"
import CityFour from "./CityFour/CityFour"
import CityFive from "./CityFive/CityFive"
import App from "./App/App"


const Router = () => (
    <Routing>
        <Switch>
        <Route path= "/" component= {App} exact/>
        <Route path= "http://my-weather-personalized.surge.sh/cityone" component ={CityOne}/>
        <Route path = "http://my-weather-personalized.surge.sh/citytwo" component = {CityTwo}/>
        <Route path = "http://my-weather-personalized.surge.sh/citythree" component = { CityThree} />
        <Route path = "http://my-weather-personalized.surge.sh/cityfour" component = {CityFour}/>
        <Route path = "http://my-weather-personalized.surge.sh/cityfive" component = {CityFive}
        />
        </Switch>
    </Routing>
)

export default Router