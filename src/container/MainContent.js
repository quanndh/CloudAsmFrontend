import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Product from '../Pages/Product';
import axios from "axios";

class MainContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        axios.get( "https://toyshop-server.herokuapp.com/api/products/" || "http://localhost:6969/api/products", 
        {
            withCredentials: true
        })
        .then(res => {
            this.setState({
                products: res.data.data,
            })
        })
      }

    render() {
        const {products} = this.state;
        const displayProduct = products.filter(product => product.title.toLowerCase().includes(this.props.search) )
        return (
            <Container>
                <Row>
                    {
                        displayProduct.length > 0 ?
                        displayProduct.map(item => 
                                <Col sm="6" md="4" className="mb-4">
                                    <Product product={item} key={item._id}/>                                 
                                </Col>
                        )
                        : "No product found"
                        
                    }
                </Row>
            </Container>
        );
    }
}

export default MainContent;
