import React from 'react';
import {BrowerRouter as Router, Route } from "react-router-dom";
import NavbarOutline from "./Navbar/Navbar";


function App() {
    return(
        <Router> 
        <div>
            <NavbarOutline/>
        </div>
        </Router>
    )
}

export default App;