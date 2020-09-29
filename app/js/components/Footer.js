import React from "react";

function Footer(){
    return(
        <>
            <footer>
                <div className="footer__text">
                    <p>BestShop</p>
                    <p>© 2019 BestShop LTD, All Rights Reserved</p>
                </div>
                <div className="footer__icons">
                    <img src="assets/Twitter.svg" alt="twitter-logo"/>
                        <img src="assets/Facebook.svg" alt="facebook-logo"/>
                </div>
            </footer>
            </>
    )
}

export default Footer;