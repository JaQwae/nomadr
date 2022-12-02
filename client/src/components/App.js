import React from 'react';
import {BrowerRouter as Router, Route } from "react-router-dom";
import NavbarOutline from "./Navbar/Navbar";
import PlanTrip from "./PlanTrip"
import LanguagePractice from './Pages/LanguagePractice';
import Home from './Pages/Home';

function App() {
    return(
        <Router> 
        <div>
            <NavbarOutline/>
            <Route exact path="/home" component={Home} />
            <Route exact path="/languagepractice" component={LanguagePractice} />

        </div>
        </Router>
    )
}

export default App;