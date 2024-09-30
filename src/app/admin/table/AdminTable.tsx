import { FaInfoCircle, FaTag } from "react-icons/fa";
import { useState } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { FaTruckFast } from "react-icons/fa6";

// Defina a interface para o pedido
interface Order {
  name: string;
  status: string;
  purchaseDate: string;
  id: string;
}

const AdminTable = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showStatusModal, setShowStatusModal] = useState(false); // Novo estado para o modal de status
  const [checked, setChecked] = useState(false); // Estado para o checkbox

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

  const handleOpenStatusModal = () => {
    setShowStatusModal(true);
  };

  const handleCloseStatusModal = () => {
    setShowStatusModal(false);
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto lg:ml-4 mt-8">
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
      <span
        className="truncate text-[#FBF7C6] font-poppins font-normal block"
        title={product.name}
      >
        {product.name}
      </span>
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
      <button
        className="p-2"
        onClick={handleOpenStatusModal} // Abre o modal de alteração de status
      >
        <FaTag size={20} className="text-[#F2DD52]" />
      </button>
    </div>
  </div>
))}


      {/* Modal Informações do Pedido */}
      {/* Modal */}
      {selectedOrder && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleCloseModal} // Fechar modal ao clicar fora dele
        >
          <div
            className="bg-[#171717] border border-[#4F4F4F] text-white w-[90%] max-w-lg max-h-[90%] p-6 rounded-xl relative animate-fadeIn  overflow-y-auto scrollbar-hidden" // Adicionando overflow-y-auto
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
            <p className="text-sm mb-3 text-[#F2DD52] font-poppins">
              Tamanho:{" "}
              <span className="text-[#FBF7C6] font-poppins font-normal">
                20,5cm
              </span>
            </p>
            <p className="text-sm mb-3 text-[#F2DD52] font-poppins">
              Quantidade:{" "}
              <span className="text-[#FBF7C6] font-poppins font-normal">
                01
              </span>
            </p>
            <p className="text-sm mb-3 text-[#F2DD52] font-poppins">
              Status:{" "}
              <span className="text-[#FBF7C6] font-poppins font-normal">
                Aguardando entrega
              </span>
            </p>

            {/* Divisor */}
            <div
              className="my-4 bg-[#4F4F4F]"
              style={{
                width: "411px",
                height: "2px",
                borderRadius: "2px 0 0 0",
                opacity: "0.5",
              }}
            ></div>

            {/* Dados do usuário */}
            <h3 className="text-lg font-poppins font-medium text-[#FBF7C6] mb-4">
              Dados de usuário
            </h3>
            <p className="text-sm mb-2 text-[#F2DD52] font-poppins">
              Nome do cliente:{" "}
              <span className="text-[#FBF7C6] font-poppins font-normal">
                Lorem ipsum dolor sit amet
              </span>
            </p>
            <p className="text-sm mb-2 text-[#F2DD52] font-poppins">
              E-mail:{" "}
              <span className="text-[#FBF7C6] font-poppins font-normal">
                lorem.ipsumdolor@sitamet.com
              </span>
            </p>
            <p className="text-sm mb-2 text-[#F2DD52] font-poppins">
              CPF:{" "}
              <span className="text-[#FBF7C6] font-poppins font-normal">
                000.000.000-00
              </span>
            </p>
            <p className="text-sm mb-4 text-[#F2DD52] font-poppins">
              Telefone:{" "}
              <span className="text-[#FBF7C6] font-poppins font-normal">
                00000000000
              </span>
            </p>

            {/* Outro divisor */}
            <div
              className="my-4 bg-[#4F4F4F]"
              style={{
                width: "411px",
                height: "2px",
                borderRadius: "2px 0 0 0",
                opacity: "0.5",
              }}
            ></div>

            {/* Dados de entrega */}
            <h3 className="text-lg font-poppins font-medium text-[#FBF7C6] mb-4">
              Dados de entrega
            </h3>
            <p className="text-sm mb-2 text-[#F2DD52] font-poppins">
              Localização:{" "}
              <span className="text-[#FBF7C6] font-poppins font-normal">
                RJ - Nome da Cidade
              </span>
            </p>
            <p className="text-sm mb-2 text-[#F2DD52] font-poppins">
              Endereço:{" "}
              <span className="text-[#FBF7C6] font-poppins font-normal">
                Endereço digitado pelo cliente
              </span>
            </p>
            <p className="text-sm mb-2 text-[#F2DD52] font-poppins">
              CEP:{" "}
              <span className="text-[#FBF7C6] font-poppins font-normal">
                00000000
              </span>
            </p>
            <p className="text-sm mb-2 text-[#F2DD52] font-poppins">
              Número da casa:{" "}
              <span className="text-[#FBF7C6] font-poppins font-normal">
                000
              </span>
            </p>
            <p className="text-sm mb-4 text-[#F2DD52] font-poppins">
              Complemento:{" "}
              <span className="text-[#FBF7C6] font-poppins font-normal">
                Apartamento 00
              </span>
            </p>

            {/* Botão Fechar janela */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handleCloseModal}
                className="bg-[#F2DD52] transition duration-300 hover:bg-[#fff47b] hover:-translate-y-1 text-black font-poppins font-medium w-full max-w-xs py-3 rounded-lg"
              >
                Fechar janela
              </button>
            </div>
            <p className="text-center text-sm font-poppins font-normal text-[#6D6D6D] mt-4">
              Caso você já tenha feito a entrega, não esqueça de atualizar o
              status da entrega para enviar o código de rastreio!
            </p>
          </div>
        </div>
      )}

      {/* Modal de Alteração de Status */}
      {showStatusModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleCloseStatusModal} // Fechar modal ao clicar fora dele
        >
          <div
            className="bg-[#171717] border border-[#4F4F4F] text-white w-[90%] max-w-lg p-6 rounded-xl relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()} // Evita fechar o modal ao clicar dentro
          >
            <h2 className="text-xl font-poppins font-medium text-[#FBF7C6] mb-1 mt-4">
              Alterar status de envio
            </h2>
            <p className="text-sm font-poppins font-normal text-[#6D6D6D] mb-6">
              Altere o status de entrega faça o anexo o código de rastreio.
            </p>

            <div className="flex items-center mb-6 text-white">
              <input
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
                className="custom-checkbox"
              />
              <label
                htmlFor="statusCheckbox"
                className="ml-2  text-white text-sm font-poppins font-normal"
              >
                Marcar como enviado
              </label>
            </div>
            <div className="relative mt-2 mb-4 flex items-center">
              <input
                type="text"
                placeholder="Código de rastreio"
                className="border-2 !border-[#4F4F4F] bg-transparent rounded-lg py-2 px-3 pl-11 !text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm w-[250px] h-[39px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
                maxLength={9} // Limita a entrada a 9 caracteres
              />
              <FaTruckFast className="absolute left-4 text-[#DCC373] text-xl" />
            </div>

            <div className="flex items-end gap-2 mb-6">
              <IoMdInformationCircle className="w-14 h-14 text-[#4F4F4F]" />
              <p className="font-poppins text-sm font-normal text-[#4F4F4F]">
                Ao inserir o código de rastreio, ele será enviado diretamente ao
                cliente, verifique oeste dado com cuidado.
              </p>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={handleCloseModal}
                className="bg-[#F2DD52] transition duration-300 text-md hover:bg-[#fff47b] hover:-translate-y-1 text-black font-poppins font-medium w-full max-w-xs py-3 rounded-lg"
              >
                Enviar comprovante
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTable;
