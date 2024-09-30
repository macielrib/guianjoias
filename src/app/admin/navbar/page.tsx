"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const AdminNavbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Início", path: "/admin" },
    { name: "Produtos e Categorias", path: "/admin/produtos" },
    { name: "Cupons Promocionais", path: "/admin/cupons" },
  ];

  return (
    <nav className="bg-black py-8">
      <div className="container mx-auto flex flex-wrap justify-center items-center md:justify-start gap-8 px-4 lg:pl-48">
        {/* Logo */}
        <div className="w-[62px] h-[60px] transition duration-300 hover:-translate-y-1">
          <Image src="/logo.png" alt="Logo GuianJoias" width={62} height={60} />
        </div>

        {/* Links de navegação */}
        <div className="flex items-center gap-6">
          {navItems.map((item, index) => {
            const isActive =
              pathname === item.path ||
              (item.path === "/admin/produtos" &&
                (pathname === "/admin/produtos" ||
                  pathname === "/admin/criar-produto"));

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

export default AdminNavbar;
