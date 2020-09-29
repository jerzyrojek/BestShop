import React from "react";
import HamburgerMenu from "./HamburgerMenu";


function Header (){
    return (
        <>
            <header className="main-header">
               <HamburgerMenu/>
                <div className="main-header__content">
                    <div className="container main-header__text">
                        <h1>Sell More!</h1>
                        <p>Open shop on our platform and increase your sales</p>
                        <button>Open your shop</button>
                    </div>
                    <div className="banner">
                    </div>
                </div>
            </header>
            </>
    )
}


export default Header;