import React from 'react';
import logo from '../../../src/logo.png';
import {Button} from "../Button"
import Icon from '../icons'
import Mobile from "./Mobile"

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo"> <img src = {logo} alt = ""></img> </h1>
            
            {/* <Mobile /> */}

        <ul className='nav-menu active  nav-menu'>
            <li className="nav-links">
                <a 
                    href = "#home"
                    onClick = {() => handlePageChange ('Home')}
                    className = {currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                > <Icon className="fa-solid fa-house"></Icon>
                    Home
                </a>
            </li>
            <li className="nav-links">
                <a
                    href = "#visa"
                    onClick = {() => handlePageChange ('Visa')}
                    className = {currentPage === 'Visa' ? 'nav-link active' : 'nav-link'}
                > <Icon className="fa-solid fa-passport"></Icon>
                    Digital Visas
                </a>
            </li>
            <li className="nav-links">
                <a 
                    href = "#Language Practice"
                    onClick = {() => handlePageChange ('Language Practice')}
                    className = {currentPage === 'Language Practice' ? 'nav-link active' : 'nav-link'}
                > <Icon className="fa-solid fa-language"></Icon>
                    Language Practice
                </a>
            </li>
            <li className="nav-links">
                <a
                    href="#MySavedTrips"
                    onClick={() => handlePageChange('MySavedTrips')}
                    className={currentPage === 'MySavedTrips' ? 'nav-link active' : 'nav-link'}
                > <Icon className="fa-solid fa-person-walking-luggage"></Icon>
                    MySavedTrips
                </a>
            </li>
        </ul>
        <Button
        href="#SignOut"
        onClick={() => handlePageChange('SignOut')}
        className={currentPage === 'SignOut' ? 'nav-link active' : 'nav-links-mobile'}
        >Sign Out</Button>
        </nav>
    );
}

export default NavTabs;