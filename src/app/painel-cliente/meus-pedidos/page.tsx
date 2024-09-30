"use client";

import { usePathname } from "next/navigation";
import { PiUserCircleFill } from "react-icons/pi";
import { FaHome, FaRegClone } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";
import { RiEditCircleFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const MeusPedidos = () => {
  const pathname = usePathname(); // Obtendo a rota atual

  const [filtro, setFiltro] = useState<"Em andamento" | "Concluídos">(
    "Em andamento"
  );

  const pedidos = [
    {
      numero: 435931,
      status: "Aguardando envio",
      codigoRastreio: null,
      metodoPagamento: "Crédito",
      valorTotal: 5000,
      produtos: [
        {
          nome: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
          preco: 2500,
          tamanho: "10,5cm",
          quantidade: 1,
          imagem: "/assets/joias/joia3.png",
        },
        {
          nome: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
          preco: 2500,
          tamanho: "10,5cm",
          quantidade: 1,
          imagem: "/assets/joias/joia3.png",
        },
      ],
    },
    {
      numero: 435932,
      status: "Encomenda enviada",
      codigoRastreio: "AA123456785BR",
      metodoPagamento: "Pix",
      valorTotal: 3500,
      produtos: [
        {
          nome: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
          preco: 2500,
          tamanho: "10,5cm",
          quantidade: 1,
          imagem: "/assets/joias/joia3.png",
        },
        {
          nome: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
          preco: 2500,
          tamanho: "10,5cm",
          quantidade: 1,
          imagem: "/assets/joias/joia3.png",
        },
      ],
    },
  ];

  const isActiveLink = (route: string) => pathname === route;

  const filtrarPedidos = (status: "Em andamento" | "Concluídos") => {
    setFiltro(status);
  };

  const pedidosFiltrados =
    filtro === "Em andamento"
      ? pedidos.filter((pedido) => pedido.status !== "Concluído")
      : pedidos.filter((pedido) => pedido.status === "Concluído");

  return (
    <div className="flex flex-col -mt-2 mb-8 px-4 lg:ml-64">
      {/* Badge: Você está gerenciando... */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end w-full max-w-5xl">
        <div className="flex items-center gap-4 mb-2">
          <PiUserCircleFill className="text-[#ECC923] h-10 w-10" />
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
          <PiUserCircleFill className="text-[#ECC923] h-6 w-6" />
          <p className="text-md font-poppins font-normal text-white">
            Conta registrada em: 00/00/0000
          </p>
        </div>
      </div>
      <div className="flex flex-col text-center mx-auto lg:mx-0 lg:text-start lg:flex-row mt-12 gap-8 mb-8">
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
            className={`font-poppins text-lg font-normal flex items-center transition duration-300 hover:-translate-y-1 gap-2 ${
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

        {/* Aqui para inserir o conteúdo da direita depois da navbar */}
        <div className="flex flex-col w-full max-w-4xl lg:ml-12">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <h1 className="font-poppins text-white font-normal text-2xl">
                Resumo dos seus <span className="text-[#ECC923]">Pedidos!</span>
              </h1>

              <h1 className="font-poppins text-md lg:mr-10 text-white font-normal">
                🎉 Você já possui {pedidos.length} compras registradas!
              </h1>
            </div>
            <div className="flex items-center py-4">
              <p className="font-poppins text-md text-[#FBF7C6] font-normal">
                Filtrar por
              </p>
              <div className="flex items-center w-full max-w-[748px] mx-auto">
                <button
                  className={`w-full max-w-md h-[34px] flex items-center justify-center rounded-l-full ${
                    filtro === "Em andamento" ? "bg-[#F2DD52]" : "bg-[#4F4F4F]"
                  }`}
                  onClick={() => filtrarPedidos("Em andamento")}
                >
                  <p
                    className={`font-poppins text-sm font-normal ${
                      filtro === "Em andamento"
                        ? "text-[#171717]"
                        : "text-white"
                    }`}
                  >
                    Em andamento
                  </p>
                </button>
                <button
                  className={`w-full max-w-md h-[34px] flex items-center justify-center rounded-r-full ${
                    filtro === "Concluídos" ? "bg-[#F2DD52]" : "bg-[#4F4F4F]"
                  }`}
                  onClick={() => filtrarPedidos("Concluídos")}
                >
                  <p
                    className={`font-poppins text-sm font-normal ${
                      filtro === "Concluídos" ? "text-[#171717]" : "text-white"
                    }`}
                  >
                    Concluídos
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Conteúdo dos pedidos */}
          <div className="flex flex-col py-4 gap-4">
            {pedidosFiltrados.length === 0 ? (
              <p className="text-[#FBF7C6] font-poppins text-lg text-center">
                Não há pedidos na categoria selecionada.
              </p>
            ) : (
              pedidosFiltrados.map((pedido, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full max-w-4xl h-full bg-[#171717] rounded-xl p-6"
                >
                  {/* Cabeçalho com número do pedido e status */}
                  <div className="flex justify-between mb-6 py-2 px-10">
                    <p className="font-medium text-md font-poppins text-[#FBF7C6]">
                      Pedido #{pedido.numero}
                    </p>
                    <p className="font-poppins text-[#F2DD52] font-normal text-md">
                      {pedido.status}
                    </p>
                  </div>

                  {/* Loop para exibir os produtos do pedido */}
                  {pedido.produtos.map((produto, index) => (
                    <div
                      key={index}
                      className="flex flex-col px-10 lg:flex-row gap-4 mb-6 items-start"
                    >
                      {/* Imagem do produto */}
                      <div className="flex-shrink-0 mx-auto lg:mx-0">
                        <Image
                          src={produto.imagem}
                          alt="Imagem do Produto"
                          width={136}
                          height={136}
                          className="w-[136px] h-[136px] rounded-md"
                        />
                      </div>

                      {/* Detalhes do produto */}
                      <div className="flex flex-col justify-between">
                        <div className="mb-2">
                          <h1 className="font-poppins text-lg font-normal text-[#FBF7C6]">
                            {produto.nome}
                          </h1>
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="font-poppins text-md font-normal text-[#F2DD52]">
                            R$ {produto.preco.toFixed(2)}
                          </p>
                          <p className="font-poppins text-md font-normal text-[#F2DD52]">
                            Tamanho:{" "}
                            <span className="text-[#FBF7C6]">
                              {produto.tamanho}
                            </span>
                          </p>
                          <p className="font-poppins text-md font-normal text-[#F2DD52]">
                            Quantidade:{" "}
                            <span className="text-[#FBF7C6]">
                              {produto.quantidade}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="w-full max-w-[791px] ml-10 bg-[#4F4F4F] text-[#4F4F4F] h-[1.5px] rounded-full"></div>
                  <div className="flex flex-wrap gap-2 lg:flex-row justify-between items-center py-4 px-10">
                    {/* <p className="font-poppins flex items-center gap-1.5 text-[#FBF7C6] text-md font-normal">
                      Código de rastreio:{" "}
                      <button className="text-[#F2DD52] inline-flex items-center gap-2">
                        AA123456785BR <FaRegClone />
                      </button>
                    </p> */}
                    <p className="font-poppins flex items-center gap-2 text-[#FBF7C6] text-md font-normal">
                      Código de rastreio:{" "}
                      <button className="text-[#F2DD52] inline-flex items-center gap-2">
                      Aguarde a encomenda ser enviada.
                      </button>
                    </p>
                    {/* <button className="py-3 px-6 bg-[#F2DD52] text-black items-center font-medium text-center font-poppins text-sm rounded-full">
                      Eu recebi o produto
                    </button> */}
                    <button className="py-3 px-6 bg-[#4F4F4F] text-black items-center font-medium text-center font-poppins text-sm rounded-full">
                      Eu recebi o produto
                    </button>
                  </div>
                  <div className="w-full max-w-[791px] ml-10 mb-4 bg-[#4F4F4F] text-[#4F4F4F] h-[2px] rounded-full"></div>
                  <div className="flex flex-wrap gap-2 lg:flex-row justify-between items-center px-10">
                    <p className="font-poppins text-[#FBF7C6] text-md font-normal">
                      Método de pagamento:{" "}
                      <span className="text-[#F2DD52] ">Pix</span>
                    </p>
                    <h1 className="text-[#FBF7C6] flex font-poppins text-sm items-center gap-2">
                      <Image
                        src={"/logo.png"}
                        width={32}
                        height={32}
                        alt="Image Product"
                      ></Image>{" "}
                      Valor total da compra:{" "}
                      <span className="text-[#F2DD52]">R$ 3.500,00</span>
                    </h1>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeusPedidos;
