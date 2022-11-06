// import { createContext, ReactNode, useContext, useState } from "react"
// import { Cart } from "../components/Cart"
// import { useLocalStorage } from "../hooks/useLocalStorage"

// const CartContext = createContext({handleAddCart})

// export function useCart ({}) {
//   return useContext(CartContext)
// }



// export function CartProvider ({children}) {
//   const [cartItems, setCartItems] = useState([])
//   function getItemQuanity (id) {}
//   function increaseCartQuantity (id) {}
//   function decreaseCartQuantity (id) {}
//   function removeFromCart (id) {}
//   function handleAddCart(product) {
//     console.log('adding to cart', product)
//   }

//   return (
//     <CartContext.Provider value={{
//       handleAddCart
//     }}>
//       {children}
//     </CartContext.Provider>
//   )
// }



