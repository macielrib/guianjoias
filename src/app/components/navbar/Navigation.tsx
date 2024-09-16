"use client"


import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex justify-center bg-black py-4 border-b border-yellow-200">
      <nav className="flex gap-8 items-center">
        <Link
          href="/"
          className={`text-md font-normal font-poppins transition duration-300 hover:text-[#F2DD52] hover:-translate-y-1s ${pathname === '/' ? 'text-[#F2DD52]' : 'text-[#4F4F4F]'}`}
        >
          Início
        </Link>
        <Link
          href="/catalogo"
          className={`text-md font-normal font-poppins transition duration-300 hover:text-[#F2DD52] hover:-translate-y-1s ${pathname === '/catalogo' ? 'text-[#F2DD52]' : 'text-[#4F4F4F]'}`}
        >
          Catálogo
        </Link>
        <Link
          href="/launches"
          className={`text-md font-normal font-poppins transition duration-300 hover:text-[#F2DD52] hover:-translate-y-1s ${pathname === '/launches' ? 'text-[#F2DD52]' : 'text-[#4F4F4F]'}`}
        >
          Lançamentos
        </Link>
        <Link
          href="/bracelets"
          className={`text-md font-normal font-poppins transition duration-300 hover:text-[#F2DD52] hover:-translate-y-1s ${pathname === '/bracelets' ? 'text-[#F2DD52]' : 'text-[#4F4F4F]'}`}
        >
          Pulseiras
        </Link>
        <Link
          href="/chains"
          className={`text-md font-normal font-poppins transition duration-300 hover:text-[#F2DD52] hover:-translate-y-1s ${pathname === '/chains' ? 'text-[#F2DD52]' : 'text-[#4F4F4F]'}`}
        >
          Correntes
        </Link>
        <Link
          href="/escapularios"
          className={`text-md font-normal font-poppins transition duration-300 hover:text-[#F2DD52] hover:-translate-y-1s ${pathname === '/escapularios' ? 'text-[#F2DD52]' : 'text-[#4F4F4F]'}`}
        >
          Escapulários
        </Link>
        <Link
          href="/earrings"
          className={`text-md font-normal font-poppins transition duration-300 hover:text-[#F2DD52] hover:-translate-y-1s ${pathname === '/earrings' ? 'text-[#F2DD52]' : 'text-[#4F4F4F]'}`}
        >
          Brincos
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
