"use client";

import Link from "next/link";
import { BsPatchCheckFill } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Cupom {
  name: string;
  activity: string;
  descount: string;
  id: string;
}

const cuponsLista: Cupom[] = [
  {
    name: "Desconto Verão",
    activity: "Eterno",
    descount: "20%",
    id: "1",
  },
  {
    name: "carrara",
    activity: "Eterno",
    descount: "10%",
    id: "2",
  },
  {
    name: "augustinho",
    activity: "Eterno",
    descount: "16%",
    id: "3",
  },
];

const CuponsPromocionais = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCupom, setSelectedCupom] = useState<Cupom | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" } | null>(null);

  const handleDeleteClick = (cupom: Cupom) => {
    setSelectedCupom(cupom);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCupom(null);
  };
  const handleConfirmDelete = () => {
    console.log("Cupom deletado:", selectedCupom?.name);
    if (selectedCupom) {
      setToast({ message: selectedCupom.name, type: "success" }); // Adicionando 'type'
    }
    handleCloseModal();
  };
  
  

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
      <div className="flex flex-col -mt-8 px-4 lg:px-56 w-full">
        <div className="bg-[#F2DD52] rounded-md w-full max-w-6xl md:w-[74rem] h-4 md:ml-6 mt-4"></div>
        <div className="w-full max-w-5xl bg-transparent py-2 px-6 rounded-lg mt-4 flex items-center gap-3 justify-start">
          <BsPatchCheckFill className="text-[#F2DD52] text-4xl sm:text-xl" />
          <p className="font-poppins text-md text-[#F2DD52] font-medium">
            Você está gerenciando o seu website como um administrador!
          </p>
        </div>

        <div className="w-full max-w-5xl px-4 mt-4 lg:px-8 text-start">
          <h1 className="font-poppins text-3xl mb-2 text-white font-medium transition duration-300">
            Gerenciar seus,{" "}
            <span className="text-[#F2DD52]">@cupons de desconto</span>
          </h1>
          <p className="font-poppins font-normal text-md text-[#4F4F4F] mb-8">
            Crie cupons de desconto e decida a validade de cada um deles.
          </p>
        </div>
      </div>
      <p className="mb-4 px-2 font-poppins text-white text-md font-normal md:ml-60 ">
        {cuponsLista.length} cupons registrados.
      </p>

      <div className="flex flex-col md:flex-row md:ml-52 gap-2 px-6 items-center md:items-start justify-center">
        <div className="flex flex-col w-full max-w-[340px] h-full max-h-[545px] rounded-lg bg-[#171717]">
          <div className="flex flex-col py-6 px-6 items-start justify-start">
            <h1 className="font-poppins text-white font-normal text-xl mb-4">
              Criar cupom
            </h1>
            <div className="relative mt-2 flex items-center">
              <input
                type="text"
                placeholder="Digite o nome"
                className="border !border-[#4F4F4F] bg-transparent rounded-full py-4 px-3 pl-10 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm w-[270px] h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
                maxLength={9}
              />
            </div>
            <div className="flex items-center mb-2 py-4 px-2 text-white">
              <input type="checkbox" className="custom-checkbox py-2 px-2" />
              <label
                htmlFor="activityCheckbox"
                className="ml-2 text-white text-sm font-poppins font-normal"
              >
                Este é um cupom temporário
              </label>
            </div>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Duração (dias)"
                className="border !border-[#4F4F4F] mb-4 bg-transparent rounded-full py-4 px-3 pl-10 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm w-[270px] h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
                maxLength={9}
              />
            </div>
            <Link
              href={"/create-category"}
              className="py-3 px-4 w-full max-w-[12rem] mb-4 rounded-full mx-auto text-center bg-[#F2DD52] text-black font-poppins font-medium transition duration-300 hover:-translate-y-1 text-sm"
            >
              Criar cupom
            </Link>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto mt-4">
          <h1 className="font-poppins text-white font-normal text-xl">
            Cupons ativos
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 text-center p-4 text-[#DCC373] font-normal font-poppins text-md bg-transparent">
            <div className="mx-auto lg:pr-5">Nome do cupom</div>
            <div>Atividade</div>
            <div>Desconto</div>
            <div>Ações</div>
          </div>

          <div className="overflow-y-auto max-h-[400px] !scrollbar-thin !scrollbar-thumb-[#F2DD52] scrollbar-track-[#212020] scrollbar-rounded-md pr-4">
            {cuponsLista.length > 0 ? (
              cuponsLista.map((cupom) => (
                <div
                  key={cupom.id}
                  className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-2 px-4 text-center items-center bg-[#171717] text-white text-sm font-poppins border border-[#4F4F4F] mb-4 w-full rounded-xl"
                >
                  <div className="flex justify-center items-center sm:col-span-1">
                    {cupom.name}
                  </div>

                  <div className="relative items-center text-center sm:col-span-1">
                    <span className="truncate text-[#FBF7C6] font-poppins font-normal block">
                      {cupom.activity}
                    </span>
                  </div>

                  <div className="text-center font-poppins font-normal text-[#FBF7C6] sm:col-span-1">
                    {cupom.descount}
                  </div>

                  <div className="flex justify-center gap-2 sm:col-span-1 md:ml-8">
                    <button
                      className="p-2 transition duration-300 hover:-translate-y-1"
                      onClick={() => handleDeleteClick(cupom)}
                    >
                      <FiTrash2 size={20} className="text-[#F2DD52]" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-white py-4">
                Não há cupons disponíveis. Crie um novo cupom!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de confirmação */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div
            className="bg-[#171717] border border-[#4F4F4F] rounded-xl p-8 w-full max-w-lg"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
          >
            <h2 className="text-lg mb-2 font-poppins mx-auto text-[#FBF7C6] text-center font-medium">
              Deletar cupom de desconto
            </h2>
            <p className="font-poppins text-[#FFFFFF80] text-sm font-normal text-center mx-auto mb-8">
              Tem certeza que deseja remover o cupom de desconto{" "}
              <span className="text-[#F2DD52]">&quot;{selectedCupom?.name}&quot;?</span> Esta ação é irreversível.
            </p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-[#F2DD52] font-normal px-6 md:w-[297px] mx-auto text-center text-black font-poppins text-sm py-3 rounded-xl"
                onClick={handleConfirmDelete}
              >
                Remover cupom
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

<AnimatePresence>
  {toast && (
    <motion.div
      className="fixed top-4 right-4 flex items-center gap-3 py-3 px-6 rounded-2xl border bg-[#171717] border-yellow-400 text-black shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <p className="font-poppins text-sm font-normal text-white">
        O cupom <span className="text-[#F2DD52]">&quot;{toast.message}&quot;</span> foi removido com sucesso.
      </p>
    </motion.div>
  )}
</AnimatePresence>


      <div className="py-8"></div>
    </>
  );
};

export default CuponsPromocionais;
