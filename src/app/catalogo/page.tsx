"use client";

import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import Image from "next/image";
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
  {
    id: 5,
    name: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
    oldPrice: "R$ 2.000,00",
    newPrice: "R$ 1.200,00",
    installment: "Parcelamento em até 12x sem juros",
    image: "/assets/joias/pulseiraouro.png",
  },
  {
    id: 6,
    name: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
    oldPrice: "R$ 2.000,00",
    newPrice: "R$ 1.200,00",
    installment: "Parcelamento em até 12x sem juros",
    image: "/assets/joias/pulseiraouro.png",
  },
];

const CardProduct: React.FC<{ product: (typeof products)[0] }> = ({
  product,
}) => {
  return (
    <div className="bg-[#0B0B0B] rounded-md w-[300px] h-[460px] flex flex-col items-start justify-start p-4 transition duration-300 transform border border-transparent hover:border-[#212020]">
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
      <p className="text-xs text-[#161111] font-poppins mt-2 text-left">
        {product.installment}
      </p>
    </div>
  );
};

const Catalogo = () => {
  const STEP = 10;
  const MIN = 220;
  const MAX = 2500;
  const [values, setValues] = useState([220, 2500]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);

  const handleCheckboxChange = (category: string) => {
    setCheckedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleReset = () => {
    setValues([220, 2500]);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col items-start min-h-screen bg-black px-4">
      {/* Card/Borda Amarela */}
      <div className="bg-[#F2DD52] rounded-lg w-full max-w-7xl h-6 mb-8 mt-8 mx-auto "></div>

      {/* Filtro de Preço e Título */}
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-7xl mx-auto px-4 py-4 gap-6">
        {/* Filtro de Preço */}
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <div className="w-full max-w-xs mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white font-poppins font-normal text-xl">
                Faixa de preço
              </h2>
              <button
                onClick={handleReset}
                className="text-black bg-[#F2DD52] rounded-full py-2 px-3 text-xs font-medium font-poppins transition duration-300 hover:-translate-y-1"
              >
                Limpar Filtro
              </button>
            </div>

            {/* Input Range */}
            <Range
              values={values}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => setValues(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="w-full h-2 bg-[#4F4F4F] rounded-lg"
                  style={{
                    background: getTrackBackground({
                      values,
                      colors: ["#F2DD52", "#4F4F4F", "#F2DD52"],
                      min: MIN,
                      max: MAX,
                    }),
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  className="w-4 h-4 bg-[#F2DD52] rounded-full shadow-md"
                />
              )}
            />
            <div className="flex items-center justify-start mt-2 text-white font-poppins font-normal">
              <span>R$ {values[0].toFixed(2)}</span> -{" "}
              <span>R$ {values[1].toFixed(2)}</span>
            </div>

            {/* Dropdown de Seleção de Categoria */}
            <div className="relative mt-4 w-full max-w-xs mx-auto">
              <button
                onClick={toggleDropdown}
                className="text-white border border-[#4F4F4F] rounded-xl py-2 px-4 flex justify-between items-center w-full focus:outline-none"
              >
                <span className="font-poppins text-sm">Mais recentes</span>
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

            {/* Categoria */}
            <div className="mt-8">
              <h3 className="text-white text-xl font-poppins font-normal mb-4 px-2">
                Categoria
              </h3>
              <div className="space-y-2">
                {[
                  "Lançamentos",
                  "Pulseiras",
                  "Correntes de ouro",
                  "Escapulários",
                  "Brincos",
                ].map((category) => (
                  <div
                    key={category}
                    className="flex items-center space-x-3 text-lg"
                  >
                    <input
                      id={category}
                      type="checkbox"
                      checked={checkedCategories.includes(category)}
                      onChange={() => handleCheckboxChange(category)}
                      className="hidden"
                    />
                    <label
                      htmlFor={category}
                      className={`w-5 h-5 border-2 rounded-sm ${
                        checkedCategories.includes(category)
                          ? "border-[#F2DD52] bg-[#F2DD52]"
                          : "border-[#4F4F4F]"
                      } flex items-center justify-center cursor-pointer`}
                    >
                      {checkedCategories.includes(category) && (
                        <FaCheck className="text-xs text-black" />
                      )}
                    </label>
                    <span
                      className="text-white font-poppins font-light text-md"
                      style={{ userSelect: "none" }} // Prevent text selection
                    >
                      {category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Catálogo de Produtos */}
        <div className="w-full lg:w-3/4 ml-6">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
            <h1 className="text-white text-2xl font-poppins font-light">
              Catálogo de produtos
            </h1>
            <p className="text-white text-md font-poppins font-light py-2">
              45 produtos encontrados
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} href="/catalogo/produto" legacyBehavior>
                <a>
                  <CardProduct product={product} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
