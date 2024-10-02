"use client";

import { usePathname } from "next/navigation";
import { PiUserCircleFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";
import { RiEditCircleFill } from "react-icons/ri";
import Link from "next/link";
import ClientTable from "./client-table/page";
import { useState } from "react";

const PanelClient = () => {
  const pathname = usePathname(); // Obtendo a rota atual

  const isActiveLink = (route: string) => pathname === route;

  // Estados dos inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="flex flex-col -mt-2 mb-8 px-4 items-center">
      {/* Badge: Você está gerenciando... */}
      <div className="flex flex-col gap-4 text-center  md:text-start lg:flex-row justify-between items-center lg:items-end w-full max-w-5xl">
        <div className="flex items-center gap-4 mb-2">
          <PiUserCircleFill className="text-[#ECC923] hidden md:block h-10 w-10" />
          <div className="flex flex-col">
            <h1 className="text-[#FBF7C6] font-poppins text-lg font-normal">Augusto</h1>
            <p className="text-[#6D6D6D] font-poppins text-sm font-normal">
              Bem-vindo(a) ao seu painel do cliente. Como podemos lhe ajudar hoje?
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <PiUserCircleFill className="text-[#ECC923] hidden md:block h-6 w-6" />
          <p className="text-md font-poppins font-normal text-white">Conta registrada em: 00/00/0000</p>
        </div>
      </div>
      <div className="flex flex-col text-center mx-auto lg:ml-24 lg:mx-0 lg:text-start lg:flex-row mt-12 gap-8 mb-8">
        <div className="flex flex-col mx-auto lg:mx-0 gap-4">
          <Link
            href="/painel-cliente"
            className={`font-poppins text-lg font-normal flex items-center transition duration-300 hover:-translate-y-1 gap-2 ${isActiveLink("/painel-cliente") ? "text-[#ECC923]" : "text-[#FBF7C6]"}`}
          >
            <FaHome className="text-[#ECC923] h-8 w-8" /> Início
          </Link>
          <Link
            href="/painel-cliente/meus-pedidos"
            className={`font-poppins text-lg font-normal flex items-center  transition duration-300 hover:-translate-y-1 gap-2 ${isActiveLink("/painel-cliente/meus-pedidos") ? "text-[#ECC923]" : "text-[#FBF7C6]"}`}
          >
            <TbChecklist className="text-[#ECC923] h-8 w-8" /> Meus pedidos
          </Link>
          <Link
            href="/painel-cliente/alterar-dados"
            className={`font-poppins text-lg font-normal flex items-center transition duration-300 hover:-translate-y-1 gap-2 ${isActiveLink("/painel-cliente/alterar-dados") ? "text-[#ECC923]" : "text-[#FBF7C6]"}`}
          >
            <RiEditCircleFill className="text-[#ECC923] h-8 w-8" /> Alterar dados
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row lg:px-24 lg:-mt-6 gap-4">
          <div className="flex flex-col mx-auto lg:mx-0">
            <div className="relative mt-2 flex flex-col mb-2">
              <p className="font-poppins text-[#FDFBE9] font-normal text-sm mb-4 ml-2">Nome completo</p>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Lorem ipsum dolor sit amet elit"
                className="border-2 !border-[#4F4F4F] bg-transparent rounded-lg py-4 px-3 pl-8 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm w-[224px] md:w-[477px] h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
                maxLength={50}
              />
            </div>
            <div className="relative mt-2 flex flex-col mb-2 mx-auto lg:mx-0">
              <p className="font-poppins text-[#FDFBE9] font-normal text-sm mb-4 ml-2">Endereço de E-mail</p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="lorem.ipsumdolor@siatmet.elit"
                className="border-2 !border-[#4F4F4F] bg-transparent rounded-lg py-4 px-3 pl-8 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm w-[224px] md:w-[477px] h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
                maxLength={50}
              />
            </div>
          </div>
          <div className="flex flex-col mx-auto lg:mx-0">
            <div className="relative mt-2 flex  flex-col mb-2">
              <p className="font-poppins text-[#FDFBE9] font-normal text-sm mb-4 ml-2">Senha da sua conta</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="**************"
                className="border-2 !border-[#4F4F4F] bg-transparent rounded-lg py-4 px-3 pl-8 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm w-[224px] h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
                maxLength={50}
              />
            </div>
            <div className="relative mt-2 flex flex-col mb-2">
              <p className="font-poppins text-[#FDFBE9] font-normal text-sm mb-4 ml-2">Número do telefone</p>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="00000000000"
                className="border-2 !border-[#4F4F4F] bg-transparent rounded-lg py-4 px-3 pl-8 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm w-[224px] h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
                maxLength={15}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto items-center lg:items-start">
        <h1 className="mb-4 text-start font-poppins text-white text-xl font-normal">Resumo dos pedidos</h1>
        <ClientTable />
      </div>
    </div>
  );
};

export default PanelClient;
