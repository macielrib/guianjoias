import Image from "next/image";
import FeaturesBody from "@/app/(root)/components/hero/FeaturesBody"; // Import the FeaturesBody component
import CardProducts from "./components/card-product/CardProducts";
import OfertasImperdiveis from "./components/offers/OfertasImperdiveis";
import PecasImpecaveis from "./components/peças/PecasImpecaveis";
import Escapularios from "./components/escapulario/Escapularios";
import PresenteEspecial from "./components/presente/PresenteEspecial";

export default function Home() {
  return (
    <>
      <div className="relative -mt-2 w-full h-[64vh] flex items-center justify-center">
        <Image
          src="/assets/hero-background.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <FeaturesBody />
      <CardProducts />
      <OfertasImperdiveis />
      <PecasImpecaveis />
      <Escapularios />
      <PresenteEspecial/>
    </>
  );
}
