import React from 'react';
import './NavBarStore.css';
import romehImage from './vart.jpg'; // استيراد الصورة
import { useNavigate } from 'react-router-dom';
import logooo from'./logo.png';
const NavBarStore = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <div className="nav-left">
        <img src={logooo} alt="logo" className="shho" />
        </div>
        <ul className="nav-list">
          <li onClick={() => navigate("/Digital")} className="nav-item">Digital Product</li>
          <li onClick={() => navigate("/Clothes")} className="nav-item">Clothes Product</li>
          <li onClick={() => navigate("/HomePage")} className="nav-item">Back</li>
        </ul>
      </nav>
      <h1 className='rom'>Welcome To RoMeH Store</h1>
      <img src={romehImage} alt='RoMeH Store' className='store-image' />
    </div>
  );
}

export default NavBarStore;
