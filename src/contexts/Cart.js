import React, { Component } from 'react';

const CartContext = React.createContext();

class CartProvider extends Component {
    constructor(){
        super();
        this.state = {
            cartItems : [],
        }
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(product) {
        this.setState({
            cartItems: this.state.cartItems.concat(product)
        })
    }
    render() {
        return (
            <CartContext.Provider value={{
                cartItems: this.state.cartItems,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export { CartProvider, CartContext };
