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
        <Route path= "/cityone" component ={CityOne}/>
        <Route path = "/citytwo" component = {CityTwo}/>
        <Route path = "/citythree" component = { CityThree} />
        <Route path = "/cityfour" component = {CityFour}/>
        <Route path = "/cityfive" component = {CityFive}
        />
        </Switch>
    </Routing>
)

export default Router