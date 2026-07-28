import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider =({children})=>{
   const [isCartOpen,setIsCartOpen]= useState(false)
   const [cartItems,setCartItems]= useState([])

   const openCart=()=>{setIsCartOpen(true)}
   const closeCart=()=>{setIsCartOpen(false)}
   const totalItems = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
    }, 0);
   const totalPrice = cartItems.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
    }, 0);

   const addToCart = (product)=>{
    const existingProduct = cartItems.findIndex((item)=>item.id===product.id);
    const updatedCart =[...cartItems];
    if(existingProduct=== -1){
        updatedCart.push({
            ...product,
            quantity:1
        })
    }else{
        updatedCart[existingProduct].quantity += 1;
    }
    setCartItems(updatedCart);
    openCart()
    }
    
    const getCartItem = (id) => {
        const item = cartItems.find((item)=>item.id===id);
        return item;
     }

     const increaseQuantity = (id) => {
         const productIndex = cartItems.findIndex((item)=>item.id===id);
         const updatedCart =[...cartItems];
         updatedCart[productIndex].quantity += 1;
         setCartItems(updatedCart)
    }

    const decreaseQuantity = (id) => {
         const productIndex = cartItems.findIndex((item)=>item.id===id);
          const updatedCart =[...cartItems];
         if(updatedCart[productIndex].quantity === 1){
           return   removeFromCart(id)
         }else{
            updatedCart[productIndex].quantity -= 1;
         }
        
         setCartItems(updatedCart)
    }
    const removeFromCart = (id) => {
     const updatedCart= cartItems.filter((item)=>item.id!==id)
     setCartItems(updatedCart)
}

 const clearCart = () => {
    setCartItems([]);
};
    return <CartContext.Provider value={{isCartOpen,openCart,closeCart,cartItems,setCartItems , addToCart, getCartItem , increaseQuantity,decreaseQuantity, removeFromCart, totalPrice, totalItems, clearCart}}>
        {children}
    </CartContext.Provider>
}