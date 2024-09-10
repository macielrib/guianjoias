"use client";

import React from "react";
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
    oldPrice: "R$ 3.800,00",
    newPrice: "R$ 2.500,00",
    installment: "Parcelamento em até 10x sem juros",
    image: "/assets/joias/pulseiraouro.png",
  },
  {
    id: 3,
    name: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
    oldPrice: "R$ 3.800,00",
    newPrice: "R$ 2.500,00",
    installment: "Parcelamento em até 10x sem juros",
    image: "/assets/joias/pulseiraouro.png",
  },
  {
    id: 4,
    name: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
    oldPrice: "R$ 3.800,00",
    newPrice: "R$ 2.500,00",
    installment: "Parcelamento em até 10x sem juros",
    image: "/assets/joias/pulseiraouro.png",
  },
  {
    id: 5,
    name: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
    oldPrice: "R$ 3.800,00",
    newPrice: "R$ 2.500,00",
    installment: "Parcelamento em até 10x sem juros",
    image: "/assets/joias/pulseiraouro.png",
  },
  {
    id: 6,
    name: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
    oldPrice: "R$ 3.800,00",
    newPrice: "R$ 2.500,00",
    installment: "Parcelamento em até 10x sem juros",
    image: "/assets/joias/pulseiraouro.png",
  },
  {
    id: 7,
    name: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
    oldPrice: "R$ 3.800,00",
    newPrice: "R$ 2.500,00",
    installment: "Parcelamento em até 10x sem juros",
    image: "/assets/joias/pulseiraouro.png",
  },
  {
    id: 8,
    name: "Excepteur sint occaecat cupidatat non proident 18k 1,4mm",
    oldPrice: "R$ 3.800,00",
    newPrice: "R$ 2.500,00",
    installment: "Parcelamento em até 10x sem juros",
    image: "/assets/joias/pulseiraouro.png",
  },

];

const CardProduct: React.FC<{ product: (typeof products)[0] }> = ({
  product,
}) => {
  return (
    <div className="bg-[#101010] mx-auto rounded-md w-[300px] h-[460px] flex flex-col items-start justify-start  p-4 transition duration-300 transform border border-transparent hover:border-[#212020]">
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

const PecasImpecaveis: React.FC = () => {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <div className="text-[#F2DD52] font-poppins text-base font-semibold mb-2">
          Peças impecáveis
        </div>

        <h2 className="text-white font-poppins font-medium text-4xl leading-tight mb-4">
          Estilo e sofisticação
        </h2>
        <p className="text-[#C7C2BB] font-poppins text-sm leading-6 mb-8">
          In beatae reiciendis et quos delectus et laboriosam illum sed veniam
          alias aut ullam enim.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-8 text-center md:text-right">
        <Link href="/catalog" legacyBehavior>
          <a className="text-[#F2DD52] font-poppins text-sm">Ver catálogo completo</a>
        </Link>
      </div>
    </section>
  );
};

export default PecasImpecaveis;
