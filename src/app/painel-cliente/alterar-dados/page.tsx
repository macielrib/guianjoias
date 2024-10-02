"use client";

import { usePathname } from "next/navigation";
import { PiUserCircleFill } from "react-icons/pi";
import { FaChevronDown, FaHome } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";
import { RiEditCircleFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";

const PanelClient = () => {
  const pathname = usePathname(); // Obtendo a rota atual

  const isActiveLink = (route: string) => pathname === route;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col -mt-2 mb-8 px-4 lg:ml-64">
      {/* Badge: Você está gerenciando... */}
      <div className="flex flex-col gap-4 text-center  md:text-start lg:flex-row justify-between items-center lg:items-end w-full max-w-5xl">
        <div className="flex items-center gap-4 mb-2">
          <PiUserCircleFill className="text-[#ECC923] hidden md:block h-10 w-10" />
          <div className="flex flex-col">
            <h1 className="text-[#FBF7C6] font-poppins text-lg font-normal">
              Augusto
            </h1>
            <p className="text-[#6D6D6D] font-poppins text-sm font-normal">
              Bem-vindo(a) ao seu painel do cliente. Como podemos lhe ajudar
              hoje?
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <PiUserCircleFill className="text-[#ECC923] hidden md:block h-6 w-6" />
          <p className="text-md font-poppins font-normal text-white">
            Conta registrada em: 00/00/0000
          </p>
        </div>
      </div>
      <div className="flex flex-col text-center  lg:mx-0 lg:text-start lg:flex-row mt-12 gap-8 mb-8">
        <div className="flex flex-col mx-auto lg:mx-0 gap-4">
          <Link
            href="/painel-cliente"
            className={`font-poppins text-lg font-normal flex items-center transition duration-300 hover:-translate-y-1 gap-2 ${
              isActiveLink("/painel-cliente")
                ? "text-[#ECC923]"
                : "text-[#FBF7C6]"
            }`}
          >
            <FaHome className="text-[#ECC923] h-8 w-8" /> Início
          </Link>
          <Link
            href="/painel-cliente/meus-pedidos"
            className={`font-poppins text-lg font-normal flex items-center  transition duration-300 hover:-translate-y-1 gap-2 ${
              isActiveLink("/painel-cliente/meus-pedidos")
                ? "text-[#ECC923]"
                : "text-[#FBF7C6]"
            }`}
          >
            <TbChecklist className="text-[#ECC923] h-8 w-8" /> Meus pedidos
          </Link>
          <Link
            href="/painel-cliente/alterar-dados"
            className={`font-poppins text-lg font-normal flex items-center transition duration-300 hover:-translate-y-1 gap-2 ${
              isActiveLink("/painel-cliente/alterar-dados")
                ? "text-[#ECC923]"
                : "text-[#FBF7C6]"
            }`}
          >
            <RiEditCircleFill className="text-[#ECC923] h-8 w-8" /> Alterar
            dados
          </Link>
        </div>
        <div className="flex flex-col lg:px-8 gap-4">
          <h1 className="text-3xl font-poppins font-normal text-white mb-4 py-2">
            Alterar os seus <span className="text-[#F2DD52]">dados</span>
          </h1>
          <h2 className="font-poppins text-lg text-white font-normal mb-2">
            Dados de entrega
          </h2>

          <div className="flex flex-col w-full mx-auto lg:mx-0">
            <div className="relative px-6 w-full max-w-[400px] mx-auto lg:mx-0 lg:max-w-[802px] mt-2 flex flex-col mb-2">
              <p className="font-poppins text-[#FDFBE9] font-normal text-sm mb-4 ml-2">
                Endereço de entrega
              </p>
              <input
                type="text"
                placeholder="Lorem ipsum dolor sit amet elit"
                className="border-2 !border-[#4F4F4F] bg-transparent rounded-lg py-4 px-3 pl-8 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm w-full max-w-[205px] md:max-w-full mx-auto md:mx-0 h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
                maxLength={50}
              />
            </div>

            <div className="flex flex-col lg:flex-row justify-between px-6 w-full gap-4 mt-4 max-w-[802px]">
              <div className="flex flex-col w-[205px] mx-auto lg:mx-0">
                <label className="font-poppins text-[#FDFBE9] font-normal text-sm mb-2">
                  Qual é a sua cidade?
                </label>
                <input
                  type="text"
                  placeholder="Lorem ipsum dolor"
                  className="border-2 !border-[#4F4F4F] mx-auto lg:mx-0 bg-transparent rounded-lg py-4 px-3 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
                />
              </div>

              <div className="flex flex-col w-[236px] mx-auto lg:mx-0">
                <label className="font-poppins text-[#FDFBE9] font-normal text-sm mb-2">
                  Número do CEP para entrega
                </label>
                <input
                  type="text"
                  placeholder="00000000"
                  className="border-2 !border-[#4F4F4F] bg-transparent rounded-lg py-4 px-3 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm w-full max-w-[205px] md:max-w-full mx-auto md:mx-0 h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
                />
              </div>

              <div className="flex flex-col w-[205px] md:w-[253px] mx-auto lg:mx-0">
                <label className="font-poppins text-[#FDFBE9] font-normal text-sm mb-2">
                  Escolha o estado
                </label>
                <div className="relative w-full">
                  <button
                    onClick={toggleDropdown}
                    className="text-white border border-[#4F4F4F] rounded-lg h-[48px] py-4 px-4 flex justify-between items-center w-full focus:outline-none"
                  >
                    <span className="font-poppins text-sm">Estado Líquido</span>
                    <FaChevronDown className="text-white text-xs ml-auto" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute mt-2 w-full bg-[#1D1D1D] rounded-xl shadow-lg">
                      <ul className="text-white font-poppins text-sm">
                        <li className="py-2 px-4 hover:bg-[#171717] cursor-pointer transition-all">
                          Item 1
                        </li>
                        <li className="py-2 px-4 hover:bg-[#171717] cursor-pointer transition-all">
                          Item 2
                        </li>
                        <li className="py-2 px-4 hover:bg-[#171717] cursor-pointer transition-all">
                          Item 3
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-start px-6 w-full gap-4 mt-4 max-w-[802px]">
              <div className="flex flex-col mx-auto lg:mx-0 w-[205px] md:w-[185px]">
                <label className="font-poppins text-[#FDFBE9] font-normal text-sm mb-2">
                  Número da casa
                </label>
                <input
                  type="text"
                  placeholder="500"
                  className="border-2 !border-[#4F4F4F] bg-transparent rounded-lg py-4 px-3 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal w-full max-w-[205px] md:max-w-full mx-auto md:mx-0 text-sm h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
                />
              </div>

              <div className="flex flex-col mx-auto lg:mx-0 w-[205px] md:w-[409px]">
                <label className="font-poppins text-[#FDFBE9] font-normal text-sm mb-2">
                  Complemento (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Nenhuma observação."
                  className="border-2 !border-[#4F4F4F] bg-transparent rounded-lg py-4 px-3 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
                />
              </div>
            </div>

            {/* Botão no final, alinhado com o primeiro input */}
            <div className="flex justify-center lg:justify-start py-6 px-6 w-full mt-4 max-w-[802px]">
              <button className="font-poppins text-sm text-black font-medium py-3 px-6 bg-[#F2DD52] rounded-full transition duration-300 hover:-translate-y-1">
                Salvar alterações
              </button>
            </div>
          </div>
          <div className="flex flex-col  gap-4">
       
       <h2 className="font-poppins text-lg text-white font-normal mb-2">
         Dados pessoais
       </h2>

       <div className="flex flex-col w-full mx-auto lg:mx-0">
    

         <div className="flex flex-col justify-start px-6 w-full gap-4 mt-4 max-w-[802px]">
           <div className="flex  mx-auto lg:mx-0 flex-col w-[205px] md:w-[458px]">
             <label className="font-poppins text-[#FDFBE9] font-normal text-sm mb-2">
               Nome completo
             </label>
             <input
               type="text"
               placeholder="Lorem ipsum dolor sit amet elit"
               className="border-2 !border-[#4F4F4F] bg-transparent rounded-lg py-4 px-3 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm h-[48px]   focus:border-[#F2DD52] focus:outline-none transition duration-300"
             />
           </div>

           <div className="flex mx-auto lg:mx-0 flex-col w-[205px] md:w-[234px]">
             <label className="font-poppins text-[#FDFBE9] font-normal text-sm mb-2">
               Senha da sua conta
             </label>
             <input
               type="text"
               placeholder="**************"
               className="border-2 !border-[#4F4F4F] bg-transparent rounded-lg py-4 px-3 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
             />
           </div>

     
         </div>

         <div className="flex flex-col justify-start px-6 w-full gap-4 mt-4 max-w-[802px]">
           <div className="flex flex-col  mx-auto lg:mx-0 w-[205px] md:w-[458px]">
             <label className="font-poppins text-[#FDFBE9] font-normal text-sm mb-2">
               Endereço de E-mail
             </label>
             <input
               type="text"
               placeholder="lorem.ipsumdolor@siatmet.elit"
               className="border-2 !border-[#4F4F4F] bg-transparent rounded-lg py-4 px-3 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
             />
           </div>

           <div className="flex flex-col mx-auto lg:mx-0 w-[205px] md:w-[234px]">
             <label className="font-poppins text-[#FDFBE9] font-normal text-sm mb-2">
               Número de telefone
             </label>
             <input
               type="text"
               placeholder="00000000000"
               className="border-2 !border-[#4F4F4F] bg-transparent rounded-lg py-4 px-3 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
             />
             
           </div>
       
     
         </div>
         <div className="flex justify-center lg:justify-start py-6 px-6 w-full mt-4 max-w-[802px]">
           <button className="font-poppins text-sm text-black font-medium py-3 px-6 bg-[#F2DD52] rounded-full transition duration-300 hover:-translate-y-1">
             Salvar alterações
           </button>
         </div>
       </div>
     </div>
        </div>
   
      </div>
    </div>
  );
};

export default PanelClient;
