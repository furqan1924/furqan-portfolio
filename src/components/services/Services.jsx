import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Cards from './Cards';

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="bg-gray-100 h-full p-6 text-justify  md:p-15 " >
        <h1 className='text-center font-bold p-2 text-2xl text-black-400'>My Awesome Service</h1>
        <p className='text-center font-18 pt-2' >These are my services, I deliver as per your ideas in all of my services with my expertise and experence.</p>
        <div className="grid grid-cols-1 md:grid-cols-15" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000">
          
            <div className="pt-4 max-w-full md:max-w-100 md:col-span-5 " >

              <Cards />
            </div>
         
        </div>


      </section>
    </>
  )
}

export default Services