import React, { useState } from 'react';
import NavTabs from './NewNavTabs';
import Home from '../Pages/Home';
import Plan from '../Pages/MySavedTrips'
import Visa from '../Pages/NomadVisas';
import LanguagePractice from '../Pages/Language Practice';
// import Footer from '../containers/footer';

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
        return <Plan />;
    };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <div>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>
            <div>
                {/* <FooterContainer /> */}
            </div>
        </div>
    );
}