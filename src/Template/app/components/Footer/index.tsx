import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string,
  href: string,
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Useful Links",
    link: ['Home', 'Films', 'Cars', 'Caracters'],
  }
]



const footer = () => {
  return (
    <div className=" relative">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl mt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

          {/* COLUMN-1 */}

          <div className='col-span-6'>
            <img
              className="block h-12 w-20px mb-4"
              src={'/images/Logo/logo.png'}
              alt="Crypto-Logo"
            />
            <h3 className='text-lightblue text-sm font-normal leading-9 mb-4 lg:mb-16'> Welcome to Hello Dati, your premier platform for discovering exceptional services tailored to your interests. Whether you're passionate about the latest cars, fascinated by unique characters, or intrigued by captivating films, we provide a comprehensive range of services to meet your needs. Join us and dive into a world of premium offerings designed to elevate your experience. Start exploring today!.</h3>
           
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-medium mb-9">{product.section}</p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className='mb-5'>
                    <Link href="/" className="text-offwhite  text-sm font-normal mb-6 space-links">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-4">
            <h3 className="text-white text-xl font-medium mb-9">Contact Us</h3>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/email.svg'} alt="email-icon" width={20} height={20} />contact@Hello Dati.com</h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/address.svg'} alt="address-icon" width={20} height={20} />Bureau A09, Bloc A 5ème étage Imm Zitouna 1073 Montplaisir, Tunis</h4>
          </div>

        </div>
      </div>

      {/* All Rights Reserved */}

      <div className='py-8 px-4 border-t border-t-lightblue'>
        <h3 className='text-center text-offwhite'>@2023 - All Rights Reserved by <Link href="https://adminmart.com/" target="_blank"> Adminmart.com</Link></h3>
      </div>

    </div>
  )
}

export default footer;
