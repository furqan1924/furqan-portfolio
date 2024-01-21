import About from "./about/About";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import ContactUs from "./contact/ContactUs";
import Banner from "./Banner"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return <>

    <Banner />
    <About />
    <Services />
    <Portfolio />
    <ContactUs />
    <ToastContainer />
  </>;
};

export default Home;
