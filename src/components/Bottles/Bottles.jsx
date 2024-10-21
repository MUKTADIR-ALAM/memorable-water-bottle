import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { getStoredData, saveToLA } from "../../utilities/localStroage";
export default function Bottles() {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    if (bottles) {
      const lsCartId = getStoredData();
      const lsCart = [];
      for (const id of lsCartId) {
        lsCart.push(bottles.find((bottle) => bottle.id === id));
      }
      setCart(lsCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    setCart([...cart, bottle]);
    saveToLA(bottle.id);
  };
  console.log(cart);
  // console.log(bottles);
  return (
    <div>
      <h3>Bottles here: {bottles.length}</h3>
      <h4>cart:{getStoredData().length}</h4>
<div className="cart-container">
  {
    cart.map((cart)=><img src={cart.img}></img>)
  }
</div>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
}
