import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav">
            <li className="nav-item">
                <a
                    href = "#home"
                    onClick = {() => handlePageChange ('Home')}
                    className = {currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a
                    href = "#visa"
                    onClick = {() => handlePageChange ('Visa')}
                    className = {currentPage === 'Visa' ? 'nav-link active' : 'nav-link'}
                >
                    Digital Visas
                </a>
            </li>
            <li className="nav-item">
                <a 
                    href = "#Language Practice"
                    onClick = {() => handlePageChange ('Language Practice')}
                    className = {currentPage === 'Language Practice' ? 'nav-link active' : 'nav-link'}
                >
                    Language Practice
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#MySavedTrips"
                    onClick={() => handlePageChange('MySavedTrips')}
                    className={currentPage === 'MySavedTrips' ? 'nav-link active' : 'nav-link'}
                >
                    MySavedTrips
                </a>
            </li>
        </ul>
    );
}

export default NavTabs;