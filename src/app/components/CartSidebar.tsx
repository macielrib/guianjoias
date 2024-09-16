"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTrashAlt, FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { LiaTagsSolid } from "react-icons/lia";

const CartSidebar = ({
  isOpen,
  toggleCart,
}: {
  isOpen: boolean;
  toggleCart: () => void;
}) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
      size: "A",
      price: 2500.0,
      quantity: 1,
      image: "/assets/joias/joia3.png",
    },
    {
      id: 2,
      name: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
      size: "A",
      price: 2500.0,
      quantity: 1,
      image: "/assets/joias/joia3.png",
    },
    {
      id: 3,
      name: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
      size: "A",
      price: 2500.0,
      quantity: 1,
      image: "/assets/joias/joia3.png",
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoupon(e.target.value);
  };

  const applyCoupon = () => {
    if (coupon.trim()) {
      setCouponApplied(true);
    }
  };

  const updateQuantity = (id: number, type: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : item.quantity,
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* Carrinho Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[590px] h-[100vh] bg-[#0B0B0B] transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 50 }}
      >
        <div className="p-8 h-full flex flex-col overflow-y-auto scrollbar-hidden">
          <button
            onClick={toggleCart}
            className="absolute top-4 right-8 text-white text-3xl"
            aria-label="Fechar"
          >
            &times;
          </button>
          <h1 className="font-poppins text-3xl font-light text-white mb-2">
            Resumo do pedido
          </h1>
          <p className="text-md font-normal font-poppins text-[#F2DD52] mb-8">
            Produtos adicionados ao carrinho
          </p>

          {/* Lista de Produtos */}
          <div className="flex-1">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="w-full h-[200px] border border-[#212020] rounded-xl mb-6 p-4 flex gap-4 items-start"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={160}
                  height={160}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-poppins text-lg font-normal text-white leading-tight">
                      {item.name}
                    </h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-[#F2DD52] text-md px-4 py-2"
                      style={{ alignSelf: "flex-start" }}
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                  <p className="text-md text-[#F2DD52] font-poppins font-normal mt-2 mb-2">
                    Tamanho selecionado: {item.size}
                  </p>
                  <div className="flex items-center justify-start gap-4 md:gap-8">
                    <p className="text-md text-[#F2DD52] font-poppins font-normal">
                      R$ {item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center">
                      <button
                        className="bg-[#F2DD52] text-black rounded-full p-3 w-[32px] h-[32px] flex items-center justify-center"
                        onClick={() => updateQuantity(item.id, "decrease")}
                      >
                        <FaMinus className="text-lg" />
                      </button>
                      <span className="border border-[#171717] text-white rounded-full mx-3 w-[32px] h-[32px] flex items-center justify-center text-md">
                        {item.quantity}
                      </span>
                      <button
                        className="bg-[#F2DD52] text-black rounded-full p-3 w-[32px] h-[32px] flex items-center justify-center"
                        onClick={() => updateQuantity(item.id, "increase")}
                      >
                        <FaPlus className="text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col mt-6">
            <p className="font-poppins font-normal text-md text-white mb-2">
              Aplicar cupom de desconto
            </p>
            <div className="relative mt-2 flex items-center">
              <input
                type="text"
                placeholder="Cupom de desconto"
                value={coupon}
                onChange={handleCouponChange}
                className="border-2 !border-[#212020] bg-transparent rounded-lg py-2 px-3 pl-10 placeholder:text-[#4F4F4F] text-[#4F4F4F] font-poppins font-normal text-sm w-full max-w-xs h-[42px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
                maxLength={9}
                style={{ caretColor: '#F2DD52' }} // Ajusta a cor do cursor do input para o mesmo tom do botão
              />
              <LiaTagsSolid className="absolute left-3 text-[#DCC373] text-xl w-6 h-6" />
              <button
                onClick={applyCoupon}
                className={`bg-[#F2DD52] text-black font-poppins font-medium text-sm rounded-lg py-2 px-4 ml-2 ${couponApplied ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={couponApplied}
              >
                Aplicar
              </button>
            </div>
            {couponApplied && (
              <p className="text-[#F2DD52] font-poppins font-normal text-sm mt-2">
                Desconto aplicado!
              </p>
            )}
          </div>

          <div className="flex flex-col mt-6">
            <div className="flex justify-between w-full max-w-sm mb-2">
              <p className="font-poppins font-light text-white text-md">
                Subtotal
              </p>
              <p className="font-poppins font-light text-[#F2DD52] text-md">
                R$ 7.500,00
              </p>
            </div>
            <div className="flex justify-between w-full max-w-sm mb-4">
              <p className="font-poppins font-light text-white text-md">
                Desconto
              </p>
              <p className="font-poppins font-light text-[#F2DD52] text-md">
                - R$ 100,00
              </p>
            </div>

            <div className="flex flex-col mx-auto text-center mt-6">
              <p className="text-white font-poppins text-md font-normal">
                Valor total do seu pedido
              </p>
              <p className="text-[#4F4F4F] font-poppins font-medium text-sm">
                R$ 7.600,00
              </p>
              <p className="text-[#F2DD52] font-poppins font-normal text-lg">
                R$ 7.500,00
              </p>
            </div>
          </div>
          <button
            onClick={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            className={`bg-[#F2DD52] text-black font-poppins font-medium w-full max-w-xs mx-auto text-[15px] py-3 px-2 mt-4 rounded-lg transition-transform duration-300 ${buttonHovered ? "scale-105" : ""}`}
          >
            Escolha como pagar
          </button>
        </div>
      </div>

      {/* Estilos CSS para a barra de rolagem */}
      <style jsx global>{`
        .scrollbar-hidden {
          overflow: auto; /* Habilita a rolagem */
          scrollbar-width: 2px; /* Largura da barra de rolagem no Firefox */
          scrollbar-color: #F2DD52 #212020; /* Cor da barra de rolagem e fundo no Firefox */
        }
        .scrollbar-hidden::-webkit-scrollbar {
          width: 10px; /* Largura da barra de rolagem no Chrome/Safari */
        }
        .scrollbar-hidden::-webkit-scrollbar-track {
          background: #212020; /* Cor de fundo da área de rolagem */
        }
        .scrollbar-hidden::-webkit-scrollbar-thumb {
          background: #F2DD52; /* Cor da barra de rolagem */
          border-radius: 10px; /* Arredondar os cantos da barra de rolagem */
          margin: 4px; /* Espaçamento entre a barra de rolagem e a área de rolagem */
        }
      `}</style>
    </>
  );
};

export default CartSidebar;
