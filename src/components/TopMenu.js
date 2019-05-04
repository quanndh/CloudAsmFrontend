import React from 'react';
import {Link} from "react-router-dom";
import {CartContext} from "../contexts/Cart";
import cart from "../img/cart.svg";
import ProfilePanel from './ProfilePanel';

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  textChange = event => {
    this.props.onSearchChange(event.target.value);
}
  render() {
    return (
        <nav className="navbar navbar-light navbar-expand">
          <div className="container">

            <Link class="col-3 navbar-brand mb-0 h1" to="/">
              <img src="http://www.findthatlogo.com/wp-content/gallery/kids-logos/toys-r-us-logo.gif" alt="" className="mr-1"/>
              ToyShop
            </Link>

            <div className="col-6 text-center">
              <input className="form-control " onChange={this.textChange}  type="search" placeholder="Search" aria-label="Search"/>
            </div>
            
            <div className=" col-3 collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                    <CartContext.Consumer>
                      {({cartItems}) => 
                        <Link to="/product" className="nav-link">
                          <img src={cart} alt=""/> ({cartItems.length})
                        </Link> 
                      }  
                    </CartContext.Consumer>
                </li>
                <li className=" nav-item">
                  <ProfilePanel username={this.props.username}/>
                </li>
                {
                  this.props.username === "admin" && 
                    <li className=" nav-item">
                      <Link to="/manage" className="nav-link">
                      Manage
                      </Link>
                    </li>
                }
              </ul>
            </div>

          </div>
      </nav>
    );
  }
}