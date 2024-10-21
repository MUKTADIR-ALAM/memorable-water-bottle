import React from 'react'
import './Bottle.css'
export default function Bottle({bottle,handleAddToCart}) {
    const{name,price,img} = bottle
  return (
    <div className='bottle-container'>
        <img src={img} alt="" />
        <p>Name: {name}</p>
        <p>Price: {price}$</p>
        <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
    </div>
  )
}
