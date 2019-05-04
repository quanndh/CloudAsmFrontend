import React, { Component } from 'react';
import axios from "axios";
import Product from '../Pages/Product';

class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: "",
            newFb : "",
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
    }
    componentDidMount() {
        axios.get( `https://toyshop-server.herokuapp.com/api/products/${this.props.match.params.productId}`||`http://localhost:6969/api/products/${this.props.match.params.productId}`)
            .then(data => {
                this.setState({
                    product: data.data.data
                })
            })
            .catch(err => console.error(err))
    }

    handleOnChange(e){
        this.setState({
            newFb: e.target.value,
        })
    }

    handleOnKeyUp(e){
        let text = e.target.value
        console.log(e.keyCode, this.props.userId)
        if(e.keyCode === 13 && this.props.userId){
            axios.post(`https://toyshop-server.herokuapp.com/api/products/${this.props.match.params.productId}/feedback`||`http://localhost:6969/api/products/${this.props.match.params.productId}/feedback`, {
                userId: this.props.userId,
                content: text
            })
            .then(data => {
                this.setState({
                    product: data.data.data,
                    newFb: ""
                })
            })
        } 
    }



    render() {
        const {product} = this.state;
        const feedback = this.state.product.feedback ? this.state.product.feedback.map(cmt => (
            <p>
                <span className="font-weight-bold">{cmt.createdBy.name}</span> : {" "} {cmt.content}    
            </p>)
        ) : "Be the first to feedback";
        return (
            <div className="container mt-2">
                <div className="row ">
                    <div className="col-6">
                        <Product product={product} key={product._id}/>
                    </div>
                   <div className="col-6 feedback">
                        <h4>User feedbacks:</h4>
                        {feedback}
                        <input type="text" className="inputFb" value={this.state.newFb} onChange={this.handleOnChange} onKeyUp={this.handleOnKeyUp} required="true"/>
                   </div>
                </div>   
            </div>
        );
    }
}

export default ProductDetail;
