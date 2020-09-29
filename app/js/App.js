import React from "react";
import Header from "./components/Header.js"
import SalesPlatform from "./components/SalesPlatform.js";
import SmallBanners from "./components/SmallBanners.js";
import Pricing from "./components/Pricing.js";
import Questions from "./components/Questions.js";
import Calculator from "./components/Calculator.js";
import Footer from "./components/Footer.js";

function App() {
    return (
        <>
            <Header/>
            <SalesPlatform/>
            <SmallBanners/>
            <Pricing/>
            <Calculator/>
            <Questions/>
            <Footer/>
        </>
    )
}

export default App;