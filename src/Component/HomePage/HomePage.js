import React from 'react';
import logo from './logo.png';
import logo2 from './impo.jpg'
import './HomePage.css';
import { NavLink, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate =useNavigate();
  return (
    <div className="homepage-container">
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul className="nav-list">
         <li onClick={()=>navigate("/NavBarStore")} className="nav-item">Store</li>
          <li onClick={()=>navigate('/Operation')} className="nav-item">Operation</li>
          <li onClick={()=>navigate('/Faq')}  className="nav-item">FAQ</li>
          <li onClick={()=>navigate('/')}  className="nav-item">Exit</li>

        </ul>
      </nav>
      <div className="content">
        <h1 className="welcome-text">Welcome To RoMeH Store</h1>
        <img src={logo2} alt="promo" className="promo-image"/>
      </div>
    </div>
  );
}

export default HomePage;
