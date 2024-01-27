import dynamicMenu from "./dynamicManu";
import { Link } from "react-router-dom";
import { IMAGES } from "./images";
import { useState } from "react";


const NavBar = () => {

  const [showSidebar, setShowSidebar] = useState(false);
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <div className="flex flex-wrap place-items-center ">
        <section className="z-30 mx-auto fixed w-full top-0 left-0">
          {/* <!-- navbar --> */}
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-3 xl:px-12 py-4 flex w-full items-center">
              <a className="text-3 font-bold font-heading" to="/">
                <img className="h-9 rounded-xl w-10" src={IMAGES.image2} alt="logo" />
              </a>
              {/* <!-- Nav Links --> */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                {dynamicMenu.map((data, index) => {
                  return (
                    <li key={index}>
                      <Link className="hover:text-gray-200" to={data.link}>
                        {data.name}

                      </Link>
                    </li>
                  );
                })}
              </ul>
              {/* <!-- Header Icons --> */}
              <div className="hidden xl:flex items-center space-x-5 ">
                <a className="hover:text-gray-200" rel="noreferrer" href="https://www.linkedin.com/in/muhammad-furqan-529015229" target="_blank">

                  <svg className="w-[25px] h-[25px] fill-[#f8f1f1]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">


                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>

                  </svg>
                </a>
                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg className="w-[25px] h-[25px] fill-[#f8f1f1]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>

                  </svg>
                </a>

              </div>
            </div>
            {/* <!-- Responsive navbar --> */}
            <a className="xl:hidden flex mr-6 items-center" href="#">

              <svg className="w-[25px] h-[25px] fill-[#f8f1f1]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>

              <svg className="ml-2 w-[25px] h-[25px] fill-[#f8f1f1]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
              </svg>

            </a>
            <div className="navbar-burger self-center mr-12 xl:hidden" >

              {/* SideBar */}

              {showSidebar ? (

                <div className={`top-0 right-0 w-[80vw] bg-black  pt-5 px-10 pl-15 text-white fixed h-full z-40  
                  }`}>

                  <button onClick={() => setShowSidebar(false)}
                    type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset">
                    <span className="sr-only">Close menu</span>

                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h3 className="my-10 text-4xl font-semibold text-white">Furqan</h3>

                  <ul className="px-4  mx-auto text-center font-bold font-heading space-y-12">
                    {dynamicMenu.map((data, index) => {
                      return (
                        <li onClick={() => setShowSidebar(false)} key={index}>
                          <Link className="cursor-pointer hover:text-gray-200 rounded-full text-xl hover:bg-red-700 py-5 px-14 " to={data.link}>
                            {data.name}

                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <svg
                  onClick={() => setShowSidebar(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}

            </div>
          </nav>
        </section>
      </div>
      {/* <!-- Does this resource worth a follow? --> */}
      <div className="bottom-0 fixed right-0 mb-4 mr-4 z-10">
        <div>
          <button
            onClick={scrollToTop}
            style={{ display: visible ? 'inline' : 'none' }}
            title="Follow me on twitter"
            type="button"
            className="bg-red-600 block w-14 h-14 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 "
          >
          <svg className="w-[30px] ml-3 h-[40px] fill-[#f2eeee]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

  {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
  <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>

</svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
