import React, { useEffect, useState } from 'react';
import logo from './logo.png'; 
import './Operation.css'; 
import { NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Operation = () => {
  const [x, setX] = useState(1);
  const [counters, setCounters] = useState(0);
 

  useEffect(() => {
    console.log(`result: ${x}`);
  }, [x]);

  
  const article = {
    title: "first",
    image: logo, 
    link: logo,  
    paragraph: "This is a sample paragraph for the second case."
  };
const navigate =useNavigate();
  return (
    <>
    
    <nav className="ll">
    <ul className="nav-lis">
   
      <li onClick={()=>navigate("/HomePage")} className="tr" >Back</li>
    </ul>
  </nav>

      {article.title === "first" ? (
        <div className="home-container">
          <h1>{article.title}</h1>
          <img src={article.image} alt="image" /> 
          <a href={article.link} target="_blank" rel="noopener noreferrer">romeh</a>
        </div>
      ) : article.title === "second" ? (
        <div>
          <h1>{article.title}</h1>
          <p>{article.paragraph}</p>
        </div>
      ) : (
        <div className="error-container">
          <h1>Error 404</h1>
          <p>Page not found</p>
        </div>
      )}

   
      <article className='coun'>
        <button onClick={() => setCounters(counters + 1)}>+</button>
        <button onClick={() => setCounters(counters - 1)}>-</button>
        <button onClick={() => setCounters(0)}>Restart</button>
        <span className='count-value'>{counters}</span>
      </article>


      <div className='container'>
        <button onClick={() => setX(x * 2)}>Double</button>
        <span className='count-value'>{x}</span>
      </div>
    </>
  );
};

export default Operation;
