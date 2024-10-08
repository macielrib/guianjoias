"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";
import AdminTable from "./table/AdminTable";
import { useState } from "react";

const AdminPanel = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Permitir apenas números
    setInputValue(value.slice(0, 6)); // Limitar a 6 caracteres
  };

  return (
    <>
      <div className="flex flex-col items-center -mt-2 mb-8 px-4">
        {/* Badge: Você está gerenciando... */}
        <div className="w-full max-w-5xl bg-transparent py-2 px-6 rounded-lg mt-4 flex flex-col md:flex-row items-start md:items-center gap-3 justify-start">
          <BsPatchCheckFill className="text-[#F2DD52] text-2xl sm:text-xl" />
          <p className="font-poppins text-md text-[#F2DD52] font-medium">
            Você está gerenciando o seu website como um administrador!
          </p>
        </div>

        {/* Texto: Olá, administrador */}
        <div className="w-full max-w-5xl px-4 mt-4 lg:px-8 text-start">
          <h1 className="font-poppins text-3xl mb-2 text-white font-medium transition duration-300">
            Olá, <span className="text-[#F2DD52]">@administrator!</span>
          </h1>
          <p className="font-poppins font-normal text-md text-[#4F4F4F] mb-8">
            Você está no seu painel administrativo, fique à vontade para
            modificar o seu website!
          </p>

          <div className="flex flex-col items-center md:flex-row gap-2"></div>

          <div className="flex flex-col md:flex-row mx-auto gap-1.5 md:gap-0 items-center">
            <p className="font-poppins font-normal text-sm inline-flex items-center text-white">
              45 produtos registrados.{" "}
              <span className="text-[#4F4F4F] px-2 text-2xl hidden md:block">
                •
              </span>
            </p>
            <p className="font-poppins font-normal text-sm inline-flex items-center text-white">
              60 clientes encontrados.
            </p>
          </div>
        </div>

        {/* Título: Resumo de vendas e Input de Pesquisa */}
        <div className="w-full max-w-5xl px-4 mt-8 lg:px-8 flex flex-col md:flex-row items-center justify-start gap-4 md:gap-2 text-start">
          {/* Título: Resumo de vendas */}
          <h2 className="font-poppins text-xl text-white font-normal mr-2">
            Resumo de vendas
          </h2>

          {/* Input de Pesquisa */}
          <div className="relative w-full max-w-[400px] transition duration-300">
            <input
              type="text"
              placeholder="Pesquisar um pedido por ID"
              value={inputValue}
              onChange={handleChange}
              className="w-full h-[39px] pl-10 pr-4 bg-transparent text-[#BEBEBE94] border !border-[#4F4F4F] rounded-full font-poppins text-sm placeholder-[#BEBEBE94] outline-none transition duration-300"
            />
            <AiOutlineSearch
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#BEBEBE94]"
              size={20}
            />
          </div>
        </div>
        <div className="flex items-center mx-auto">
          <AdminTable />
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
