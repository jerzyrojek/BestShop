import React from "react";

function Pricing() {
    return (
        <>
            <section className="pricing">
                <h2>Pricing</h2>
                <div className="pricing__content">
                    <div className="basic">
                        <div className="basic__text">
                            <h3>Basic</h3>
                            <p>$0</p>
                        </div>
                        <div className="basic__list">
                            <ul>
                                <li>100 MB HDD</li>
                                <li>1 Subdomain</li>
                                <li>2 E-mails</li>
                                <li>License</li>
                                <li>Full support</li>
                            </ul>
                        </div>
                        <button>Begin</button>
                    </div>

                    <div className="professional">
                        <div className="professional__text">
                            <h3>Professional</h3>
                            <p>$25</p>
                            <p>Limited offer</p>
                        </div>
                        <div className="professional__list">
                            <ul>
                                <li>500 MB HDD</li>
                                <li>2 Subdomains</li>
                                <li>5 E-mails</li>
                                <li>1 Year License</li>
                                <li>Full support</li>
                            </ul>
                        </div>
                        <button>Begin</button>
                    </div>
                    <div className="premium">
                        <div className="premium__text">
                            <h3>Premium</h3>
                            <p>$60</p>
                            <p>Limited offer</p>
                        </div>
                        <div className="premium__list">
                            <ul>
                                <li>2 GB HDD</li>
                                <li>5 Subdomains</li>
                                <li>20 E-mails</li>
                                <li>2 Years License</li>
                                <li>Full support</li>
                            </ul>
                        </div>
                        <button>Begin</button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Pricing;