import React from "react";

function Questions() {
    return (
        <>
            <section className="questions">
                <div className="container questions__content">
                    <div className="questions__content__text">
                        <p>Any questions?</p>
                        <p>Leave your email address or call us!</p>
                        <div className="questions__content__text-contact">
                            <div className="questions__content__text-contact-email">
                            <img src="assets/Mail%20Icon.svg" alt="mail-icon"/>
                            <p>info@bestshop.xyz</p>
                            </div>
                            <div className="questions__content__text-contact-phone">
                            <img src="assets/Phone%20Icon.svg" alt="phone-icon"/>
                            <p>123 456 789</p>
                            </div>
                        </div>
                    </div>
                    <form>
                        <label>Name</label>
                        <input type="text" title="name"/>
                        <label>Email</label>
                        <input type="email" title="Email"/>
                        <div className="checkbox">
                            <input type="checkbox" title="checkbox"/>
                            <p>I hereby give consent for my personal data included in my application to be
                                processed for the
                                purposes of the recruitment process under
                                the European Parliament’s and Council of the European Union Regulation on
                                the Protection of Natural
                                Persons as of 27 April 2016,
                                with regard to the processing of personal data and on the free movement of
                                such data, and repealing
                                Directive 95/46/EC (Data Protection Directive)</p>
                        </div>
                        <button>Send</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Questions;