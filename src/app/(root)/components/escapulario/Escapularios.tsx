import Button from "@/app/components/items/Button";
import Image from "next/image";
import Link from "next/link";

const Escapularios: React.FC = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4 md:px-36 flex flex-col md:flex-row items-center justify-between">
        
        <div className="w-full md:w-6/12 flex flex-col justify-center items-center md:items-start  text-center md:text-left">
          
          <span className="text-[#F2DD52] font-poppins font-medium text-lg mb-2">
            Escapulários
          </span>

          <h2 className="text-white font-poppins font-medium text-4xl md:text-5xl leading-tight mb-4">
            Escapulários elegantes <br /> em <span className="text-[#F2DD52]">ouro 18k.</span>
          </h2>

          <p className="text-[#C7C2BB] font-poppins text-md mb-8 max-w-md">
            At molestiae culpa eos odit repudiandae qui culpa quidem sit atque
            quibusdam est voluptatem.
          </p>

          <p className="text-[#C7C2BB] font-poppins text-md mb-8 max-w-md">
            Esaepe voluptatem At voluptatem modi qui aperiam molestias eos doloribus <br />
            nobis ut delectus voluptatem.
          </p>

          <div>
            <Link href="#">
              <Button text="ver escapulários" isRounded={true}></Button>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-6/12 flex justify-center md:justify-end mt-8 md:mt-0">
          <Image
            src="/assets/escapulario.png"
            alt="Escapulários"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Escapularios;
