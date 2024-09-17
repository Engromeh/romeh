import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import'./DetelisDigital.css'
import { Button } from 'react-bootstrap'
const DetelisDigital = () => {
    const{id}=useParams()
    const [category ,setcategory]=useState(null)
    const navigate=useNavigate();
    useEffect(() =>{
fetch(`http://localhost:8000/Digital/${id}`)
.then(res=>res.json())
.then(data=>
    setcategory(data)
)
.catch(err=>{console.log(err)})

    },[id])
  return (
    <>
  
    <div className="romehhe-container">
  
    <p  className='ROMMMhh'>{category?.product_name}</p>
    <p className="romehhe-description">desc:{category?.product_desc}</p>
    <p>category:{category?.product_category}</p>
      <p>release:{category?.release_date}</p>
      <p>warranty:{category?.warranty}</p>
  </div>
  <Button onClick={() => navigate("/Digital")}>Back</Button>
  </>
  )
}

export default DetelisDigital
