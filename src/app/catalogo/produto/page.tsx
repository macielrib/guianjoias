"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaCheck, FaTruck } from "react-icons/fa";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
    oldPrice: "R$ 3.800,00",
    newPrice: "R$ 2.500,00",
    installment: "Parcelamento em até 10x sem juros",
    image: "/assets/joias/pulseiraouro.png",
  },
  {
    id: 2,
    name: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
    oldPrice: "R$ 1.200,00",
    newPrice: "R$ 900,00",
    installment: "Parcelamento em até 10x sem juros",
    image: "/assets/joias/pulseiraouro.png",
  },
  {
    id: 3,
    name: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
    oldPrice: "R$ 5.500,00",
    newPrice: "R$ 4.000,00",
    installment: "Parcelamento em até 12x sem juros",
    image: "/assets/joias/pulseiraouro.png",
  },
  {
    id: 4,
    name: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
    oldPrice: "R$ 6.000,00",
    newPrice: "R$ 5.200,00",
    installment: "Parcelamento em até 12x sem juros",
    image: "/assets/joias/pulseiraouro.png",
  },
];

const CardProduct: React.FC<{ product: (typeof products)[0] }> = ({
  product,
}) => {
  return (
    <div className="bg-[#0B0B0B] mx-auto rounded-md w-[300px] h-[460px] flex flex-col items-start justify-start p-4 transition duration-300 transform border border-transparent hover:border-[#212020]">
      <Image
        src={product.image}
        alt={product.name}
        width={250}
        height={250}
        className="mb-4 object-contain"
      />
      <h3 className="text-lg font-poppins mb-2 text-left">{product.name}</h3>
      <p className="text-sm text-[#4F4F4F] font-poppins line-through text-left">
        {product.oldPrice}
      </p>
      <p className="text-md text-[#F2DD52] font-poppins text-left">
        {product.newPrice}
      </p>
      <p className="text-xs text-[#4F4F4F] font-poppins mt-2 text-left">
        {product.installment}
      </p>
    </div>
  );
};

