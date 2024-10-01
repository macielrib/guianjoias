"use client";

import Link from "next/link";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { useState } from "react";

interface Product {
  name: string;
  status: string;
  purchaseDate: string;
  id: string;
  imageUrl: string;
}

interface Category {
  name: string;
}

interface Order {
  name: string;
  status: string;
  purchaseDate: string;
  id: string;
}

interface ProductsAndCategoriesProps {
  products: Product[];
  categories: Category[];
}

const ProductsAndCategories = ({ products, categories }: ProductsAndCategoriesProps) => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);



  const handleInfoClick = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  return (
    <>
      <div className="flex flex-col -mt-8 px-4 lg:px-56 w-full">
        <div className="bg-[#F2DD52] rounded-md w-full max-w-6xl md:w-[74rem] h-4 md:ml-6 mt-4"></div>
        <div className="w-full max-w-5xl bg-transparent py-2 px-6 rounded-lg mt-4 flex items-center gap-3 justify-start">
          <BsPatchCheckFill className="text-[#F2DD52] text-4xl sm:text-xl" />
          <p className="font-poppins text-md text-[#F2DD52] font-medium">
            Você está gerenciando o seu website como um administrador!
          </p>
        </div>

        <div className="w-full max-w-5xl px-4 mt-4 lg:px-8 text-start">
          <h1 className="font-poppins text-3xl mb-2 text-white font-medium transition duration-300">
            Gerenciar <span className="text-[#F2DD52]">produtos</span> e{" "}
            <span className="text-[#F2DD52]">categorias</span>
          </h1>
          <p className="font-poppins font-normal text-md text-[#4F4F4F] mb-8">
            Crie categorias, produtos, e gerencie os produtos dentro da
            categoria especificada.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:ml-32 gap-8 px-6 items-center md:items-start justify-center">
        <div className="flex flex-col w-full max-w-[340px] h-full max-h-[545px] rounded-lg bg-[#171717]">
          <div className="flex flex-col py-6 px-6 items-start justify-start">
            <h1 className="font-poppins text-white font-normal text-xl mb-4">
              Criar categoria
            </h1>
            <div className="relative mt-2 flex items-center">
              <input
                type="text"
                placeholder="Nome da categoria"
                className="border !border-[#4F4F4F] bg-transparent rounded-full py-4 px-3 pl-10 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm w-[270px] h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
                maxLength={9} // Limita a entrada a 9 caracteres
              />
            </div>
            <div className="flex items-center mb-4 py-4 px-2 text-white">
              <input type="checkbox" className="custom-checkbox py-2 px-2" />
              <label
                htmlFor="statusCheckbox"
                className="ml-2 text-white text-sm font-poppins font-normal"
              >
                Evidenciar categoria
              </label>
            </div>
            <Link
              href={"/create-category"}
              className="py-3 px-4 w-full max-w-[12rem] mb-4 rounded-full mx-auto text-center bg-[#F2DD52] text-black font-poppins font-medium transition duration-300 hover:-translate-y-1 text-sm"
            >
              Criar categoria
            </Link>
          </div>

          <div className="relative">
            <div className="flex flex-col py-2 px-6 overflow-y-auto max-h-[250px] !scrollbar-thin !scrollbar-thumb-[#F2DD52] scrollbar-track-[#212020] scrollbar-rounded-md">
              <h1 className="font-poppins text-white font-normal text-xl mb-2">
                Categorias existentes
              </h1>
              <p className="font-poppins font-normal text-sm text-[#4F4F4F]">
                Navegue pelas categorias existentes.
              </p>
              <div className="flex flex-col py-4">
                {categories.length > 0 ? (
                  categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/category-id`}
                      className="flex justify-between w-full max-w-sm rounded-lg py-3 px-8 items-center mb-4 border-2 border-[#F2DD52]"
                    >
                      <h1 className="font-poppins text-white font-medium text-md">
                        {category.name}
                      </h1>
                      <button className="text-white transition duration-300 hover:-translate-y-1">
                        <FiTrash2 className="h-5 w-5" />
                      </button>
                    </Link>
                  ))
                ) : (
                  <p className="text-[#4F4F4F]">Nenhuma categoria existente.</p>
                )}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#171717] to-transparent pointer-events-none"></div>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[800px]">
          <div className="flex flex-col items-center md:flex-row justify-between py-2">
            <h1 className="font-poppins text-white mx-auto font-normal text-xl mb-4">
              Produtos na categoria{" "}
              <span className="text-[#F2DD52]">&quot;Nome da Categoria&quot;</span>
            </h1>
            <Link
              href={"criar-produto"}
              className="w-full mb-4 mx-auto max-w-[13rem] rounded-full bg-[#F2DD52] py-3 px-2 text-black font-poppins font-medium text-center text-sm transition duration-300 hover:-translate-y-1"
            >
              Novo produto
            </Link>
          </div>

          <div className="relative">
            <div className="flex flex-col py-2 px-6 overflow-y-auto max-h-[250px] scrollbar-thin scrollbar-thumb-[#F2DD52] scrollbar-track-[#212020] scrollbar-rounded-md">
              <h1 className="font-poppins text-white font-normal text-xl mb-2">
                Produtos
              </h1>
              <p className="font-poppins font-normal text-sm text-[#4F4F4F]">
                Navegue pelos produtos existentes.
              </p>
              <div className="flex flex-col py-4">
                {products.length > 0 ? (
                  products.map((product, index) => (
                    <div
                      key={index}
                      className="flex justify-between w-full max-w-sm rounded-lg py-3 px-8 items-center mb-4 border-2 border-[#F2DD52] relative"
                    >
                      <h1 className="font-poppins text-white font-medium text-md">
                        {product.name}
                      </h1>
                      <button
                        className="text-white transition duration-300 hover:-translate-y-1"
                        onClick={() => handleInfoClick(product)}
                      >
                        <FaInfoCircle className="h-5 w-5" />
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-[#4F4F4F]">Nenhum produto existente.</p>
                )}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#171717] to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Renderizar o Modal se selectedOrder não for nulo */}
      {selectedOrder && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-xl font-bold">Detalhes do Pedido</h2>
            <p>Nome: {selectedOrder.name}</p>
            <p>Status: {selectedOrder.status}</p>
            <p>Data de Compra: {selectedOrder.purchaseDate}</p>
            <button onClick={handleCloseModal} className="py-2 px-4 bg-red-500 text-white rounded">Fechar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsAndCategories;
