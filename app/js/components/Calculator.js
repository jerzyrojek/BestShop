import React, {Component} from "react";


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity:0,
            orders:0,
            package:0,
            accounting:null,
            terminal:null,
        }
    }
    handleChangeQuantity = (e) => {
        this.setState({quantity: e.target.value});
    }

    handleChangeOrders = (e) => {
        this.setState({orders: e.target.value});
    }

    handleChangePackage = (e) => {
        this.setState({package:parseInt(e.target.value)});
        e.target.selected;
    }

    handleChangeAccounting = (e) => {
        if(e.target.checked){
            this.setState({accounting:35});
        } else {
            this.setState({accounting:null});
        }
    }
    handleChangeTerminal = (e) => {
        if(e.target.checked){
            this.setState({terminal:5});
        } else {
            this.setState({terminal:null});
        }
    }

    render() {
        let total = (this.state.quantity * 0.5) + (this.state.orders * 0.25) + (this.state.package) + this.state.accounting + this.state.terminal;
        return <section className="calculator">
            <h2>Calculate how much you'll pay</h2>
            <div className="container calculator__content">
                <div className="calculator__input">
                    <input onChange={this.handleChangeQuantity} id="quantity"  type="number"  placeholder="Products quantity"/>
                    <input onChange={this.handleChangeOrders} id="orders " type="number"  placeholder="Estimated orders in month"/>
                    <select id="packagePlan" onChange={this.handleChangePackage} value={"Choose a package"}>
                        <option disabled>Choose a package</option>
                        <option  value={0} >Basic</option>
                        <option  value={25} >Professional</option>
                        <option value={60} >Premium</option>
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
                        <li><span>Products</span><span>{this.state.quantity} * 0.5</span><span>$ {this.state.quantity * 0.5}</span></li>
                        <li><span>Orders</span><span>{this.state.orders} * 0.25</span><span>$ {this.state.orders * 0.25}</span></li>
                        <li><span>Package</span><span>Professional</span><span>$ {this.state.package}</span></li>
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