const ProductPage = () => {
  const [mainImage, setMainImage] = useState("/assets/joias/joia3.png");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(""); // Inicialmente desmarcado
  const [showFullDescription, setShowFullDescription] = useState(false);

  const images = [
    "/assets/joias/joia4.png",
    "/assets/joias/joia4.png",
    "/assets/joias/joia4.png",
  ];

  const [cep, setCep] = useState("");

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedCep = value
      .replace(/\D/g, "") // Remove all non-numeric characters
      .replace(/^(\d{5})(\d{1,})/, "$1-$2") // Adds the hyphen
      .slice(0, 9); // Limits the length to 9 characters
    setCep(formattedCep);
  };

  function handleImageClick(img: string) {
    setMainImage(img);
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const sizes = [
    { label: "Tamanho A", cm: "10,5cm" },
    { label: "Tamanho B", cm: "16,0cm" },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row items-start justify-center min-h-screen bg-black py-12 px-4 lg:px-0">
        {/* Imagens laterais e principal */}
        <div className="flex items-start">
          <div className="flex flex-col space-y-2">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Produto imagem ${index + 1}`}
                width={80}
                height={80}
                className="rounded-md cursor-pointer object-cover transition duration-300 hover:-translate-y-1"
                onClick={() => handleImageClick(img)}
              />
            ))}
          </div>
          <div className="ml-4">
            <Image
              src={mainImage}
              alt="Imagem principal do produto"
              width={500}
              height={500}
              className="rounded-sm object-cover transition duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Conteúdo do produto */}
        <div className="flex flex-col lg:ml-12 mt-8 lg:mt-0 max-w-xl">
          {/* Categoria e Badge */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-[#F2DD52] font-poppins text-lg font-normal">
              Lançamento Guian Joias
            </span>
            <span className="bg-[#F2DD52] text-black text-sm font-poppins font-medium py-1 px-3 rounded-lg">
              Lançamento
            </span>
          </div>

          {/* Título do Produto */}
          <h1 className="text-white font-poppins font-light text-3xl leading-tight mb-4">
            Excepteur sint occaecat cupidatat
            <br /> non proident 18k 1,4mm
          </h1>

          {/* Separador */}
          <hr className="border-t border-[#171717] w-full mb-6" />

          {/* Preços */}
          <div className="space-y-2">
            <p className="text-[#4F4F4F] font-poppins text-sm line-through">
              R$ 3.800,00
            </p>
            <p className="text-[#F2DD52] font-poppins text-xl font-normal">
              R$ 2.500,00
            </p>
            <p className="text-white font-poppins text-sm">
              Parcelamento em até 10x sem juros
            </p>
            <p className="text-[#F2DD52] font-poppins text-md font-medium">
              Estoque disponível
            </p>
          </div>

          {/* Dropdown de Tamanho */}
          <div className="relative mt-6 w-[316px]">
            <button
              onClick={toggleDropdown}
              className="text-white border border-[#4F4F4F] rounded-lg py-2 px-4 flex justify-between items-center w-full focus:outline-none"
            >
              <span className="font-poppins text-sm">
                {selectedSize ? selectedSize : "Escolha o Tamanho"}
              </span>
              <FaChevronDown className="text-white text-xs ml-auto" />
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-full bg-[#1D1D1D] rounded-lg shadow-lg z-10">
                <ul className="text-white font-poppins text-sm">
                  {sizes.map((size) => (
                    <li
                      key={size.label}
                      className="py-2 px-4 flex items-center justify-between hover:bg-[#171717] cursor-pointer transition-all"
                      onClick={() => {
                        handleSizeChange(`${size.label} ${size.cm}`);
                        toggleDropdown();
                      }}
                    >
                      <div className="flex items-center">
                        {/* Checkbox à esquerda */}
                        <div
                          className={`w-4 h-4 border-2 rounded-sm mr-2 ${
                            selectedSize === `${size.label} ${size.cm}`
                              ? "border-[#F2DD52] bg-[#F2DD52]"
                              : "border-[#4F4F4F]"
                          } flex items-center justify-center`}
                        >
                          {selectedSize === `${size.label} ${size.cm}` && (
                            <FaCheck className="text-xs text-black" />
                          )}
                        </div>
                        {/* Nome do tamanho */}
                        <span>{size.label}</span>
                      </div>
                      {/* Medida em centímetros */}
                      <span>{size.cm}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Botão Adicionar ao Carrinho */}
          <button className="bg-[#F2DD52] text-black font-poppins font-medium text-[15px] w-[250px] h-[46px] mt-4 rounded-lg transition-opacity hover:opacity-90">
            Adicionar ao carrinho
          </button>

          {/* Mensagem abaixo do botão */}
          <p className="text-[#4F4F4F] font-poppins text-sm mt-4">
            Escolha a quantidade após adicionar o produto ao carrinho.
          </p>

          {/* Calcular Entrega */}
          <div className="mt-4">
            <p className="text-white font-poppins text-md">
              Calcular o valor da entrega
            </p>
        <div className="relative mt-2 flex items-center">
      <input
        type="text"
        value={cep}
        onChange={handleCepChange}
        placeholder="Digite o seu CEP"
        className="border-2 !border-[#4F4F4F] bg-transparent rounded-lg py-2 px-3 pl-10 text-[#4F4F4F] font-poppins font-normal text-sm w-[250px] h-[39px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
        maxLength={9} // Limita a entrada a 9 caracteres
      />
      <FaTruck className="absolute left-3 text-[#DCC373] text-xl" />
      <button className="bg-[#F2DD52] text-black font-poppins font-medium text-sm rounded-lg py-2 px-4 ml-2">
        Calcular
      </button>
    </div>
          </div>

          {/* Descrição do Produto */}
          <div className="mt-8">
      <p className="text-[#FDFBE9] font-poppins text-md font-light mb-4">
        Descrição do produto
      </p>
      <p className="text-[#FDFBE9] font-poppins text-sm font-light leading-[20px] mb-4">
        Lorem ipsum dolor sit amet. Non odio illo et officia iusto aut minima voluptatem. {/* Aumentando o tamanho da descrição */}
      </p>
      <ul className="text-[#FDFBE9] font-poppins text-sm font-normal list-disc ml-6 mt-2">
        <li>Lorem ipsum dolor list</li>
        <li
          className={`transition-all duration-300 ${
            showFullDescription ? 'opacity-100 bg-transparent' : 'opacity-50 bg-black'
          }`}
        >
          Lorem ipsum sublist
        </li>
      </ul>
      {!showFullDescription && (
        <button
          onClick={() => setShowFullDescription(true)}
          className="text-[#F2DD52] font-poppins font-medium text-sm mt-4 float-right"
        >
          Ver mais
        </button>
      )}
      {showFullDescription && (
        <>
          <ul className="text-[#FDFBE9] font-poppins text-sm font-normal list-disc ml-6">
            <li>Lorem ipsum dolor list</li>
            <li>Lorem ipsum sublist</li>
          </ul>
          <button
            onClick={() => setShowFullDescription(false)}
            className="text-[#F2DD52] font-poppins font-medium text-sm mt-4 float-right"
          >
            Ver menos
          </button>
        </>
      )}
    </div>
        </div>
      </div>

      <div className="mb-16 md:mb-20 py-6 px-6 md:py-12 flex flex-col text-center justify-center mx-auto">
        <h1 className="font-light text-4xl font-poppins text-white mb-6">
          Talvez você se interesse
        </h1>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto max-w-screen-xl">
            {products.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </div>
        <Link href='/catalogo'>  <button className="py-2  absolute -bottom-20 right-20 bg-transparent text-[#F2DD52] border-none text-sm font-poppins font-medium px-4 mb-6 mr-6 transition duration-300 hover:-translate-y-1">
          ver catálogo completo
        </button></Link>
        </div>
     
      </div>
    </>
  );
};

export default ProductPage;
