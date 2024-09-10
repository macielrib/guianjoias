"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const NavbarMobile = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="bg-black py-4">
      <div className="md:hidden container mx-auto flex justify-between items-center px-2">
        <div className="flex-shrink-0">
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
        </div>

        <div className="flex-1 mx-2 w-full max-w-xs">
          <div className="relative">
            <input
              type="text"
              className="peer py-3 pl-10 block w-full bg-transparent border-0 border-b-2 border-b-gray-200 text-sm focus:border-b-[#F2DD52] text-white font-poppins placeholder-gray-400"
              placeholder="Que tipo de joia você está buscando?"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <AiOutlineSearch className="text-[#F2DD52]" size={24} />
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={toggleDrawer}
            className="bg-[#F2DD52] py-2 px-3 rounded-full text-black flex items-center"
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black text-white transform transition-transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center p-6 z-40">
          <button
            onClick={toggleDrawer}
            className="absolute top-4 right-4 text-yellow-500 z-40"
          >
            <FaTimes size={24} />
          </button>

          <div className="mb-6 z-40">
            <Image src="/logo.png" alt="Logo" width={120} height={60} />
          </div>

          <nav className="flex flex-col gap-4 items-center z-40">
            <Link
              href="/"
              className="text-lg font-poppins text-[#F2DD52]"
            >
              Início
            </Link>
            <Link
              href="/catalog"
              className="text-lg font-poppins text-[#F2DD52]"
            >
              Catálogo
            </Link>
            <Link
              href="/launches"
              className="text-lg font-poppins text-[#F2DD52]"
            >
              Lançamentos
            </Link>
            <Link
              href="/bracelets"
              className="text-lg font-poppins text-[#F2DD52]"
            >
              Pulseiras
            </Link>
            <Link
              href="/chains"
              className="text-lg font-poppins text-[#F2DD52]"
            >
              Correntes
            </Link>
            <Link
              href="/escapularios"
              className="text-lg font-poppins text-[#F2DD52]"
            >
              Escapulários
            </Link>
            <Link
              href="/earrings"
              className="text-lg font-poppins text-[#F2DD52]"
            >
              Brincos
            </Link>
          </nav>

          <div className="mt-6 flex gap-4 items-center z-40">
            <Link href="/cart" className="flex items-center">
              <span className="bg-[#F2DD52] rounded-full p-4 flex items-center justify-center">
                <IoBagHandleOutline className="text-black w-4 h-4" />
              </span>
            </Link>

            <Link href="/user" className="flex items-center">
              <span className="bg-[#F2DD52] rounded-full p-4 flex items-center justify-center">
                <FaUser className="text-black w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={toggleDrawer}
          />
        )}
      </div>
    </div>
  );
};

export default NavbarMobile;
