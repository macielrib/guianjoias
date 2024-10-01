import Image from "next/image";
import Link from "next/link";
import { BsPatchCheckFill } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";

interface Category {
  name: string;
}

interface Props {
  categories: Category[];
}

const CategoriesWithoutProducts = ({ categories }: Props) => {
  return (
    <>
      <div className="flex flex-col -mt-8 px-4 lg:px-56 w-full">
        <div className="bg-[#F2DD52] rounded-md w-full max-w-6xl md:w-[74rem] h-4 md:ml-6 mt-4"></div>
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
      <div className="flex flex-col md:flex-row md:ml-32 gap-8 px-6 items-center md:items-start justify-center">
        <div className="flex flex-col w-full max-w-[340px] h-full max-h-[545px] rounded-lg bg-[#171717]">
          <div className="flex flex-col py-6 px-6 items-start justify-start">
            <h1 className="font-poppins text-white font-normal text-xl mb-4">
              Criar categoria
            </h1>
            <div className="relative mt-2 flex items-center">
              <input
                type="text"
                placeholder="Nome da categoria"
                className="border !border-[#4F4F4F] bg-transparent rounded-full py-4 px-3 pl-10 text-[#4F4F4F] placeholder:text-[#4F4F4F] font-poppins font-normal text-sm w-[270px] h-[48px] focus:border-[#F2DD52] focus:outline-none transition duration-300"
                maxLength={9} 
              />
            </div>
            <div className="flex items-center mb-4 py-4 px-2 text-white">
              <input type="checkbox" className="custom-checkbox py-2 px-2" />
              <label
                htmlFor="statusCheckbox"
                className="ml-2 text-white text-sm font-poppins font-normal"
              >
                Evidenciar categoria
              </label>
            </div>
            <Link
              href={"/create-category"}
              className="py-3 px-4 w-full max-w-[12rem] mb-4 rounded-full mx-auto text-center bg-[#F2DD52] text-black font-poppins font-medium transition duration-300 hover:-translate-y-1 text-sm"
            >
              Criar categoria
            </Link>
          </div>

          {/* Categorias Existentes */}
          <div className="relative ">
            <div className="flex flex-col py-2 px-6 overflow-y-auto max-h-[250px] !scrollbar-thin !scrollbar-thumb-[#F2DD52] scrollbar-track-[#212020] scrollbar-rounded-md">
              <h1 className="font-poppins text-white font-normal text-xl mb-2">
                Categorias existentes
              </h1>
              <p className="font-poppins font-normal text-sm text-[#4F4F4F]">
                Navegue pelas categorias existentes.
              </p>
              <div className="flex flex-col py-4">
                {categories.length > 0 ? (
                  categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/category-id`}
                      className="flex justify-between w-full max-w-sm rounded-lg py-3 px-8 items-center mb-4 border-2 border-[#F2DD52]"
                    >
                      <h1 className="font-poppins text-white font-medium text-md ">
                        {category.name}
                      </h1>
                      <button
                        className=" text-white transition duration-300 hover:-translate-y-1"
                      >
                        <FiTrash2 className="h-5 w-5" />
                      </button>
                    </Link>
                  ))
                ) : (
                  <p className="text-[#4F4F4F]">Nenhuma categoria existente.</p>
                )}
              </div>
            </div>

            {/* Gradiente para desvanecimento */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#171717] to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Seção de Produtos na Categoria */}
        <div className="flex flex-col w-full max-w-[800px]">
          <div className="flex flex-col items-start md:flex-row justify-between py-2 ">
            <h1 className="font-poppins text-white font-normal text-xl mb-4">
              Produtos na categoria{" "}
              <span className="text-[#F2DD52]">&quot;Nome da Categoria&quot;</span>
            </h1>
            <Link
              href={"criar-produto"}
              className="w-full mb-4 mx-auto max-w-[13rem] rounded-full bg-[#F2DD52] py-3 px-2 text-black font-poppins font-medium text-center text-sm transition duration-300 hover:-translate-y-1"
            >
              Novo produto
            </Link>
          </div>
          <div className="flex flex-col mx-auto justify-center py-8">
            <Image
              src={"/assets/admin/produtos.png"}
              alt="Imagem Produtos"
              width={340}
              height={340}
              className="transition mx-auto mb-4 duration-300 hover:-translate-y-1"
            />
            <h1 className="text-white font-poppins font-normal text-2xl mx-auto text-center mb-2">
              Você não tem produtos nesta categoria.
            </h1>
            <p className="font-poppins text-center mx-auto text-lg text-[#4F4F4F]">
              Sua categoria foi criada, mas você ainda precisa adicionar um
              produto nela.
            </p>
          </div>
        </div>
      </div>

      {/* Espaçamento abaixo do card para evitar que grude no footer */}
      <div className="py-8"></div>
    </>
  );
};

export default CategoriesWithoutProducts;
