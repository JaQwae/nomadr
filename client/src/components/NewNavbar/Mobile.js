import React, { Component } from 'react';
import './NewNav.css';

class Mobile extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked:!this.state.clicked })
    }



    render() {
        return (
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
        )
              
}
}
export default Mobile;