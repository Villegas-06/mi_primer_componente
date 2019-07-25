import React from 'react';
import Logo from '../images/logo-ag-min.png';
import '../styles/NavBarStyle.css';

class NavBar extends React.Component {
    
    render() { 
        return ( 
            <div className="Navbar">
              <div className="container-fluid">
                   <a className="Navbar__brand" href="/">
                       <img className="Navbar__brand-logo" src={Logo} alt="logo"/>
                       <h4 className="font-weigth-light">Coferencia</h4>
                       <h4 className="font-weight-bold"> Geek</h4>
                   </a>
              </div>
          </div>
         );
    }
}
 
export default NavBar;