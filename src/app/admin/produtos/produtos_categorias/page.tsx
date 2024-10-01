"use client";

import Image from "next/image";
import Link from "next/link";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { FaImage } from "react-icons/fa6";
import { useState } from "react";

interface Product {
  name: string;
  status: string;
  purchaseDate: string;
  imageUrl: string;
  id: string;
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

const ProductsAndCategories = ({ products, categories }: { products: Product[]; categories: Category[] }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const scrollTop = target.scrollTop;

    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

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
        {/* Badge: Você está gerenciando... */}
        <div className="w-full max-w-5xl bg-transparent py-2 px-6 rounded-lg mt-4 flex items-center gap-3 justify-start">
          <BsPatchCheckFill className="text-[#F2DD52] text-4xl sm:text-xl" />
          <p className="font-poppins text-md text-[#F2DD52] font-medium">
            Você está gerenciando o seu website como um administrador!
          </p>
        </div>

        {/* Texto: Olá, administrador */}
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
        {/* Card de Criar Categoria */}
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

          {/* Categorias Existentes */}
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

            {/* Gradiente para desvanecimento */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#171717] to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Seção de Produtos na Categoria */}
        <div className="flex flex-col w-full max-w-[800px]">
          <div className="flex flex-col items-center  md:flex-row justify-between py-2">
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

          {/* Lista de Produtos - Tabela */}
          <div className="w-full max-w-[1280px] mx-auto lg:-mt-3">
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 text-center p-4 text-[#DCC373] font-normal font-poppins text-md bg-transparent">
              <div className="mx-auto lg:pr-5">
                <FaImage className="h-5 w-5" />
              </div>
              <div>Nome do produto</div>
              <div>Criado em</div>
              <div>Ações</div>
            </div>

            {/* Linhas da tabela com rolagem */}
            <div
              className="overflow-y-auto max-h-[410px] !scrollbar-thin !scrollbar-thumb-[#F2DD52] scrollbar-track-[#212020] scrollbar-rounded-md pr-4"
              onScroll={handleScroll}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-4 gap-4 py-2 px-4 text-center items-center bg-[#171717] text-white text-sm font-poppins border border-[#4F4F4F] mb-4 w-full rounded-xl
                    ${
                      (index === 4 || index === 5) && !isScrolled ? "opacity-60" : "opacity-100"
                    }`}
                >
                  <div className="flex justify-center items-center">
                    <Image
                      src={product.imageUrl}
                      alt="Imagem do Produto"
                      width={100}
                      height={100}
                      className="object-cover w-12 h-12 rounded-full"
                    />
                  </div>
                  <Link
                    href={`/produto/${product.id}`}
                    className="cursor-pointer hover:text-[#F2DD52]"
                  >
                    {product.name}
                  </Link>
                  <div>{product.purchaseDate}</div>
                  <div className="flex justify-center items-center gap-4">
                    <button onClick={() => handleInfoClick(product)} className="text-white transition duration-300 hover:-translate-y-1">
                      <FaInfoCircle className="h-5 w-5" />
                    </button>
                    <button className="text-white transition duration-300 hover:-translate-y-1">
                      <FiTrash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsAndCategories;
