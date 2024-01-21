import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import dynamicManu from "./components/dynamicManu";
import Footer from "./components/Footer";
import './App.css'
import { useState } from "react";
import LodingComp from "./components/LodingComp";
 
const App = () => {
  const [loding , setLoding]=  useState(true);
   setTimeout(() =>{
    setLoding(false);
   },2000)

  return (
    <>
    {loding? <LodingComp/> :
    
      <BrowserRouter>
        <NavBar />    
        <Routes>
          {dynamicManu.map((data, index) => {
            return <Route key={index} exact path={data.link} element={data.element} />;
          })}
        </Routes>
       
        <Footer/>
      </BrowserRouter>
}
    </>
        
  );
};

export default App;
