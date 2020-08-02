import React,{Component} from "react";

class HamburgerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHamburgerMenuOpen:false,
        }
    }

    handleHamburgerClick = () => {
        this.setState({isHamburgerMenuOpen: !this.state.isHamburgerMenuOpen});
    }

    render() {
        const {isHamburgerMenuOpen} = this.state;
        let toggleHamburger;
        if(isHamburgerMenuOpen) {
            toggleHamburger = <a className="icon" onClick={this.handleHamburgerClick}><i className="fa fa-times"></i></a>

        } else {
            toggleHamburger = <a className="icon" onClick={this.handleHamburgerClick}><i className="fa fa-bars"></i></a>;
        }
        return (
            <nav>
                <span>BestShop</span>
                {toggleHamburger}
                {/*<a className="icon" onClick={this.handleHamburgerClick}><i className="fa fa-bars"></i></a>*/}

                <ul className={`linkMenu ${isHamburgerMenuOpen ? "show" : ""}`}>
                    <li><a href="#">Why us</a></li>
                    <li><a href="#">Benefits</a></li>
                    <li><a href="#">Prices</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        )
    }

}

export default HamburgerMenu;