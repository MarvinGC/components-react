import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-log">
                <p><a href="#home">Título de la página</a></p>
            </div>
            <div className="navbar-menu">
                <p><a href="#home"     > inicio      </a></p>
                <p><a href="#portfolio"> portfolio  </a></p>
                <p><a href="#contact"  > contacto    </a></p>
                <p><a href="#about"    > aserca de   </a></p>
                <p><a href="#settings" > configuraciones   </a></p>
            </div>
        </div>
    );
};

export default Navbar;