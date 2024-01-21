import { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { IMAGES } from '../images';

const Portfolio = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>

      <section className="bg-gray-50 h-full pt-10 md:pt-20" data-aos="fade-up" >
        <div className="grid p-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4" data-aos-easing="linear"
        data-aos-duration="1000">
          <div className="grid grid-cols-subgrid md:col-span-6 sm:col-span-1 w-full ">
            <div className="pt-5 max-w-full md:max-w-100 md:col-span-6 lg:col-start-2 " data-aos="fade-up" data-aos-delay="600">

              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className="grid grid-cols-subgrid md:col-span-5 sm:col-span-1 w-full ">
            <div className="max-w-full md:col-span-5 " data-aos="fade-left" data-aos-delay="850">
              <img src={IMAGES.image1} alt="" />
            </div>
          </div>
        </div>


      </section>


    </>
  )
}

export default Portfolio
