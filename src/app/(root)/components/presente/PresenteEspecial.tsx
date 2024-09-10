import Button from "@/app/components/items/Button";
import Image from "next/image";
import Link from "next/link";

const PresenteEspecial: React.FC = () => {
  return (
    <section className="relative bg-black py-16 px-8">
      <div className="relative bg-[#101010] rounded-lg px-8 py-16 md:px-16 md:py-20 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/background-gift.png"
            alt="Imagem de Fundo"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom right"
            quality={90} 
            className="z-0"
          />
        </div>

        <div className="relative z-10 md:ml-36 max-w-2xl mx-auto text-center md:text-left">
          <h2 className="text-[#FDFBE9] font-poppins font-medium text-3xl md:text-5xl leading-tight mb-8">
            Encontre <span className="text-[#F2DD52]">um presente</span>
            <br />
            <span className="text-[#F2DD52]">especial</span> para aquela
            <br /> <span className="text-[#F2DD52]">pessoa especial.</span>
          </h2>

          <p className="text-[#C7C2BB] font-poppins text-md md:text-md mb-8">
            Vai casar? Encontre o anel perfeito para a sua pessoa especial.
          </p>

          <div>
            <Link href="#">
              <Button text="ver aneis de casamento" isRounded={true}></Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresenteEspecial;
