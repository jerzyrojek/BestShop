import React, {Component} from "react";


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0,
            quantityOpacity:0,
            orders: 0,
            ordersOpacity:0,
            package: {
                name: "",
                price: 0,
                opacity:0,
            },
            accounting: null,
            accountingOpacity:0,
            terminal: null,
            terminalOpacity:0,
        }
    }

    handleChangeQuantity = (e) => {
        if(e.target.value < 0){
           return  alert("Number of products must be provided");
        } else if (e.target.value > 200000){
           return  alert("For transactions of this size, please reach out to us directly through the form below");
        }
        if(e.target.value > 0) {
            this.setState({quantity: e.target.value, quantityOpacity: 1});
        }else {
            this.setState({quantityOpacity:0});
        }
    }

    handleChangeOrders = (e) => {
        if(e.target.value < 0){
            return  alert("Number of orders must be provided");
        } else if (e.target.value > 200000){
            return  alert("For transactions of this size, please reach out to us directly through the form below");
        }
        if(e.target.value > 0) {
            this.setState({orders: e.target.value, ordersOpacity:1});
        } else {
            this.setState({ordersOpacity:0});
        }
    }

    handleChangePackage = (e) => {
        this.setState({
            package: {
                name: e.target.options[e.target.selectedIndex].innerText,
                price: parseInt(e.target.value),
                opacity:1,
            }
        });
    }

    handleChangeAccounting = (e) => {
        if (e.target.checked) {
            this.setState({accounting: 35, accountingOpacity:1});
        } else {
            this.setState({accounting: null, accountingOpacity:0});
        }
    }
    handleChangeTerminal = (e) => {
        if (e.target.checked) {
            this.setState({terminal: 5, terminalOpacity:1});
        } else {
            this.setState({terminal: null, terminalOpacity:0});
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
                        <li style={{opacity:this.state.quantityOpacity}}>
                            <span>Products</span><span>{this.state.quantity} * $0.5</span><span>$ {this.state.quantity * 0.5}</span>
                        </li>
                        <li style={{opacity:this.state.ordersOpacity}}>
                            <span>Orders</span><span>{this.state.orders} * $0.25</span><span>$ {this.state.orders * 0.25}</span>
                        </li>
                        <li style={{opacity:this.state.package.opacity}}>
                            <span>Package</span><span>{this.state.package.name}</span><span>$ {this.state.package.price}</span>
                        </li>
                        <li style={{opacity:this.state.accountingOpacity}}><span>Accounting</span><span>$ {this.state.accounting}</span></li>
                        <li style={{opacity:this.state.terminalOpacity}}><span>Terminal</span><span>$ {this.state.terminal}</span></li>
                        <li><span>Total</span><span>$ {total}</span></li>
                    </ul>
                </div>
            </div>
        </section>
    }

}

export default Calculator;


