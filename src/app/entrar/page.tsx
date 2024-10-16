import React from "react";

const Entrar = () => {
  return (
    <>
      {/* Background Radial */}
      <div
        className="lg:-mt-2 min-h-screen w-full bg-black flex items-center justify-center relative"
        style={{
          background: `radial-gradient(124.33% 124.33% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(255, 199, 0, 0.21) 100%)`,
          backgroundSize: "110% 200%",
          backgroundPosition: "top left, top right, bottom left, bottom right",
        }}
      >
        {/* Background no mobile */}
        <div className="absolute inset-0 bg-black lg:bg-[radial-gradient(124.33%_124.33%_at_50%_50%,_rgba(0,_0,_0,_0)_0%,_rgba(255,_199,_0,_0.21)_100%)] bg-no-repeat bg-cover"></div>

        {/* Página de Criação de Conta */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:-mt-28 py-4 lg:py-8 px-4 lg:px-6">
          {/* Área Esquerda para o Título, Descrição e Stepper */}
          <div className="w-full lg:w-1/2 text-center lg:text-start lg:items-start flex flex-col items-center justify-center mb-6 lg:mb-0">
            {/* Título */}
            <h1 className="text-[#FBF7C6] font-poppins text-3xl max-w-md lg:text-5xl lg:max-w-lg font-normal mb-4 lg:mb-6">
              Faça login na sua conta do site.
            </h1>

            {/* Descrição */}
            <p className="text-[#606060] font-poppins text-lg lg:text-xl lg:max-w-md font-normal mb-8 lg:mb-16">
            Já possui uma conta registrada? entre na<br/> sua conta para utilizar o nosso site!
            </p>

            {/* Stepper */}
            <div className="flex items-center w-full max-w-sm mb-8 justify-center">
              {/* Número 1 */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center z-20 w-12 h-12 lg:w-16 lg:h-16 bg-[#ECC923] text-[#3E210A] rounded-full font-poppins text-xl lg:text-2xl font-bold">
                  01
                </div>
                <p className="text-[#ECC923] mt-2 font-poppins font-medium text-md">
                  Login na conta
                </p>
              </div>

              {/* Conector Branco */}
              <div className="flex-1 -mt-6 h-2 lg:h-3 bg-white z-0 -mx-16 rounded"></div>

              {/* Número 2 */}
               {/* Número 1 */}
               <div className="flex flex-col items-center">
                <div className="flex items-center justify-center z-20 w-12 h-12 lg:w-16 lg:h-16 bg-[#ECC923] text-[#3E210A] rounded-full font-poppins text-xl lg:text-2xl font-bold">
                  02
                </div>
                <p className="text-[#ECC923] mt-2 font-poppins font-medium text-md">
                  Usar website
                </p>
              </div>
            </div>
          </div>

          {/* Divisória Central (visível apenas no desktop) */}
          <div
            className="hidden lg:block w-[2px] rounded-full h-40 lg:h-[162px] bg-[#242424] absolute top-1/2 tsransform -translate-y-1/2"
            style={{ left: "calc(50% - 1px)" }}
          ></div>

          {/* Área Direita para Inputs e Campos */}
          <div className="w-full lg:w-8/12 text-center lg:text-start pl-2 lg:pl-40 py-4">
          <p className="text-white font-poppins text-2xl font-normal mb-6 w-full">
              Fazer login na conta
            </p>
            {/* Formulário */}
            <form className="space-y-5 items-center lg:items-start mx-auto justify-center text-center flex flex-col">
              <div className="relative flex items-center lg:items-start flex-col">
                <p className="font-poppins font-light text-white text-md mb-3 ml-2">
                  Endereço de E-mail
                </p>
                <input
                  type="text"
                  placeholder="Digite o seu E-mail"
                  className="border-2 !border-[#4F4F4F] bg-transparent rounded-xl py-6 pl-6 placeholder:text-[#4F4F4F] text-[#4F4F4F] font-poppins font-normal text-md w-full max-w-[458px] md:w-[458px] h-[48px] focus:!border-[#4F4F4F] focus:outline-none transition duration-300"
                />
              </div>

       

              <div className="relative flex items-center lg:items-start flex-col">
                <p className="font-poppins font-light text-white text-md mb-3 ml-2">
                  Senha da sua conta
                </p>
                <input
                  type="password"
                  placeholder="Uma senha forte"
                  className="border-2 !border-[#4F4F4F] bg-transparent rounded-xl py-6 pl-6 placeholder:text-[#4F4F4F] text-[#4F4F4F] font-poppins font-normal text-md  w-full max-w-[458px] md:w-[458px] h-[48px] focus:!border-[#4F4F4F] focus:outline-none transition duration-300"
                />
              </div>

       

              <button
                type="submit"
                className="bg-[#F2DD52] flex items-center text-center justify-center lg:mx-auto lg:ml-20  text-black font-poppins  font-medium text-[15px] w-full max-w-[297px] h-[52px] mt-6 rounded-full transition-opacity hover:opacity-90"
              >
                Fazer login agora
              </button>
            </form>

            <p className="w-full md:max-w-md mt-4 text-[#6F6F6F] flex flex-col md:flex-row items-center gap-2 justify-center font-poppins font-light text-sm">
                    Ainda não tem conta?
                    <a href="/entrar" className="text-[#F2DD52] ">
                      Criar uma Conta
                    </a>
                  </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Entrar;
