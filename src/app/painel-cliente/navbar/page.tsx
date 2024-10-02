"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ClientNavbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Voltar para o site", path: "/" },
    { name: "Termos de Serviço", path: "/nossos-termos" },
    { name: "Entre em contato", path: "/contato-guian" },
  ];

  return (
    <nav className="bg-black py-8">
      <div className="container mx-auto flex flex-wrap justify-center items-center md:justify-start gap-8 px-4 lg:pl-48">
        {/* Logo */}
        <div className="w-[62px] h-[60px] transition duration-300 hover:-translate-y-1">
          <Image src="/logo.png" alt="Logo GuianJoias" width={62} height={60} />
        </div>

        {/* Links de navegação */}
        <div className="flex flex-wrap mx-auto lg:mx-0 text-center justify-center items-center gap-6">
          {navItems.map((item, index) => {
            // Verifica se a rota atual corresponde à rota do item
            const isActive = pathname === item.path;

            return (
              <Link
                key={index}
                href={item.path}
                className={`font-poppins text-md font-normal ${
                  isActive ? "text-[#F2DD52]" : "text-[#4F4F4F]"
                } transition duration-300 hover:-translate-y-1 hover:text-[#F2DD52]`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default ClientNavbar;
