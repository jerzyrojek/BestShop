import React from "react";



function Calculator() {
    return <section className="calculator">
        <h2>Calculate how much you'll pay</h2>
        <div className="container calculator__content">
            <div className="calculator__input">
                <input id="quantity"  type="number" placeholder="Products quantity"/>
                <input id="orders " type="number" placeholder="Estimated orders in month"/>
                <select id="packagePlan" defaultValue="Choose a package">
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
                    <li><span>Products</span><span>20*0.5</span><span>10</span></li>
                    <li><span>Orders</span><span>30*0.25</span><span>7.5</span></li>
                    <li><span>Package</span><span>Premium</span><span>60</span></li>
                    <li><span>Accounting</span><span>35</span></li>
                    <li><span>Terminal</span><span>5</span></li>
                    <li><span>Total</span><span>117.5</span></li>
                </ul>
            </div>
        </div>
    </section>
}

export default Calculator;