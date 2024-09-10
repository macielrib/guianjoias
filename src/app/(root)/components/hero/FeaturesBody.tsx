// FeaturesBody.tsx
import { FaTruck, FaCreditCard, FaWhatsapp } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const FeaturesBody = () => {
  return (
    <div className="bg-[#F2DD52] flex flex-col md:flex-row justify-around items-center gap-2 py-6">
      <div className="flex items-center gap-2 text-black font-poppins text-sm font-semibold">
        <MdShoppingCart className="w-5 h-5" />
        Frete grátis a partir de R$ 200,00
      </div>
      <div className="flex items-center gap-2 text-black font-poppins text-sm font-semibold">
        <FaTruck className="w-5 h-5" />
        Entrega para todo o país!
      </div>
      <div className="flex items-center gap-2 text-black font-poppins text-sm font-semibold">
        <FaCreditCard className="w-5 h-5" />
        Parcelamento em até 12x sem juros
      </div>
      <div className="flex items-center gap-2 text-black font-poppins text-sm font-semibold">
        <FaWhatsapp className="w-5 h-5" />
        Atendimento via Whatsapp
      </div>
    </div>
  );
};

export default FeaturesBody;
