"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";
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
  ]); // Iniciar com um item para teste, altere conforme necessário.

  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

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

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      toggleCart();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleCart}
        />
      )}

      {/* Carrinho Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 w-full max-w-lg h-[100vh] bg-[#0B0B0B] transition-transform duration-500 ${
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
          <h1 className="font-poppins text-2xl font-[400] text-white mb-2">
            Resumo do pedido
          </h1>
          <p className="text-md font-[400] font-poppins text-[#F2DD52] mb-8">
            Produtos adicionados ao carrinho
          </p>

          {/* Mensagem quando não houver itens no carrinho */}
          {cartItems.length === 0 && (
            <div className="flex flex-1 justify-center items-center">
              <p className="text-[#F2DD52] text-lg font-poppins text-center">
                Não há itens no seu carrinho.
              </p>
            </div>
          )}

          {/* Lista de Produtos */}
          <div className={`flex-1 ${cartItems.length <= 2 ? "flex-grow-0" : ""}`}>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="w-full  h-[200px] border border-[#212020] rounded-xl mb-6 p-4 flex gap-4 items-start"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={160}
                  height={160}
                  className="rounded-lg w-[90px] h-[90px] md:w-[160px] md:h-[160px]"
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
                  <p className="text-sm md:text-md text-[#F2DD52] font-poppins font-normal mt-2 mb-2">
                    Tamanho selecionado: {item.size}
                  </p>
                  <div className="flex items-center justify-start gap-4 md:gap-4">
                    <p className="text-sm text-[#F2DD52] font-poppins font-normal">
                      R$ {item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center">
                      <button
                        className="bg-[#F2DD52] text-black rounded-full p-3 w-[32px] h-[32px] flex items-center justify-center"
                        onClick={() => updateQuantity(item.id, "decrease")}
                      >
                        <FaMinus className="text-lg" />
                      </button>
                      <span className="border border-[#171717] text-white rounded-full mx-3 w-[32px] h-[32px] flex items-center justify-center text-sm md:text-md">
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

          {/* Cupom de desconto */}
          <div className={`flex flex-col mt-6 ${cartItems.length <= 2 ? "mt-auto" : ""}`}>
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
                style={{ caretColor: "#F2DD52" }} // Ajusta a cor do cursor do input para o mesmo tom do botão
              />
              <LiaTagsSolid className="absolute left-3 text-[#DCC373] text-xl w-6 h-6" />
              <button
                onClick={applyCoupon}
                className={`bg-[#F2DD52] text-black font-poppins font-medium text-sm rounded-lg py-2 px-4 ml-2 ${
                  couponApplied ? "opacity-50 cursor-not-allowed" : ""
                }`}
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

          {/* Total e Subtotal */}
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
              <p className="text-[#F2DD52] font-poppins font-normal text-lg">
                R$ 7.500,00
              </p>
            </div>
          </div>

          {/* Botão de pagamento */}
          <button
            onClick={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            className={`bg-[#F2DD52] text-black font-poppins font-medium w-full max-w-xs mx-auto text-[15px] py-3 px-2 mt-4 rounded-lg transition-transform duration-300 ${
              buttonHovered ? "scale-105" : ""
            }`}
          >
            Escolha como pagar
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
