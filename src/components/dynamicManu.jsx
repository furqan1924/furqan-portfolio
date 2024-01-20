import React from "react";
import Home from "./Home";
import About from "./about/About";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import ContactUs from "./contact/ContactUs";

const dynamicManu = [
  {
    name: "Home",
    link: "/",
    element:<Home/>
  },
  {
    name: "About",
    link: "/about",
    element:<About/>
  },
  {
    name: "Service",
    link: "/service",
    element:<Services/>
  },
  {
    name: "Portfolio",
    link: "/portfolio",
    element:<Portfolio/>
  },
  {
    name: "Contact",
    link: "/contact",
    element:<ContactUs/>
  },
];

export default dynamicManu;
