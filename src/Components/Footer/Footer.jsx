import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'; 

function Footer() {
  return (
    <div>
      <div className='-mb-16' >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FEF6FD" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    <div className="relative mt-16 bg-[#FEF6FD] text-black">
    
    <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            
            <span className="ml-2 text-xl font-bold tracking-wide text-black uppercase">
            <img src="https://i.ibb.co/DMcxGH5/l8uywj4i.png"/>
            </span>
          </a>
            <h1>Welcome to our cosmetics e-commerce website! Discover a world of beauty and skincare products that will enhance your natural charm. We offer a wide range of premium cosmetics, from luxurious makeup collections to rejuvenating skincare solutions. </h1>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-black">
            
            </p>
            <p className="mt-4 text-sm text-black">
            
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-wide text-teal-accent-400">
              Category
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  World
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  Games
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  References
                </a>
              </li>
            </ul>
          </div>
          <div className='hidden lg:grid md:grid'>
            <p className="font-semibold tracking-wide text-teal-accent-400">
              Cherry
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  Web
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  eCommerce
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  Entertainment
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          <div className='hidden lg:grid md:grid' >
            <p className="font-semibold tracking-wide text-teal-accent-400">
              Apples
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  Media
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  Brochure
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  Nonprofit
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  Educational
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div >
            <p className="font-semibold tracking-wide text-teal-accent-400">
              Business
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  Infopreneur
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  Personal
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  Wiki
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-black hover:text-teal-accent-400"
                >
                  Forum
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
        <p className="text-sm text-black">
          © Copyright 2023 Wazo Inc. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">

        <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <FaGithub className='text-2xl'></FaGithub>
          </a>

          <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <FaTwitter className='text-2xl'></FaTwitter>
          </a>
          <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <FaFacebook className='text-2xl'></FaFacebook>
          </a>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Footer;