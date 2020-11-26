import React, {useState} from 'react';

const Calculator = () => {
    const [calculatorData, setCalculatorData] = useState({
        quantity: 0,
        orders: 0,
        package: {
            name: "",
            price: -1,
        },
        accounting: false,
        terminal: false,
    });
    const [error, setError] = useState(false);

    const regEx = new RegExp(/^[0-9]+$/);

    const handleOnChangeInput = (e) => {
        setError(false);
        const {name, value} = e.target;
        if (regEx.test(value)) {
            setCalculatorData(prev => {
                return {
                    ...prev,
                    [name]: parseInt(value)
                };
            })
        } else if (value === "") {
            setError(false);
            setCalculatorData(prev => {
                return {
                    ...prev,
                    [name]: 0
                };
            })
        } else {
            setError(true);
            setCalculatorData(prev => {
                return {
                    ...prev,
                    [name]: 0,
                };
            })
        }
    }


    const handleSelect = (e) => {
        const {options, selectedIndex, value} = e.target
        setCalculatorData(prev => {
            return {
                ...prev,
                package: {
                    name: options[selectedIndex].innerText,
                    price: parseInt(value),
                }
            }
        })
    }

    const handleOnChangeCheckbox = (e) => {
        const {name} = e.target;
        if (e.target.checked) {
            setCalculatorData(prev => {
                return {
                    ...prev,
                    [name]: true
                }
            });
        } else {
            setCalculatorData(prev => {
                return {
                    ...prev,
                    [name]: false
                }
            })
        }
    }

    let total = (calculatorData.quantity * 0.5) + (calculatorData.orders * 0.25) + (calculatorData.package.price > -1 && calculatorData.package.price) + (calculatorData.accounting && 5) + (calculatorData.terminal && 25);
    const validate = () => {
        if (!regEx.test(calculatorData.quantity) || !regEx.test(calculatorData.orders)) {
            setError(true);
        }
    }

    return (
        <section className="calculator">
            <h2>Calculate how much you'll pay</h2>
            <div className="container calculator__content">
                <div className="calculator__input">
                    <input maxLength={6} onChange={handleOnChangeInput} name="quantity" id="quantity" type="text"
                           placeholder="Products quantity"/>
                    <input maxLength={6} onChange={handleOnChangeInput} name="orders" id="orders " type="text"
                           placeholder="Estimated orders in month"/>
                    <select onChange={handleSelect} name="packagePlan" id="packagePlan"
                            value={calculatorData.package.price}>
                        <option disabled value={-1}>Choose a package</option>
                        <option value={0}>Basic</option>
                        <option value={25}>Professional</option>
                        <option value={60}>Premium</option>
                    </select>
                    <div className="checkbox">
                        <input onChange={handleOnChangeCheckbox} name="accounting" type="checkbox"/>
                        <p>Accounting</p>
                    </div>
                    <div className="checkbox">
                        <input onChange={handleOnChangeCheckbox} name="terminal" type="checkbox"/>
                        <p>Rental of payment terminal</p>
                    </div>

                </div>
                <div className="calculator__result">
                    <ul>

                        <li style={{opacity: calculatorData.quantity > 0 ? 1 : 0}}>
                            <span>Products</span><span>{calculatorData.quantity} * $0.5</span><span>$ {calculatorData.quantity * 0.5}</span>
                        </li>

                        <li style={{opacity: calculatorData.orders > 0 ? 1 : 0}}>
                            <span>Orders</span><span>{calculatorData.orders} * $0.25</span><span>$ {calculatorData.orders * 0.25}</span>
                        </li>
                        <li style={{opacity: calculatorData.package.price > -1 ? 1 : 0}}>
                            <span>Package</span><span>{calculatorData.package.name}</span><span>$ {calculatorData.package.price}</span>
                        </li>
                        <li style={{opacity: calculatorData.accounting ? 1 : 0}}>
                            <span>Accounting</span><span>$ {calculatorData.accounting && 5}</span></li>
                        <li style={{opacity: calculatorData.terminal ? 1 : 0}}>
                            <span>Terminal</span><span>$ {calculatorData.terminal && 25}</span></li>
                        <li><span>Total</span><span>$ {total}</span></li>
                    </ul>
                    {error ?
                        <span className="calculator__result-error">Invalid input, please use numbers only</span> :
                        <span className="calculator__result-error"/>}
                </div>
            </div>
        </section>
    );
};

export default Calculator;

