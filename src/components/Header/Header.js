import React from 'react'
import './Header.css'

const Header = () => {
  return (

    <div className="header">
    <div className="bounds">
      <a href='#'><img src='https://bold.co/assets/img/logo-white-674baccb93.png'/></a>
      <nav>

          <React.Fragment>
            <a className="head--link" href='#'>Mi negocio</a>
            <a className="head--link" href='#'>Ayuda </a>
          </React.Fragment>
        
      </nav>
    </div>
  </div>
  );
}

export default Header