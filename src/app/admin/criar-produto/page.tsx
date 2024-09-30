"use client";

import Image from "next/image";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaCheck, FaChevronDown, FaRegTrashAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
import { SetStateAction, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

// Carregando o Quill dinamicamente para evitar problemas de renderização no lado do servidor
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Importando os estilos do Quill
import Link from "next/link";

const CriarProduto = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const [values, setValues] = useState([220, 2500]);

  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);

  const handleCheckboxChange = (category: string) => {
    setCheckedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleReset = () => {
    setValues([220, 2500]);
  };
  const handleEditorChange = (html: SetStateAction<string>) => {
    setEditorHtml(html);
  };

  return (
    <div className="flex flex-col -mt-2 px-4 lg:px-56 w-full">
      {/* Seção "Você está gerenciando o seu website" */}
      <div className="w-full max-w-5xl bg-transparent py-2 px-6 rounded-lg mt-4 flex items-center gap-3 justify-start">
        <BsPatchCheckFill className="text-[#F2DD52] text-4xl sm:text-xl" />
        <p className="font-poppins text-md text-[#F2DD52] font-medium">
          Você está gerenciando o seu website como um administrador!
        </p>
      </div>

      {/* Seção de formulário e imagens com espaçamento adicional */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_auto] gap-2 pt-12 lg:pr-28 w-full lg:ml-0 items-start">
        {/* Conteúdo da esquerda - Formulário */}
        <div className="w-full max-w-5xl px-4 lg:px-8 text-start">
          <h1 className="font-poppins text-2xl mb-6 text-white font-medium transition duration-300 w-full md:whitespace-nowrap">
            Criar produto na categoria{" "}
            <span className="text-[#F2DD52]">“Nome da Categoria”</span>
          </h1>
          <div className="relative mt-2 flex flex-col mb-6">
            <p className="font-poppins text-[#FDFBE9] font-normal text-md mb-4 ml-2">
              Nome do produto
            </p>
            <input
              type="text"
              placeholder="Qual é o nome do produto?"
              className="border !border-[#4F4F4F] bg-transparent rounded-full py-4 px-3 pl-8 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm w-[350px] md:w-[477px] h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
              maxLength={9}
            />
          </div>
          <div className="relative mt-2 flex flex-col mb-6">
            <p className="font-poppins text-[#FDFBE9] font-normal text-md mb-4 ml-2">
              Preço do produto
            </p>
            <input
              type="text"
              placeholder="Apenas números"
              className="border !border-[#4F4F4F] bg-transparent rounded-full py-4 px-3 pl-8 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm w-[201px] h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
              maxLength={9}
            />
          </div>

          {/* Campo de descrição do produto */}
          <div className="relative mt-2 flex flex-col mb-8">
            <p className="font-poppins text-[#FDFBE9] font-normal text-md ml-4">
              Descrição do produto
            </p>
            <ReactQuill
              value={editorHtml}
              onChange={handleEditorChange}
              modules={{
                toolbar: [
                  [{ header: [1, 2, false] }],
                  ["bold", "italic", "blockquote", "code-block"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["clean"],
                ],
              }}
              className="rounded-lg bg-transparent h-64 mb-8"
              placeholder="Descrição elaborada do produto" // Defina o placeholder aqui
            />
          </div>
          <div className="flex flex-col mb-6">
            <h1 className="font-poppins font-medium text-white text-xl pl-2 mb-4">
              Escolher o tamanho do produto
            </h1>
            <div className="space-y-2">
              {[
                "Este produto é um tamanho único",
                "Este produto terá mais de um tamanho",
              ].map((category) => (
                <label
                  key={category}
                  className="flex items-center space-x-3 text-md font-poppins font-normal cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={checkedCategories.includes(category)}
                    onChange={() => handleCheckboxChange(category)}
                    className="hidden"
                  />
                  <div
                    className={`w-4 h-4 border-2 rounded-sm ${
                      checkedCategories.includes(category)
                        ? "border-[#F2DD52] bg-[#F2DD52]"
                        : "border-[#4F4F4F]"
                    } flex items-center justify-center`}
                  >
                    {checkedCategories.includes(category) && (
                      <FaCheck className="text-xs text-black" />
                    )}
                  </div>
                  <span className="text-white font-poppins font-light text-md">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="relative mt-2 flex flex-col mb-6">
            <p className="font-poppins text-[#FDFBE9] font-normal text-md mb-4 ml-2">
              Tamanho fixo do produto
            </p>
            <input
              type="text"
              placeholder="Em centimetro"
              className="border !border-[#4F4F4F] bg-transparent rounded-full py-4 px-3 pl-8 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm w-[201px] h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
            />
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-poppins text-[#FDFBE9] font-normal text-md ml-2">
              Adicionar tamanhos personalizados
            </p>
            <div className="flex flex-col lg:flex-row items-start xl:items-center py-6 gap-4">
              <div className="relative mt-4 w-full max-w-[14rem]  mb-6 md:pl-2">
                <button
                  onClick={toggleDropdown}
                  className="text-white border border-[#4F4F4F] rounded-xl h-[50px] py-4 px-4 flex justify-between items-center w-full focus:outline-none"
                >
                  <span className="font-poppins text-sm">Escolher letra</span>
                  <FaChevronDown className="text-white text-xs ml-auto" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute mt-2 w-full bg-[#1D1D1D] rounded-xl shadow-lg">
                    <ul className="text-white font-poppins text-sm">
                      <li className="py-2 px-4 hover:bg-[#171717] cursor-pointer transition-all">
                        Mais recentes
                      </li>
                      <li className="py-2 px-4 hover:bg-[#171717] cursor-pointer transition-all">
                        Maior preço
                      </li>
                      <li className="py-2 px-4 hover:bg-[#171717] cursor-pointer transition-all">
                        Menor preço
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <input
                type="text"
                placeholder="Tamanho"
                className="border !border-[#4F4F4F] bg-transparent rounded-full py-4 px-3 pl-8 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm w-[201px] h-[50px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
              />
              <button className="py-3 px-4 font-poppins font-medium transition duration-300 hover:-translate-y-1  bg-[#F2DD52] w-full max-w-[160px] h-[50px] text-black rounded-full text-sm">
                Adicionar
              </button>
            </div>
          </div>
          <div className="mb-6 w-full max-w-[391px] h-full max-h-[109px] border border-[#4F4F4F] bg-[#171717] rounded-lg ">
            <div className="flex flex-col py-6 px-8 gap-3">
              <div className="flex justify-between font-poppins text-white font-normal text-md">
                <p>Tamanho A</p>
                <span className="inline-flex gap-4 items-center">10,5cm<button><FaRegTrashCan  className="transition duration-300 hover:scale-105"/></button></span>
              </div>
              <div className="flex justify-between font-poppins text-white font-normal text-md">
                <p>Tamanho B</p>
                <span className="inline-flex gap-4 items-center">16,0cm<button className="transition duration-300 hover:scale-105"><FaRegTrashCan/></button></span>
              </div>
            </div>
          </div>

         <button  className="mt-6 mb-6 py-4 px-14 bg-[#F2DD52] font-poppins text-sm text-black font-medium rounded-full transition duration-300 hover:scale-105">Criar produto na categoria</button>
        </div>

        {/* Conteúdo da direita - Imagens */}
        <div className="sticky top-20 py-24 md:py-12 lg:py-4 flex flex-col items-center text-center xl:ml-auto lg:ml-16">
          {/* Imagem principal maior */}
          <Image
            src={"/logo.png"}
            alt="Imagem Produto"
            width={400}
            height={400}
            className="w-full max-w-[8rem] lg:max-w-[340px] xl:max-w-[400px]"
          />
          <div className="flex items-center mx-auto py-6">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex flex-col mx-auto items-center text-center px-2"
              >
                <Image
                  src={"/logo.png"}
                  alt="Imagem Produto"
                  width={100}
                  height={100}
                  className="mb-4"
                />
                <button className="rounded-full py-2 px-2 bg-[#F2DD52] transition duration-300 hover:-translate-y-1">
                  <FaRegTrashAlt className="text-black w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
          <button className="py-3 px-4 font-poppins font-medium transition duration-300 hover:-translate-y-1 mb-6 bg-[#F2DD52] w-full max-w-[200px] h-[50px] text-black rounded-full text-sm">
            Adicionar imagem
          </button>
        </div>
      </div>

      {/* Estilo CSS personalizado para o placeholder */}
      <style jsx>{`
        .ql-container.ql-snow .ql-editor.ql-blank::before {
          color: #4f4f4f; /* Cor do placeholder */
          font-style: italic; /* Estilo do texto do placeholder */
        }
      `}</style>
    </div>
  );
};

export default CriarProduto;
