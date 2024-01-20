import About from "./about/About";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import ContactUs from "./contact/ContactUs";
import Banner from "./Banner"

const Home = () => {
  return <>
  <Banner/>
  <About/>
  <Services/>
  <Portfolio/>
  <ContactUs/>
  </>;
};

export default Home;
