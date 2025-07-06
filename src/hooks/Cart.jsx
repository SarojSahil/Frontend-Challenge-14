import { createContext, useContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

  let cart = {
    items: [
      {
        id: 101,
        name: "iPhone 12 Pro",
        color: "Golden",
        price: 999,
        count: 1,
        image: "images/Gold.png"
      },
      {
        id: 102,
        name: "Apple Watch",
        color: "Blue",
        price: 399,
        count: 1,
        image: "images/Apple-watch.png"
      },
      {
        id: 103,
        name: "iMac",
        color: "Green",
        price: 1199,
        count: 1,
        image: "images/iMac.png"
      }
    ],
    taxRate: 24
  }

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => {
  return useContext(CartContext);
}

export default useCart;
export { CartProvider };