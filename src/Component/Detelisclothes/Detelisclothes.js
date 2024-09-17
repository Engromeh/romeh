import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./Detelisclothes.css"
import { Button } from 'react-bootstrap';
const Detelisclothes = () => {
  const { id } = useParams();
  const [deteln, setDeteln] = useState(null);
const navigate=useNavigate();
  useEffect(() => {
    fetch(`http://localhost:8000/Clothes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDeteln(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

 

  return (

    <>



    <div className="romeh-container">
           

      <p className="romeh-description">{deteln?.descrip2on}</p>
      <p className='ROMMM'>Name:{deteln?.name}</p>
      <p>Price:{deteln?.price}$</p>
        <p>Size:{deteln?.size}</p>
        <p>Color:{deteln?.color}</p>
        <p>Size:{deteln?.stock}</p>
    </div>
    <Button onClick={() => navigate("/NavBarStore")}>Back</Button>

    </>
  );
};

export default Detelisclothes;
