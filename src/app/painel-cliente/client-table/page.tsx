import { FaInfoCircle } from "react-icons/fa";
import { useState } from "react";
import Tooltip from "@/app/components/Tooltip";

// Defina a interface para o pedido
interface Order {
  name: string;
  status: string;
  purchaseDate: string;
  id: string;
}

const ClientTable = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const products: Order[] = [
    {
      name: "Excepteur sint occaecat cupidatat non proident",
      status: "Aguardando envio",
      purchaseDate: "06/11/2014 - 16:11",
      id: "#435931",
    },
    {
      name: "Excepteur sint occaecat cupidatat non proident",
      status: "Aguardando envio",
      purchaseDate: "06/11/2014 - 16:11",
      id: "#435931",
    },
    {
      name: "Excepteur sint occaecat cupidatat non proident",
      status: "Aguardando envio",
      purchaseDate: "06/11/2014 - 16:11",
      id: "#435931",
    },
    {
      name: "Excepteur sint occaecat cupidatat non proident",
      status: "Aguardando envio",
      purchaseDate: "06/11/2014 - 16:11",
      id: "#435931",
    },
  ];

  const handleInfoClick = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="w-full max-w-5xl mx-auto lg:mx-0  ">
      {/* Header */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center p-4 text-[#DCC373] font-normal font-poppins text-lg bg-transparent">
        <div>Nome do produto</div>
        <div>Status</div>
        <div>Data da compra</div>
        <div>Identificação</div>
        <div>Ações</div>
      </div>

      {/* Linhas da tabela */}
      {products.map((product, index) => (
        <div
          key={index}
          className="grid grid-cols-1 sm:grid-cols-5 gap-4 p-2 text-center items-center bg-[#171717] text-white text-sm font-poppins border border-[#4F4F4F] mb-4 w-full rounded-xl"
        >
          {/* Nome do produto */}
          <div className="relative pl-6 items-center text-center sm:col-span-1">
            <Tooltip text={product.name}> {/* Adiciona o Tooltip */}
              <span
                className="truncate max-w-[40px] md:max-w-[160px] text-[#FBF7C6] font-poppins font-normal block"
              >
                {product.name}
              </span>
            </Tooltip>
          </div>

          {/* Status */}
          <div className="text-center font-poppins font-medium text-[#F2DD52] sm:col-span-1">
            {product.status}
          </div>

          {/* Data da compra */}
          <div className="text-center font-poppins font-normal text-[#FBF7C6] sm:col-span-1">
            {product.purchaseDate}
          </div>

          {/* Identificação */}
          <div className="text-center font-poppins font-normal text-[#FBF7C6] sm:col-span-1">
            {product.id}
          </div>

          {/* Ações */}
          <div className="flex justify-center gap-2 sm:col-span-1">
            <button
              className="p-2 transition duration-300 hover:-translate-y-1"
              onClick={() => handleInfoClick(product)} // Exibir modal ao clicar
            >
              <FaInfoCircle size={20} className="text-[#F2DD52]" />
            </button>
          </div>
        </div>
      ))}

      {/* Modal Informações do Pedido */}
      {selectedOrder && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleCloseModal} // Fechar modal ao clicar fora dele
        >
          <div
            className="bg-[#171717] border border-[#4F4F4F] text-white w-[90%] max-w-lg max-h-[90%] p-6 rounded-xl relative animate-fadeIn overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Evita fechar o modal ao clicar dentro
          >
            <h2 className="text-xl font-poppins font-medium text-[#FBF7C6] mb-1 mt-4">
              Informações do pedido
            </h2>
            <p className="text-sm font-poppins font-normal text-[#6D6D6D] mb-5">
              Encontre as informações da sua nova venda.
            </p>
            <p className="font-medium text-lg text-[#F2DD52] font-poppins mb-4">
              Pedido - {selectedOrder.id}
            </p>
            <p className="text-sm mb-3 text-[#F2DD52] font-poppins">
              Produto adquirido:{" "}
              <span className="text-[#FBF7C6] font-poppins font-normal">
                {selectedOrder.name}
              </span>
            </p>
            {/* ... adicione os outros detalhes do pedido aqui ... */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handleCloseModal}
                className="bg-[#F2DD52] transition duration-300 hover:bg-[#fff47b] hover:-translate-y-1 text-black font-poppins font-medium w-full max-w-xs py-3 rounded-lg"
              >
                Fechar janela
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientTable;
