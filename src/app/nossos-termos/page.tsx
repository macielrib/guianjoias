import Link from "next/link";
import { PiNewspaperClippingBold } from "react-icons/pi";


const TermosServico = () => {
  return (
    <section className="w-full flex flex-col py-6 px-6 min-h-screen bg-black">
      <div className="flex flex-col items-center lg:items-start lg:max-w-[800px] mx-auto">
        <h1 className="flex items-center gap-3 text-white font-poppins text-3xl font-normal">
          <PiNewspaperClippingBold className="text-[#F2DD52]" /> Termos de compra
        </h1>

        {/* Conteúdo abaixo do título */}
        <div className="mt-4 text-white font-poppins mb-6 text-sm">
          <p className="font-poppins font-normal text-sm text-[#4F4F4F]">
          Eum facere dolorum ut illum magni qui facilis rerum
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          <h1 className="mb-2 font-poppins text-md text-[#F2DD52] font-medium">Lorem ipsum dolor</h1>

          <p className="font-poppins text-sm text-[#C7C2BB] font-normal">1.1  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>

          <p className="font-poppins text-sm text-[#C7C2BB] font-normal">1.2  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>

          <p className="font-poppins text-sm text-[#C7C2BB] font-normal">1.3  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>

          <p className="font-poppins text-sm text-[#C7C2BB] font-normal">1.14  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>

          <p className="font-poppins text-sm text-[#C7C2BB] font-normal">1.5  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
        </div>

        <div className="flex flex-col gap-3 mb-8">
          <h1 className="mb-2 font-poppins text-md text-[#F2DD52] font-medium">Lorem ipsum dolor</h1>

          <p className="font-poppins text-sm text-[#C7C2BB] font-normal">1.1  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>

          <p className="font-poppins text-sm text-[#C7C2BB] font-normal">1.2  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>

          <p className="font-poppins text-sm text-[#C7C2BB] font-normal">1.3  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>

          <p className="font-poppins text-sm text-[#C7C2BB] font-normal">1.14  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>

          <p className="font-poppins text-sm text-[#C7C2BB] font-normal">1.5  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <h1 className="text-xl text-[#F2DD52] font-normal font-poppins">Agradecemos pela compreensão.</h1>
          <p className="font-poppins text-sm text-[#C7C2BB] font-normal">Ao comprar e utilizar este website, você está concordando com estes termos.</p>

          <Link href='/' className="py-3 px-6 max-w-[180px] text-center items-center bg-[#F2DD52] text-black font-poppins font-normal text-sm rounded-full">Voltar ao site</Link>
        </div>
      </div>
    </section>
  );
};

export default TermosServico;
