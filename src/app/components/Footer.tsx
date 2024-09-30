import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-t border-[#101010]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6">
        <div className="flex-1 mb-6 items-center py-2 md:mb-0 max-w-2xl">
          <Image
            src="/logo.png"
            alt="Logo"
            className="w-32 mb-4 h-auto"
            width={116}
            height={116}
          />
          <p className="mt-4 text-white text-sm font-normal font-poppins max-w-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam velit impedit similique dolorum reiciendis. Minus modi rerum sequi repudiandae, impedit illo dolor vitae aspernatur error commodi nemo accusamus, culpa a! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo dicta neque accusantium tempora ipsa! Quaerat eius similique aliquid vel quae modi. Dolor facilis perferendis adipisci accusamus! Voluptatem tenetur architecto quibusdam?
          </p>
        </div>  

        <div className="flex-1 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-[#F2DD52] text-lg font-poppins mb-4">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nossos-termos" legacyBehavior>
                  <a className="text-white text-sm font-poppins font-normal hover:text-[#F2DD52] transition duration-300 hover:scale-105">termos de serviço</a>
                </Link>
              </li>
              <li>
                <Link href="/trabalhe-conosco" legacyBehavior>
                  <a className="text-white text-sm font-poppins font-normal hover:text-[#F2DD52] transition duration-300 hover:scale-105">trabalhe conosco</a>
                </Link>
              </li>
              <li>
                <Link href="/atendimento" legacyBehavior>
                  <a className="text-white text-sm font-poppins font-normal hover:text-[#F2DD52] transition duration-300 hover:scale-105">atendimento</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-[#F2DD52] text-lg font-poppins mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/catalogo" legacyBehavior>
                  <a className="text-white text-sm font-poppins font-normal hover:text-[#F2DD52] transition duration-300 hover:scale-105">catálogo</a>
                </Link>
              </li>
              <li>
                <Link href="/cadastro" legacyBehavior>
                  <a className="text-white text-sm font-poppins font-normal hover:text-[#F2DD52] transition duration-300 hover:scale-105">criar conta</a>
                </Link>
              </li>
              <li>
                <Link href="/entrar" legacyBehavior>
                  <a className="text-white text-sm font-poppins font-normal hover:text-[#F2DD52] transition duration-300 hover:scale-105">fazer login</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-[#F2DD52] text-lg font-poppins mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/instagram" legacyBehavior>
                  <a className="text-white text-sm font-poppins font-normal hover:text-[#F2DD52] transition duration-300 hover:scale-105">Instagram</a>
                </Link>
              </li>
              <li>
                <Link href="/whatsapp" legacyBehavior>
                  <a className="text-white text-sm font-poppins font-normal hover:text-[#F2DD52] transition duration-300 hover:scale-105">Whatsapp</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black text-[#FDFBE9] py-4 md:mt-24 px-6">
        <div className="container mx-auto flex justify-around text-sm font-poppins">
          <p>&copy; 2024 Guian Joias. Todos os direitos reservados.</p>
         <Link href={'www.cherrycode.com.br'} target='_blank' className='transition duration-300 hover:text-[#F2DD52]'> <p>Website developed by Cherry Code.</p></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
