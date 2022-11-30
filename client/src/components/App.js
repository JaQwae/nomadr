import React from 'react';
import {BrowerRouter as Router, Route } from "react-router-dom";
import NavbarOutline from "./Navbar/Navbar";
import PlanTrip from "./PlanTrip"

function App() {
    return(
        <Router> 
        <div>
            <NavbarOutline/>
            <Route exact path="/home" component={PlanTrip} />
        </div>
        </Router>
    )
}

export default App;