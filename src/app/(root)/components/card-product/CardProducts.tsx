"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
  {
    id: 7,
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
    <div className="bg-[#101010] mx-auto rounded-md w-[300px] h-[460px] flex flex-col items-start justify-start p-4 transition duration-300 transform border border-transparent hover:border-[#212020]">
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

const CardProducts: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="bg-black py-16 mt-8 flex flex-col items-center justify-center text-center px-4">
      <div className="text-[#F2DD52] font-poppins text-base font-semibold leading-6">
        Com desconto
      </div>

      <h2 className="text-white font-medium font-poppins text-4xl sm:text-6xl leading-tight mb-4">
        Ofertas para você em até <b>15% OFF</b>
      </h2>

      <p className="text-[#4F4F4F] font-poppins font-normal text-base leading-6 max-w-2xl">
        Eum facere dolorum ut illum magni qui facilis rerum
      </p>

      <div className="mt-12 w-full max-w-7xl relative">
        {isClient && (
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={100}
            slidesPerView={4}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <CardProduct product={product} />
              </SwiperSlide>
            ))}

            {/* <div className="swiper-button-prev text-white -right-16 transform scale-75"></div>
            <div className="swiper-button-next text-white -right-16 transform scale-75"></div> */}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default CardProducts;
