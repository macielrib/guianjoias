'use client'; 

import { IoBagHandleOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import AnnounceBody from "./navbar/AnnounceBody";
import Link from "next/link";
import NavbarMobile from "./navbar/NavbarMobile";
import { AiOutlineSearch } from "react-icons/ai";
import Navigation from "./navbar/Navigation";
import { useState } from "react";
import CartSidebar from "./CartSidebar";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <AnnounceBody />
      <div className="bg-black py-2 transition-transform duration-500">
        <NavbarMobile />
        <div className="hidden transition-transform duration-500 md:-mt-8 md:flex container mx-auto flex flex-col items-center md:flex-row md:justify-center md:gap-32">
          <div className="flex-1 mx-2 w-full max-w-xs transition duration-300 hover:-translate-y-1">
            <div className="max-w-sm space-y-3">
              <div className="relative">
                <input
                  type="email"
                  className="peer py-3 pe-0 ps-10 block w-full bg-transparent border-0 border-b-2 text-sm focus:border-[#F2DD52] focus:outline-none text-white font-poppins placeholder-gray-400"
                  placeholder="Que tipo de joia você está buscando?"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                  <AiOutlineSearch className="text-[#F2DD52]" size={24} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex py-4 md:py-0 gap-4 items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              className="w-full max-w-[80px] md:max-w-[110px]"
              width={110}
              height={110}
            />
          </div>

          <div className="flex gap-8 py-4 md:py-0 items-center">
            <button
              onClick={toggleCart}
              className="relative flex items-center transition duration-300 hover:scale-105"
              aria-label="Carrinho de Compras"
            >
              <span className="bg-[#F2DD52] rounded-full p-3 flex items-center justify-center">
                <IoBagHandleOutline className="text-black w-5 h-5" />
              </span>
              <span className="absolute -top-2 md:right-[5.6rem] bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-poppins font-medium">
                2
              </span>
              <p className="hidden md:block text-white font-poppins text-sm font-semibold ml-2">
                <span className="text-[#F2DD52]">Carrinho</span> de<br />Compras
              </p>
            </button>

            <CartSidebar isOpen={isCartOpen} toggleCart={toggleCart} />


            <Link
              href="/user"
              className="flex items-center transition duration-300 hover:scale-105"
            >
              <span className="bg-[#F2DD52] rounded-full p-3 flex items-center justify-center">
                <FaUser className="text-black w-5 h-5" />
              </span>
              <p className="hidden md:block text-white font-poppins text-sm font-semibold ml-2">
                <span className="text-[#F2DD52]">Entrar</span> ou<br /><span className="text-[#F2DD52]">Criar conta</span>
              </p>
            </Link>
          </div>
        </div>
        <Navigation />
      </div>
    </>
  );
};

export default Navbar;
