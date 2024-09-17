import React, { useEffect, useState } from 'react';
import './Digital.css';
import { Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Digital = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [haveError, setHaveError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [counters, setCounters] = useState({});
const navigate=useNavigate()
  const increaseCounter = (id) => {
    setCounters((prevCounters) => ({
      // مش فاهم
      ...prevCounters,
      [id]: (prevCounters[id] || 0) + 1
    }));
  };

  const decreaseCounter = (id) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [id]: Math.max((prevCounters[id] || 0) - 1, 0)
    }));
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/Digital")
        .then((res) => res.json())
        .then((data) => {
          setCategories(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
          setHaveError(true);
          setMessageError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <>
        
      <h1 className='hnu'>Welcome to RoMeH Digital</h1>
      <div className="category-list">
        {isLoading && (
          <div className="spinner-container">
            <Spinner animation="border" />
          </div>
        )}

        {haveError && !isLoading && <h1>{messageError}</h1>}

        {!isLoading && !haveError && (
          categories.map(category => (
            <div key={category.id} className="category-card">
            <Link to={`/Digital/${category.id}`}>
              <h2 className="category-title">{category.product_name}</h2>
              </Link>
              <img src={category.product_image} alt={category.product_name} className="category-image" />
              <p className="category-desc">{category.product_desc}</p>
              <p className="category-category">Category: {category.product_category}</p>
              <p className="category-release">Release Date: {category.release_date}</p>
              <p className="category-warranty">Warranty: {category.warranty}</p>
              
              <div className="counter-container">
                <button onClick={() => increaseCounter(category.id)} className="counter-button">+</button>
                <button className="add-to-cart-button">Add to cart</button>
                <button onClick={() => decreaseCounter(category.id)} className="counter-button">-</button>
                <span className='count-value'>{counters[category.id] || 0}</span>
              </div>
         
            </div>
          ))
        )}
      </div>
      <Button onClick={() => navigate("/NavBarStore")}>Back</Button>
   
    </>
  );
};

export default Digital;
