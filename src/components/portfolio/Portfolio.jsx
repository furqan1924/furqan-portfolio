import { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
//import { IMAGES } from '../images';

const Portfolio = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>

      <section className="bg-gray-50 h-full pt-6 md:pt-20" >
        <h2 className='text-center text-2xl font-bold'>Our Clints</h2>
        <div className="grid p-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4" data-aos-easing="linear"
          data-aos-duration="800">
          <div className="grid grid-cols-subgrid md:col-span-6 sm:col-span-1 w-full ">
            <div className="pt-5 max-w-full md:max-w-100 md:col-span-6 lg:col-start-2 " data-aos="fade-up" data-aos-delay="600">

              <div className="relative max-w-md mx-auto flex flex-col py-6 px-8 bg-white rounded-lg shadow-lg">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreh9Fwfj6mP6s9CINDCpfUXmi6OrRXJoD8fFI7BV01mzbbC1FhW5MLGQZYgH9PJ8UhC0&usqp=CAU"
                  alt=""
                  className="absolute rounded-full w-14 h-14 -left-6 -top-6"
                />
                <p className="text-[#5E6282]">
                  “On the Windows talking painted pasture yet its express parties
                  use. Sure last upon he same as knew next. Of believed or
                  diverted no.”
                </p>
                <p className="mt-6 mb-2">Mike taylor</p>
                <p className="text-sm">USA, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- component --> */}

      </section>



    </>
  )
}

export default Portfolio
