import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from "./components/TopMenu";
import MainContent from './container/MainContent';
import {CartProvider} from "./contexts/Cart";
import ProductDetail from './container/ProductDetail';
import Footer from './components/Footer';
import Login from './container/Login';
import axios from "axios";

class App extends Component {
  constructor(){
    super();
    this.state = {
      search: "",
      username: "",
      userId: ""
    }
  }
  onSearchChange = text => this.setState({search: text});
  componentDidMount(){
    axios.get("http://localhost:6969/api/login/me", {
      withCredentials: true
    })
      .then(data => {
        this.setState({
          username : data.data.message.name,
          userId: data.data.message._id
        })
      })
  }

  render() {
      const {search, username, userId} = this.state;
    return (
      <CartProvider>
        <Router>
          <div className="App">

            <TopMenu onSearchChange={this.onSearchChange} username={username}/>
            <Route path="/" exact render={props => {
              return <MainContent search={search} {...props} userId={userId}/>
            }}></Route>

            <Route path="/products/:productId" render={props => {
                return <ProductDetail {...props} userId={userId}/>
              }}
            />
            <Route path="/login" render={props => {
              return <Login {...props}/>
            }} />
            <Footer />
          </div>
        </Router>
      </CartProvider>
      
      
    );
  }
}

export default App;
