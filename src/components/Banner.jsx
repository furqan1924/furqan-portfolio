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
      <section className="mt-19 myBackground h-full  md:py-40" >
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4  ">
          <div className="grid  grid-cols-subgrid md:col-span-6 sm:col-span-1 w-full ">
            <div className="pt-28 p-8 md:pl-24 max-w-full md:max-w-100 md:col-span-6 lg:col-start-2 " data-aos="fade-up" data-aos-delay="600">
              <p className="text-xl font-bold text-red-400" data-aos="fade-up" data-aos-delay="700">Web Developer</p>
              <h1 className=" text-3xl font-bol text-white ">Hi. I'm Muhammad Furqan</h1>
              
              <p className="text-3xl py-2 font-bold  text-gray-400">Talk is chep.<br></br> Show me your code</p>
               <p className=" py-2 font-bold text-white">I design and code beautifully simple thing.<br></br> and i love what i do.</p>
            </div>
          </div>
          <div className="grid grid-cols-subgrid md:col-span-5 sm:col-span-1 w-full ">
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
