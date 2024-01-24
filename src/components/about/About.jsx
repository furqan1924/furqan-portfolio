import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { IMAGES } from '../images';
const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    < > 
    <section className="bg-gray-300 h-full pt-6 md:p-20  "  >
      <h2 className='text-center text-2xl font-bold'>About Me</h2>
      <div className="grid p-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-12" data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000">
        <div className=" grid grid-cols-subgrid md:col-span-5 sm:col-span-1 lg:col-start-2 w-full ">
          <div className="max-w-full md:col-span-5 " data-aos="fade-right" data-aos-delay="850">
            <img src={IMAGES.image1} alt="furqanImage" />
          </div>
        </div>
        <div className="grid grid-cols-subgrid md:col-span-5 sm:col-span-1 w-full ">
          <div className="pt-5 max-w-full md:max-w-100 md:col-span-6  " data-aos="fade-up" data-aos-delay="600">
            <p className="text-xl text-justify text-black-400" data-aos="fade-up" data-aos-delay="700">I have done my Bachelor in Computer Science from Quaid-e-Awam University of Engineering, Science and Technology Nawabshah in 2023. Where i learnt alot of things and choose myself best
            fit in programming. I specializing in front-end with React.js and also in back-end with Node.js, Express.js. I am Full Stack (MERN) Web developer at some Software house doing job from November 2023.   </p>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default About
