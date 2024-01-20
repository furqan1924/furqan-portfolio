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
      <section className="bg-gray-100 h-full pt-6 md:p-20 " >
        <h1 className='text-center font-bold text-2xl text-black-400'>My Awesome Service</h1>
        <div className="grid p-8 grid-cols-1 md:grid-cols-15 lg:grid-cols-15 gap-5  " data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500">
          
            <div className="pt-5 max-w-full md:max-w-100 md:col-span-5  lg:col-start-1 " data-aos="fade-up" data-aos-delay="600">

              <Cards />
            </div>
         
        </div>


      </section>
    </>
  )
}

export default Services