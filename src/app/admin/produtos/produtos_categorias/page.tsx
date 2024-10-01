"use client";

import Image from "next/image";
import Link from "next/link";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { useState } from "react";
import Tooltip from "@/app/components/Tooltip";

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

interface Props {
  products: Product[];
  categories: Category[];
}

interface Order {
  name: string;
  status: string;
  purchaseDate: string;
  id: string;
}

const ProductsAndCategories = ({ products, categories }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setIsScrolled(scrollTop > 0);
  };

  const handleInfoClick = (order: Order) => setSelectedOrder(order);
  const handleCloseModal = () => setSelectedOrder(null);

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row gap-8 px-6 items-center md:items-start justify-center">
        <CreateCategory categories={categories} />
        <ProductSection
          products={products}
          isScrolled={isScrolled}
          onInfoClick={handleInfoClick}
          onScroll={handleScroll} // Passando handleScroll como prop
        />
      </div>
      {selectedOrder && (
        <Modal order={selectedOrder} onClose={handleCloseModal} />
      )}
    </>
  );
};

const Header = () => (
  <div className="flex flex-col -mt-8 px-4 lg:px-56 w-full">
    <div className="bg-[#F2DD52] rounded-md w-full max-w-6xl md:w-[74rem] h-4 md:ml-6 mt-4"></div>
    <Badge />
    <TitleSection />
  </div>
);

const Badge = () => (
  <div className="w-full max-w-5xl bg-transparent py-2 px-6 rounded-lg mt-4 flex items-center gap-3 justify-start">
    <BsPatchCheckFill className="text-[#F2DD52] text-4xl sm:text-xl" />
    <p className="font-poppins text-md text-[#F2DD52] font-medium">
      Você está gerenciando o seu website como um administrador!
    </p>
  </div>
);

const TitleSection = () => (
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
);

const CreateCategory = ({ categories }: { categories: Category[] }) => (
  <div className="flex flex-col w-full max-w-[340px] h-full max-h-[545px] rounded-lg bg-[#171717]">
    <div className="flex flex-col py-6 px-6 items-start justify-start">
      <h1 className="font-poppins text-white font-normal text-xl mb-4">
        Criar categoria
      </h1>
      <input
        type="text"
        placeholder="Nome da categoria"
        className="border !border-[#4F4F4F] bg-transparent rounded-full py-4 px-3 pl-10 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm w-[270px] h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
        maxLength={9}
      />
      <div className="flex items-center mb-4 py-4 px-2 text-white">
        <input type="checkbox" className="custom-checkbox py-2 px-2" />
        <label htmlFor="statusCheckbox" className="ml-2 text-white text-sm font-poppins font-normal">
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
    <CategoryList categories={categories} />
  </div>
);

const CategoryList = ({ categories }: { categories: Category[] }) => (
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
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#171717] to-transparent pointer-events-none"></div>
  </div>
);

const ProductSection = ({
  products,
  isScrolled,
  onInfoClick,
  onScroll, // Recebendo a função de scroll como prop
}: {
  products: Product[];
  isScrolled: boolean;
  onInfoClick: (order: Order) => void;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void; // Tipo para a função de scroll
}) => (
  <div className="flex flex-col w-full max-w-[800px]">
    <ProductHeader />
    <ProductTable products={products} isScrolled={isScrolled} onInfoClick={onInfoClick} onScroll={onScroll} />
  </div>
);

const ProductHeader = () => (
  <div className="flex flex-col items-center md:flex-row justify-between py-2">
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
);

const ProductTable = ({
  products,
  isScrolled,
  onInfoClick,
  onScroll, // Recebendo a função de scroll como prop
}: {
  products: Product[];
  isScrolled: boolean;
  onInfoClick: (order: Order) => void;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void; // Tipo para a função de scroll
}) => (
  <div className="w-full max-w-[1280px] mx-auto lg:-mt-3">
    <TableHeader />
    <div
      className="overflow-y-auto max-h-[410px] !scrollbar-thin !scrollbar-thumb-[#F2DD52] scrollbar-track-[#212020] scrollbar-rounded-md"
      onScroll={onScroll} // Chamando a função de scroll
    >
      {products.map((product, index) => (
        <TableRow
          key={index}
          product={product}
          index={index}
          isScrolled={isScrolled}
          onInfoClick={onInfoClick}
        />
      ))}
    </div>
  </div>
);

const TableHeader = () => (
  <div className="grid grid-cols-1 lg:grid-cols-4 text-center font-poppins text-md text-white py-2 border-b-2 border-b-[#F2DD52]">
    <span>Imagem</span>
    <span>Nome do produto</span>
    <span>Status</span>
    <span>Data de compra</span>
  </div>
);

const TableRow = ({
  product,
  index,
  isScrolled,
  onInfoClick,
}: {
  product: Product;
  index: number;
  isScrolled: boolean;
  onInfoClick: (order: Order) => void;
}) => (
  <div
    className={`grid grid-cols-1 lg:grid-cols-4 text-center py-2 ${
      index % 2 === 0 ? "bg-[#212020]" : ""
    }`}
  >
    <div className="flex items-center justify-center">
      <Image
        src={product.imageUrl || "/default-image.png"}
        alt="Product Image"
        width={80}
        height={80}
        className="rounded-lg"
      />
    </div>
    <div className="flex items-center justify-center text-white font-poppins text-sm">
      {product.name}
    </div>
    <div className="flex items-center justify-center text-white font-poppins text-sm">
      <span className={`py-1 px-2 rounded-full ${getStatusClass(product.status)}`}>
        {product.status}
      </span>
    </div>
    <div className="flex items-center justify-center text-white font-poppins text-sm">
      {product.purchaseDate}
    </div>
    <div className="flex items-center justify-center">
      <button
        className="text-white transition duration-300 hover:-translate-y-1"
        onClick={() => onInfoClick(product)}
      >
        <FaInfoCircle className="h-5 w-5" />
      </button>
    </div>
  </div>
);

const getStatusClass = (status: string) => {
  switch (status) {
    case "Ativo":
      return "bg-green-500 text-white";
    case "Inativo":
      return "bg-red-500 text-white";
    default:
      return "bg-yellow-500 text-black";
  }
};

const Modal = ({
  order,
  onClose,
}: {
  order: Order;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
    <div className="bg-white rounded-lg p-6 z-10">
      <h2 className="text-lg font-bold mb-4">{order.name}</h2>
      <p>Status: {order.status}</p>
      <p>Data de compra: {order.purchaseDate}</p>
      <button onClick={onClose} className="mt-4 text-red-500">Fechar</button>
    </div>
  </div>
);

export default ProductsAndCategories;
