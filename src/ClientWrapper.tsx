"use client";

import { usePathname } from "next/navigation";
import Navbar from "./app/components/Navbar";
import AdminNavbar from "./app/admin/navbar/page";
import ClientNavbar from "./app/painel-cliente/navbar/page";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  const isClientRoute = pathname.startsWith("/painel-cliente");

  return (
    <>
      {!isAdminRoute && !isClientRoute && <Navbar />} {/* Exibe a navbar antiga */}
      {isAdminRoute && <AdminNavbar />} {/* Exibe a navbar admin */}
      {isClientRoute && <ClientNavbar />} {/* Exibe a navbar do cliente */}
      {children}
    </>
  );
};

export default ClientWrapper;
