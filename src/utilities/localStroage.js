const getStoredData = () =>{
    const cart = localStorage.getItem('cart');
if(cart){
    return JSON.parse(cart);
}
return [];
}


const saveToLA = (id) =>{
    const cart = getStoredData();
    cart.push(id)
    localStorage.setItem('cart',JSON.stringify(cart));
}
export {getStoredData,saveToLA};