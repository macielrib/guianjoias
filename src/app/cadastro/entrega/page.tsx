"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Endereco = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (event: { preventDefault: () => void }) => {
    event.preventDefault(); 
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [cep, setCep] = useState('');

  const handleChange = (e: { target: { value: any; }; }) => {
    const input = e.target.value;
    // Remove caracteres não numéricos
    const numbers = input.replace(/\D/g, '');

    // Formata o CEP no formato XXXXX-XXX
    const formattedCep = numbers.replace(/(\d{5})(\d{0,3})/, '$1-$2');

    setCep(formattedCep);
  };
  
  return (
    <>
      {/* Background Radial */}
      <div
        className="lg:-mt-2 min-h-screen w-full bg-black flex items-center justify-center relative"
        style={{
          background: `radial-gradient(124.33% 124.33% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(255, 199, 0, 0.21) 100%)`,
          backgroundSize: "110% 200%",
          backgroundPosition: "top left, top right, bottom left, bottom right",
        }}
      >
        {/* Background no mobile */}
        <div className="absolute inset-0 bg-black lg:bg-[radial-gradient(124.33%_124.33%_at_50%_50%,_rgba(0,_0,_0,_0)_0%,_rgba(255,_199,_0,_0.21)_100%)] bg-no-repeat bg-cover"></div>

        {/* Página de Criação de Conta */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:-mt-28 py-4 lg:py-8 px-4 lg:px-6">
          {/* Área Esquerda para o Título, Descrição e Stepper */}
          <div className="w-full lg:w-1/2 text-center lg:text-start lg:items-start flex flex-col items-center justify-center mb-6 lg:mb-0">
            {/* Título */}
            <h1 className="text-[#FBF7C6] font-poppins text-3xl max-w-md lg:text-5xl lg:max-w-lg font-normal mb-4 lg:mb-6">
              Complete com o seu endereço.
            </h1>

            {/* Descrição */}
            <p className="text-[#606060] font-poppins text-lg lg:text-xl lg:max-w-md font-normal mb-8 lg:mb-16">
              Quando realizar uma compra, a encomenda será enviada para este
              endereço.
            </p>

            {/* Stepper */}
            <div className="flex items-center w-full max-w-sm mb-8 justify-center">
              {/* Número 1 */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center z-20 w-12 h-12 lg:w-16 lg:h-16 bg-[#ECC923] text-[#3E210A] rounded-full font-poppins text-xl lg:text-2xl font-bold">
                  01
                </div>
                <p className="text-[#ECC923] mt-2 font-poppins font-medium text-md">
                  Dados pessoais
                </p>
              </div>

              {/* Conector Branco */}
              <div className="flex-1 -mt-6 h-2 lg:h-3 bg-[#ECC923] z-0 -mx-16 rounded"></div>

              {/* Número 2 */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center z-20 w-12 h-12 lg:w-16 lg:h-16 bg-[#ECC923] text-[#3E210A] rounded-full font-poppins text-xl lg:text-2xl font-bold">
                  02
                </div>
                <p className="text-[#ECC923] mt-2 font-poppins font-medium text-md">
                  Dados de entrega
                </p>
              </div>
            </div>
          </div>

          {/* Divisória Central (visível apenas no desktop) */}
          <div
            className="hidden lg:block w-[2px] rounded-full h-40 lg:h-[162px] bg-[#242424] absolute top-1/2 tsransform -translate-y-1/2"
            style={{ left: "calc(50% - 1px)" }}
          ></div>

          {/* Área Direita para Inputs e Campos */}
          <div className="w-full lg:w-8/12 text-center lg:text-start pl-2 lg:pl-40 py-4">
            <p className="text-white font-poppins text-2xl font-normal !mt-6 mb-6 w-full">
              Endereço de entrega para os produtos
            </p>
            {/* Formulário */}
            <form className="space-y-5 items-center lg:items-start mx-auto justify-center text-center flex flex-col">
              {/* Input de Endereço de Entrega */}
              <div className="relative flex items-center  lg:items-start flex-col w-full lg:max-w-[458px] lg:w-[458px] lg:px-0  px-4">
                <p className="font-poppins font-light text-white text-md mb-3 ml-2">
                  Endereço de entrega
                </p>
                <input
                  type="text"
                  placeholder="Digite a rua"
                  className="border-2 !border-[#4F4F4F] bg-transparent rounded-xl py-6 pl-6 placeholder:text-[#4F4F4F] text-[#4F4F4F] font-poppins font-normal text-md w-full lg:max-w-full h-[48px] focus:!border-[#4F4F4F] focus:outline-none transition duration-300"
                />
                <p className="font-poppins text-xs font-normal text-[#4F4F4F] py-2 px-2">
                  Ex: Rua dos Santos, 00
                </p>
              </div>

              {/* Inputs de CEP e Estado lado a lado */}
              <div className="flex justify-start items-center w-full space-x-8">
                {/* Input para Número do CEP */}
                <div className="flex flex-col items-start text-start w-full max-w-[290px]">
                  <p className="font-poppins font-light text-white text-md mb-3 ml-2">
                    Número do CEP para entrega
                  </p>
                  <input
        type="text"
        placeholder="Apenas números"
        value={cep}
        onChange={handleChange}
        maxLength={9} // Limita o número máximo de caracteres
        className="border-2 max-h-10 !border-[#4F4F4F] bg-transparent rounded-xl py-6 pl-3 lg:pl-6 placeholder:text-[#4F4F4F] text-[#4F4F4F] font-poppins font-normal text-md w-full focus:!border-[#4F4F4F] focus:outline-none transition duration-300"
      />
                </div>

                {/* Dropdown para Escolha do Estado */}
                <div className="flex flex-col  relative">
                  <p className="font-poppins font-light text-white text-sm md:text-md mb-3 ml-2">
                    Escolha o estado
                  </p>
                  <div className="relative mt-1">
                    <button
                      onClick={toggleDropdown}
                      className="text-white border-2 max-h-10 !border-[#4F4F4F] rounded-xl py-6 px-4 flex justify-between items-center w-full focus:outline-none"
                    >
                      <span className="font-poppins text-md">Estado</span>
                      <FaChevronDown className="text-white text-xs ml-auto" />
                    </button>
                    {isDropdownOpen && (
  <div className="absolute mt-2 w-full bg-[#1D1D1D] rounded-xl shadow-lg overflow-hidden">
    <ul className="text-white font-poppins text-sm transition-all duration-300 ease-in-out">
      <li className="py-3 px-4 hover:bg-[#282828] cursor-pointer transition-colors duration-200 ease-in-out">
        São Paulo
      </li>
      <li className="py-3 px-4 hover:bg-[#282828] cursor-pointer transition-colors duration-200 ease-in-out whitespace-nowrap">
        Rio de Janeiro
      </li>
      <li className="py-3 px-4 hover:bg-[#282828] cursor-pointer transition-colors duration-200 ease-in-out">
        Minas Gerais
      </li>
    </ul>
  </div>
)}

                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center  w-full space-x-8">
                {/* Input para Número do CEP */}
                <div className="relative flex flex-col items-start text-start w-full max-w-[216px]">
                  <p className="font-poppins font-light text-white text-md mb-3 ml-2">
                    Número da casa
                  </p>
                  <input
                    type="text"
                    placeholder="Apenas números"
                    className="border-2 max-h-10 !border-[#4F4F4F] bg-transparent rounded-xl py-6 pl-3 lg:pl-6 placeholder:text-[#4F4F4F] text-[#4F4F4F] font-poppins font-normal text-md w-full focus:!border-[#4F4F4F] focus:outline-none transition duration-300"
                  />

                  {/* Checkbox posicionado sem alterar a altura */}
                  <div className="absolute mt-2 -bottom-8 flex flex-col items-start px-2">
                    <label className="flex items-center text-sm font-poppins text-[#FDFBE9]">
                      <input type="checkbox" className="custom-checkbox" />
                      <span className="ml-2 font-poppins font-light text-sm">
                        Sem número
                      </span>
                    </label>
                  </div>
                </div>

                {/* Input para Escolha do Estado */}
                <div className="flex flex-col items-start text-start w-full max-w-[216px]">
                  <p className="font-poppins font-light text-white text-sm md:text-md mb-3 ml-2">
                    Qual é a sua cidade?
                  </p>
                  <input
                    type="text"
                    placeholder="Digite a cidade"
                    className="border-2 max-h-10 !border-[#4F4F4F] bg-transparent rounded-xl py-6 pl-6 placeholder:text-[#4F4F4F] text-[#4F4F4F] font-poppins font-normal text-md w-full focus:!border-[#4F4F4F] focus:outline-none transition duration-300"
                  />
                </div>
              </div>
              <div className="!mt-14 !mr-6  flex items-start  text-start  lg:items-start flex-col w-full lg:max-w-[458px] lg:w-[458px] lg:px-0  px-4">
                <p className="font-poppins font-light text-white text-md mb-3 ml-2">
                  Complemento (Opcional)
                </p>
                <input
                  type="text"
                  placeholder="Alguma observação?"
                  className="border-2 !border-[#4F4F4F] bg-transparent rounded-xl py-6 pl-6 placeholder:text-[#4F4F4F] text-[#4F4F4F] font-poppins font-normal text-md w-full lg:max-w-full h-[48px] focus:!border-[#4F4F4F] focus:outline-none transition duration-300"
                />
                <p className="font-poppins text-xs font-normal text-[#4F4F4F] py-2 px-2">
                Ex: 8º andar, apartamento 6.
                </p>
              </div>
              <button
                type="submit"
                className="bg-[#F2DD52] flex items-center text-center justify-center text-black font-poppins  font-medium text-[15px] w-[297px] h-[52px] mt-6 rounded-full transition-opacity hover:opacity-90"
              >
                Completar registro
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Endereco;
