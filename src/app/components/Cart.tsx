import { useState } from "react";
import Navbar from "./Navbar";
import CartSidebar from "./CartSidebar";

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <CartSidebar isOpen={isCartOpen} toggleCart={toggleCart} />
    </>
  );
};

export default Cart;
