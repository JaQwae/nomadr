import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import {Button} from "../Button";
import logo from '../../../src/logo.png';



class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked:!this.state.clicked })
    }



    render (){
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"> <img src = {logo} alt = ""></img> </h1>
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                   
                    <li key={index}> 
                      <a className={item.cName} href={item.url}> 
                       {item.icon}{item.title}
                      </a> 
                    </li>
                    ) 
                })}
                </ul>
                <Button>Sign Out</Button>
            </nav>
        )
    }
}
export default Navbar;