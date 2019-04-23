import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import face from './img/face-palm.png';

const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner" style={{display: 'flex', justifyContent: 'center'}}><img style={{paddingTop: '15px'}} src={face} alt="logo"/></div>
            </Tilt>
        </div>
    )
}

export default Logo;