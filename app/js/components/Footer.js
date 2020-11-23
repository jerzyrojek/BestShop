import React from "react";
import facebook from "../../assets/Facebook.svg";
import twitter from "../../assets/Twitter.svg";

function Footer(){
    return(
        <>
            <footer>
                <div className="footer__text">
                    <p>BestShop</p>
                    <p>© 2019 BestShop LTD, All Rights Reserved</p>
                </div>
                <div className="footer__icons">
                    <img src={twitter} alt="twitter-logo"/>
                        <img src={facebook} alt="facebook-logo"/>
                </div>
            </footer>
            </>
    )
}

export default Footer;