import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Clothes.css"
import {  Link, useNavigate } from 'react-router-dom';

const Clothes = () => {
  
    const [De ,setDe]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [haveerorr , sethaveerorr] = useState(false)
    const [massageerr ,setmassageerr] = useState("شءشؤ")
    const navigate=useNavigate();
    const [counters, setCounters] = useState({});

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
setTimeout(()=>{
    fetch("http://localhost:8000/Clothes")

    .then((res) => res.json())
    .then ((data)=> {
     setDe(data)
        setIsLoading(false);
    })

.catch((err) =>{
    console.error(err);
          setIsLoading(false);
   sethaveerorr(true)
   setmassageerr( (err.message ));
})
} ,1000)
    },[])

    return (
      <>
                    

        <div className="deteliproduct">
          {isLoading && (
            <div className="spidetel">
              <Spinner animation='border' />
            </div>
          )}
          {haveerorr && !isLoading && (
            <h1>{massageerr}</h1>
          )}
          {!haveerorr && !isLoading && (
            De.map(deteln => (
              <div key={deteln.id} className="product-card">
                <Link to={`/Clothes/${deteln.id}`} >
                  <h1>{deteln.name}</h1>
                  </Link>
                    <img src={deteln.image} alt={deteln.descrip2on} />
                  <p>Price: {deteln.price}</p>
                  <p>Size: {deteln.size}</p>
                  <p>Color: {deteln.color}</p>
                  <p>Stock: {deteln.stock}</p>
          
                <div className="counter-containers">
                  <button onClick={() => increaseCounter(deteln.id)} className="counter-buttons">+</button>
                  <button className="add-to-cart-buttons" onClick={()=>navigate("/Cart")}>Add to cart</button>
                  <button onClick={() => decreaseCounter(deteln.id)} className="counter-buttons">-</button>
                  <span className='count-values'>{counters[deteln.id] || 0}</span>
                </div>
              
                </div>
            ))
          )}
        </div>
        <Button className='btnn' onClick={() => navigate("/NavBarStore")}>Back</Button>
      </>
    );
  };
  
  export default Clothes;