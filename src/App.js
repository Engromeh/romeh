// src/App.js


import React from 'react';
import './App.css';
import Operation from './Component/Operation/Operation'; // تأكد من أن المسار صحيح
import Footer from './Component/Footer/Footer';
import Faq from './Component/Faq/Faq';
import HomePage from './Component/HomePage/HomePage.js';
import NavBarStore from './Component/NavBarStore/NavBarStore.js';
import Login from './Component/Login/Login.js';
import Register from './Component/Register/Register.js';
import { Container } from 'react-bootstrap';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Clothes, { romehClothe } from './Component/Clothesproduct/Clothes.js';
import Digital from './Component/Digitalproduct/Digital.js';
import Detelisclothes from './Component/Detelisclothes/Detelisclothes.js';
import DetelisDigital from './Component/DetelisDigital/DetelisDigital.js';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Container fluid className="custom-container"> {/* استخدم `fluid` لتوسيع الحاوية */}
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/HomePage' element={<HomePage />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Operation' element={<Operation />} />
            <Route path='/Faq' element={<Faq />} />
            <Route path='/Digital' element={<Digital />} />
            <Route path='/Clothes' element={<Clothes />} />
            <Route path='/Footer' element={<Footer />} />
            <Route path='/NavBarStore' element={<NavBarStore />} />
            <Route path='/Clothes/:id' element={<Detelisclothes />} />
            <Route path='/Digital/:id' element={<DetelisDigital />} />

        


          </Routes>
        </Container>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

