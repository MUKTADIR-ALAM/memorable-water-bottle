import React, { useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle'
import './Bottles.css'
export default function Bottles() {
  const [bottles,setBottles] = useState([]);
  useEffect(()=>{
    fetch('bottles.json')
    .then(res=>res.json())
    .then(data=>setBottles(data));
  },[]);
console.log(bottles);
  return (
    <div>
        <h3>Bottles here: {bottles.length}</h3>
        <div className='bottles-container'>
        {
          bottles.map(bottle=><Bottle key={bottle.id} bottle={bottle}></Bottle>)
        }
        </div>
    </div>
  )
}
