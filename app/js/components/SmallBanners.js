import React from "react";
import macbook from "../../assets/Macbook.png";
import iphone from "../../assets/iPhone.png";
import trumpet from "../../assets/Trumpet.png";

function SmallBanners(){
    return (
        <>
            <section className="small-banners">
                <div className="container small-banners__content">
                    <div className="always-first">
                        <div className="always-first__image">
                            <img src={macbook} alt="macbook"/>
                        </div>
                        <div className="always-first__text">
                            <h2>Be always first</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>

                    </div>

                    <div className="your-shop">
                        <div className="your-shop__image">
                            <img src={iphone} alt="iphone"/>
                        </div>
                        <div className="your-shop__text">
                            <h2>Your shop is where you are!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>

                    <div className="recognition">
                        <div className="recognition__text">
                            <h2>Increase recognition of your brand!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>

                        <div className="recognition__image">
                            <img src={trumpet} alt="trumpet"/>
                        </div>
                    </div>

                </div>
            </section>
            </>
    )
}

export default SmallBanners;