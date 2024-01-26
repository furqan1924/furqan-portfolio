import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { IMAGES } from './images';


const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="mt-19 myBackground h-full  py-40" >
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4  ">
          <div className="grid md:order-1 order-2 grid-cols-subgrid md:col-span-6 sm:col-span-1 w-full ">
            <div className="pt-25 p-8 md:pl-24 max-w-full md:max-w-100 md:col-span-6 lg:col-start-2 " data-aos="fade-up" data-aos-delay="600">
              <p className="text-xl font-bold text-red-400" data-aos="fade-up" data-aos-delay="700">Web Developer</p>
              <h1 className=" text-3xl font-bol text-white ">Hi. I'm Muhammad Furqan</h1>

              <p className="text-3xl py-2 font-bold  text-gray-400">Talk is chep.<br></br> Show me your code</p>
              <p className=" py-2 font-bold text-white">I design and code beautifully simple thing.<br></br> and i love what i do.</p>

              {/* Resume downlod Button */}
              <a  href={IMAGES.resume} download>
                <button type="button" className=" mt-3 inline-block rounded border-2 border-red-500 text-red-500 hover:border-red-600 hover:bg-red-400 hover:bg-opacity-10 hover:text-red-600 focus:border-red-700 focus:text-red-700 active:border-red-800 active:text-red-800 dark:border-red-300 dark:text-red-300 dark:hover:hover:bg-red-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">Download Resume

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="inline ml-1 pb-[2px] w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.25 6a.75.75 0 00-1.5 0v4.94l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V9.75z"
                      clipRule="evenodd"
                    />
                  </svg>


                </button>

              </a>
            </div>

          </div>
          {/* Image Section */}
          <div className="grid md:order-2 order-1 grid-cols-subgrid md:col-span-5 sm:col-span-1 w-full ">
            <div className="max-w-full md:col-span-5 " data-aos="fade-left"
              data-aos-offset="300"
              data-aos-duration="600"
              data-aos-easing="ease-in-sine">
              <img src={IMAGES.image1} alt="" />
            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default Banner
