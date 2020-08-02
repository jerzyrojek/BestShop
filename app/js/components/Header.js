import React from "react";

function Header (){
    return (
        <>
            <header className="main-header">
                <nav>
                    <span>BestShop</span>
                    <ul className="linkMenu">
                        <li><a href="#">Why us</a></li>
                        <li><a href="#">Benefits</a></li>
                        <li><a href="#">Prices</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <a className="icon"><i className="fa fa-bars"></i></a>
                </nav>
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