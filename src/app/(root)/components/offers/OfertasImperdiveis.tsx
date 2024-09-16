import Button from "@/app/components/items/Button";
import Image from "next/image";
import Link from "next/link";

const OfertasImperdiveis: React.FC = () => {
  return (
    <section className="bg-black py-16 flex flex-col md:flex-row items-center justify-between px-12 md:px-28">
      
      <div className="w-full md:w-1/2 flex justify-center md:justify-start md:px-4 transition duration-300 hover:scale-105">
        <Image
          src="/assets/ofertas.png"
          alt="Ofertas Imperdíveis"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start mt-8 md:mt-0 md:pl-8 text-center md:text-left">
        
        <span className="text-[#F2DD52] font-poppins text-center font-medium text-lg mb-2">
          Ofertas imperdíveis
        </span>

        <h2 className="text-white font-poppins font-medium text-4xl md:text-5xl leading-tight mb-4">
          Pingentes sofisticados <br /> com <span className="text-[#F2DD52]">entrega rápida.</span>
        </h2>

        <p className="text-[#C7C2BB] font-poppins text-md mb-8 max-w-md">
          At molestiae culpa eos odit repudiandae qui culpa quidem sit atque
          quibusdam est voluptatem.
        </p>

        <p className="text-[#C7C2BB] font-poppins text-md mb-8 max-w-md">
          Esaepe voluptatem At voluptatem modi qui aperiam molestias eos doloribus <br />
          nobis ut delectus voluptatem.
        </p>

        <div className="justify-center">
  
          <Link href="#" >
       <Button text="ver pingentes" isRounded={true}></Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OfertasImperdiveis;
