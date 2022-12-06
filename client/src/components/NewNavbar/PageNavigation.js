import React, { useState } from 'react';
import NavTabs from './NewNavTabs';
import Home from '../Pages/Home';
import Resources from '../Pages/Resources'
import Visa from '../Pages/NomadVisas';
import LanguagePractice from '../Pages/Language Practice';
import "../NewNavbar/NewNav.css"
import FooterContainer from '../containers/footer';

export default function PageNavigation () {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Visa') {
            return <Visa />;
        }
        if (currentPage === 'Language Practice') {
            return <LanguagePractice />;
        }
        return <Resources />;
    };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <div>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>
            <div>
                <FooterContainer />
            </div>
        </div>
    );
}