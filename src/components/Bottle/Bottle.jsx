import React from 'react'
import './Bottle.css'
export default function Bottle({bottle}) {
    const{name,price,img} = bottle
  return (
    <div className='bottle-container'>
        <img src={img} alt="" />
        <p>Name: {name}</p>
        <p>Price: {price}$</p>
        <button>Purchase</button>
    </div>
  )
}
