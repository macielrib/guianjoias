"use client";

import Image from "next/image";
import Link from "next/link";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { FaImage } from "react-icons/fa6";
import Tooltip from "@/app/components/Tooltip";
import { useState } from "react";
import { motion, AnimatePresence  } from "framer-motion";







const ProductsAndCategories = () => {



  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <>
      <div className="flex flex-col -mt-8 px-4 items-center w-full">
        <div className="bg-[#F2DD52] hidden md:block rounded-md w-full max-w-2xl lg:max-w-5xl xl:max-w-6xl h-4 md:ml-16 mt-4"></div>
        {/* Badge: Você está gerenciando... */}
        <div className="w-full max-w-5xl bg-transparent text-center md:text-start py-2 rounded-lg mt-4 flex flex-col md:flex-row items-center gap-3 justify-start">
          <BsPatchCheckFill className="text-[#F2DD52] text-2xl sm:text-xl" />
          <p className="font-poppins text-md text-[#F2DD52] font-medium">
            Você está gerenciando o seu website como um administrador!
          </p>
        </div>

        {/* Texto: Olá, administrador */}
        <div className="w-full max-w-5xl mt-4 text-center md:text-start">
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

      <div className="flex flex-col md:flex-row xl:ml-36 gap-8 py-2 px-4 items-center md:items-start justify-center">
        {/* Card de Criar Categoria */}
        <div className="flex flex-col w-full max-w-[300px] md:max-w-[340px] h-full max-h-[545px] rounded-lg bg-[#171717]">
          <div className="flex flex-col py-6 px-6 items-start justify-start">
            <h1 className="font-poppins text-white font-normal text-xl mb-4">
              Criar categoria
            </h1>
            <div className="relative mt-2 flex items-center">
              <input
                type="text"
                placeholder="Nome da categoria"
                className="border !border-[#4F4F4F] bg-transparent rounded-full py-4 px-3 pl-10 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm  w-[250px] sm:!w-[250px] md:!w-[290px] lg:w-[297px] h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
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
         
                    <Link
                      href="asd"
                      className="flex justify-between w-full max-w-sm rounded-lg py-3 px-8 items-center mb-4 border-2 border-[#F2DD52]"
                    >
                      <h1 className="font-poppins text-white font-medium text-md">
                       Categoria 1
                      </h1>
                      <button className="text-white transition duration-300 hover:-translate-y-1">
                        <FiTrash2 className="h-5 w-5" />
                      </button>
                    </Link>
           
              </div>
            </div>

            {/* Gradiente para desvanecimento */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#171717] to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Seção de Produtos na Categoria */}
        <div className="flex flex-col w-full max-w-[800px]">
        <div className="flex flex-col w-full max-w-[800px]">
          <div className="flex flex-col items-center  lg:flex-row justify-between py-2 px-2 mx-auto md:mx-0 text-center md:text-start">
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
          <div className="w-full max-w-[1280px] mx-auto lg:-mt-3 px-2">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 text-center p-4 text-[#DCC373] font-normal font-poppins text-md bg-transparent">
              <div className="mx-auto lg:pr-5">
                <FaImage className="h-5 w-5" />
              </div>
              <div>Nome do produto</div>
              <div>Criado em</div>
              <div>Ações</div>
            </div>

            <div className="overflow-y-auto max-h-[410px] !scrollbar-thin !scrollbar-thumb-[#F2DD52] scrollbar-track-[#212020] scrollbar-rounded-md pr-4">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-2 px-4 text-center items-center bg-[#171717] text-white text-sm font-poppins border border-[#4F4F4F] mb-4 w-full rounded-xl">
                <div className="flex justify-center items-center sm:col-span-1">
                  <Image
                    src="/assets/joias/pulseiraouro.png"
                    alt="Imagem do Produto"
                    width={48}
                    height={48}
                    className="rounded-md"
                  />
                </div>

                <div className="relative items-center text-center sm:col-span-1">
                  <Tooltip text="Excepteur sint occaecat cupidatat non proident">
                    <span className="truncate text-[#FBF7C6] font-poppins font-normal max-w-[150px] block whitespace-nowrap overflow-hidden text-ellipsis hover:underline cursor-pointer">
                      Excepteur sint occaecat cupidatat non proident
                    </span>
                  </Tooltip>
                </div>

                <div className="relative items-center text-center sm:col-span-1">
                  <span className="text-[#FBF7C6] font-poppins font-normal">
                    06/11/2024 - 16:11
                  </span>
                </div>

                <div className="flex justify-center items-center sm:col-span-1">
                  <button onClick={openModal}>
                    <FaInfoCircle className="h-5 w-5 text-[#F2DD52] hover:scale-110 transition-transform duration-200" />
                  </button>
                  <button className="ml-3 text-[#F2DD52] hover:scale-110 transition-transform duration-200">
                    <FiTrash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Lista de Produtos - Tabela */}
   
        </div>
      </div>

      {/* Modal para exibir informações do produto selecionado */}
   
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-[#171717] rounded-lg shadow-lg p-6 w-full max-w-md mx-auto text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-[#F2DD52] text-2xl font-poppins mb-4">Informações do Produto</h2>
              <p className="text-white text-sm mb-6">
                Aqui estão os detalhes do produto. Excepteur sint occaecat cupidatat non proident.
              </p>
              <button
                onClick={closeModal}
                className="py-2 px-4 bg-[#F2DD52] text-black font-poppins font-medium rounded-full transition duration-300 hover:-translate-y-1"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductsAndCategories;
