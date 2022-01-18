import React from "react";
import "../index.css"
import Header from "../Components/Header"
import Crousel from "../Components/Crousel";
import BelowCrousel from "../Components/BelowCrousel";
import Paradiv from "../Components/Paradiv";
import Footer from "../Components/Footer";


function Main()
{
    return(
        <>
        <Header/>
        <Crousel/>
        <BelowCrousel/>
        <Paradiv/>
        <Footer/>


        </>
    )
}
export default Main;