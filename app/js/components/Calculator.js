import React, {Component} from "react";


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0,
            orders: 0,
            package: {
                name: "",
                price: 0,
            },
            accounting: null,
            terminal: null,
        }
    }

    handleChangeQuantity = (e) => {
        if(e.target.value < 0){
           return  alert("Number of products must be a positive number");
        } else if (e.target.value > 200000){
           return  alert("For transactions of this size, please reach out to us directly through the form below");
        }

        this.setState({quantity: e.target.value});
    }

    handleChangeOrders = (e) => {
        if(e.target.value < 0){
            return  alert("Number of orders must be a positive");
        } else if (e.target.value > 200000){
            return  alert("For transactions of this size, please reach out to us directly through the form below");
        }
        this.setState({orders: e.target.value});
    }

    handleChangePackage = (e) => {
        this.setState({
            package: {
                name: e.target.options[e.target.selectedIndex].innerText,
                price: parseInt(e.target.value)
            }
        });
    }

    handleChangeAccounting = (e) => {
        if (e.target.checked) {
            this.setState({accounting: 35});
        } else {
            this.setState({accounting: null});
        }
    }
    handleChangeTerminal = (e) => {
        if (e.target.checked) {
            this.setState({terminal: 5});
        } else {
            this.setState({terminal: null});
        }
    }

    render() {
        let total = (this.state.quantity * 0.5) + (this.state.orders * 0.25) + (this.state.package.price) + this.state.accounting + this.state.terminal;
        return <section className="calculator">
            <h2>Calculate how much you'll pay</h2>
            <div className="container calculator__content">
                <div className="calculator__input">
                    <input onChange={this.handleChangeQuantity} id="quantity" type="number"
                           placeholder="Products quantity"/>
                    <input onChange={this.handleChangeOrders} id="orders " type="number"
                           placeholder="Estimated orders in month"/>
                    <select id="packagePlan" onChange={this.handleChangePackage}>
                        <option disabled selected>Choose a package</option>
                        <option value={0}>Basic</option>
                        <option value={25}>Professional</option>
                        <option value={60}>Premium</option>
                    </select>
                    <div className="checkbox">
                        <input onChange={this.handleChangeAccounting} name="accounting-checkbox" type="checkbox"/>
                        <p>Accounting</p>
                    </div>
                    <div className="checkbox">
                        <input onChange={this.handleChangeTerminal} type="checkbox"/>
                        <p>Rental of payment terminal</p>
                    </div>

                </div>
                <div className="calculator__result">
                    <ul>
                        <li>
                            <span>Products</span><span>{this.state.quantity} * $0.5</span><span>$ {this.state.quantity * 0.5}</span>
                        </li>
                        <li>
                            <span>Orders</span><span>{this.state.orders} * $0.25</span><span>$ {this.state.orders * 0.25}</span>
                        </li>
                        <li>
                            <span>Package</span><span>{this.state.package.name}</span><span>$ {this.state.package.price}</span>
                        </li>
                        <li><span>Accounting</span><span>$ {this.state.accounting}</span></li>
                        <li><span>Terminal</span><span>$ {this.state.terminal}</span></li>
                        <li><span>Total</span><span>$ {total}</span></li>
                    </ul>
                </div>
            </div>
        </section>
    }

}

export default Calculator;


