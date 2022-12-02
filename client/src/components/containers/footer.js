import React from 'react'
import Footer from '../Footer'
import Icon from '../icons'
import { useLocation, useNavigate } from 'react-router-dom';

 function FooterContainer() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <Footer>
            {/* <Footer.Wrapper> */}
            <Footer.Row>
                
                {location.pathname !== '/' && (
          <Footer.Button onClick={() => navigate (-1)}
    ><Icon className="fa-sharp fa-solid fa-arrow-left"></Icon> Go Back</Footer.Button>
        )} 
        <Footer.Title>Wanderlust <Icon className="fa-solid fa-heart"></Icon>- the Nomadr team</Footer.Title>
            </Footer.Row>
            {/* </Footer.Wrapper> */}
        </Footer>
    )
}

export default FooterContainer;
