import { LuTags } from "react-icons/lu";

const AnnounceBody = () => {
  return (
    <>
      <header className="bg-[#F2DD52] flex justify-center items-center h-12 px-6 py-4">
        <p className="text-black font-poppins text-sm font-medium inline-flex items-center gap-2 ">
          <LuTags className="w-5 h-5"/>
          Registre-se no website e ganhe 10% OFF na primeira compra!
        </p>

      </header>
    </>
  );
};

export default AnnounceBody;
