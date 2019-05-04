import React, { Component } from 'react';
import {Card,  CardImg, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import { CartContext } from "../contexts/Cart";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Product extends Component {

    render() {
        const {product} = this.props;
        return (  
            <Card>
                <Link to={`products/${product._id}`} className="link">
                    <CardImg 
                        top
                        width="100%" 
                        src={product.imageUrl} alt="Card image cap" 
                        className="img" />
                    <div class="hover">
                        <div class="info">
                            {product.discription}                               
                        </div>
                    </div>
                    <CardBody className="cardBody clear-fix">
                        <CardTitle className="float-left">{product.title}</CardTitle>
                        <CardSubtitle className="float-right">${product.price}</CardSubtitle>
                    </CardBody>
                </Link>
                <CartContext.Consumer>
                    {({addToCart}) => <Button className="btn-add" outline color="secondary" onClick={() => addToCart(product)}>Add to cart</Button>}
                </CartContext.Consumer>
            </Card>            
        );
    }
}

export default Product;
