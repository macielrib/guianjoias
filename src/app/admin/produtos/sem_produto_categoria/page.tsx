import { useState, useEffect } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MdError } from "react-icons/md";

const SemProdutos = () => {
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleCreateCategory = () => {
    if (categoryName) {
      console.log("Categoria criada:", categoryName);
      setShowModal(false);
      setCategoryName("");
      setToast({ message: "Categoria criada com sucesso!", type: "success" });
    } else {
      setToast({
        message: "Por favor, insira o nome da categoria.",
        type: "error",
      });
    }
  };

  // Remove o toast após 3 segundos
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <>
      <div className="flex flex-col -mt-2 mb-8 px-4 lg:px-56">
        {/* Badge: Você está gerenciando... */}
        <div className="w-full max-w-5xl bg-transparent py-2 px-6 rounded-lg mt-4 flex items-center gap-3 justify-start">
          <BsPatchCheckFill className="text-[#F2DD52] text-4xl sm:text-xl" />
          <p className="font-poppins text-md text-[#F2DD52] font-medium">
            Você está gerenciando o seu website como um administrador!
          </p>
        </div>

        {/* Texto: Olá, administrador */}
        <div className="w-full max-w-5xl px-4 mt-4 lg:px-8 text-start">
          <h1 className="font-poppins text-3xl mb-2 text-white font-medium transition duration-300">
            Gerenciar <span className="text-[#F2DD52]">produtos</span> e{" "}
            <span className="text-[#F2DD52]">categorias</span>
          </h1>
          <p className="font-poppins font-normal text-md text-[#4F4F4F] mb-8">
            Crie categorias, produtos, e gerencie os produtos dentro da
            categoria especificada.
          </p>
        </div>
      </div>

      <div className="flex flex-col mx-auto justify-center items-center py-6 px-6">
        <Image
          src={"/assets/admin/nao_produtos.png"}
          alt="Imagem Produtos"
          width={320}
          height={320}
          className="transition duration-300 hover:-translate-y-1"
        />

        <div className="flex flex-col py-6 px-6 text-center">
          <h1 className="font-poppins text-white font-medium text-3xl md:text-4xl mb-2">
            Você não tem <span className="text-[#F2DD52]">produtos</span> nem{" "}
            <span className="text-[#F2DD52]">categorias!</span>
          </h1>

          <p className="font-poppins font-normal text-xl text-[#6D6D6D] mb-6">
            Crie a sua categoria para adicionar os produtos dentro dela.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="w-full max-w-[14rem] py-3 px-3 mx-auto text-center rounded-full text-black font-poppins text-sm font-medium bg-[#F2DD52] transition duration-300 hover:-translate-y-1"
          >
            Criar uma categoria
          </button>
        </div>
      </div>

      {/* Modal Animado */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-[#141414] border border-[#222222] rounded-xl w-full max-w-md mx-auto p-6 z-50 antialiased"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}
            >
              <h2 className="text-xl text-white font-poppins font-medium mb-2 ">
                Criar nova categoria
              </h2>
              <p className="font-poppins font-normal text-sm text-[#4F4F4F] mb-4">Crie uma nova categoria inserindo um nome abaixo.</p>
              <input
                type="text"
                placeholder="Digite o nome da categoria"
                value={categoryName}
                maxLength={19}
                onChange={(e) => setCategoryName(e.target.value)}
                className="w-full p-3 rounded-lg mb-4 bg-[#171717] border-2 font-poppins !border-[#222222] text-white placeholder-[#4f4f4f] focus:outline-none focus:border-[#F2DD52] transition-colors duration-300 antialiased"
              />

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="py-2 px-4 rounded-full bg-[#202020] font-poppins text-sm text-white hover:bg-[#282828] transition-all duration-300 hover:scale-105"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleCreateCategory}
                  className="py-2 px-6 rounded-full bg-[#F2DD52] font-poppins text-sm text-black hover:bg-[#ffd768] transition-all duration-300 hover:scale-105"
                >
                  Criar categoria
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification Animado */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="fixed top-4 right-4 z-50"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <div
              className={`flex items-center gap-3 py-3 px-6 rounded-xl border ${
                toast.type === "success" ? "border-[#4F4F4F]" : "border-red-500"
              } bg-[#171717] text-white shadow-lg`}
            >
              {toast.type === "success" ? (
                <BsPatchCheckFill className="text-emerald-500" />
              ) : (
                <MdError className="text-red-500" />
              )}
              <p className="font-poppins text-sm">{toast.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SemProdutos;
