import React from "react";

function Calculator() {
    return <section className="calculator">
        <h2>Calculate how much you'll pay</h2>
        <div className="container calculator__content">
            <div className="calculator__input">
                <input id="quantity" onChange={() => console.log("Lol")} type="number" placeholder="Products quantity"/>
                <input id="orders " type="number" placeholder="Estimated orders in month"/>
                <select id="packagePlan">
                    <option value="" selected disabled>Choose a package</option>
                    <option>Basic</option>
                    <option>Professional</option>
                    <option>Premium</option>
                </select>
                <div className="checkbox">
                    <input name="accounting-checkbox" type="checkbox"/>
                    <p>Accounting</p>
                </div>
                <div className="checkbox">
                    <input type="checkbox"/>
                    <p>Rental of payment terminal</p>
                </div>

            </div>
            <div className="calculator__result">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </section>
}

export default Calculator;