import React from 'react'
import Footer from '../Footer'
import Icon from '../icons'


 function FooterContainer() {
    return (
        <Footer>
            
            {/* <Footer.Wrapper> */}
            <Footer.Row>
            
        <Footer.Title>Wanderlust <Icon className="fa-solid fa-heart"></Icon>- the Nomadr team</Footer.Title>
            </Footer.Row>
            {/* </Footer.Wrapper> */}
        </Footer>
    )
}

export default FooterContainer;
