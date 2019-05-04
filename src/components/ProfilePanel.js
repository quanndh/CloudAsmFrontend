import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from "axios";

class ProfilePanel extends Component {

    logOut(){
        axios.delete("https://toyshop-server.herokuapp.com/api/login/"||"http://localhost:6969/api/login/")
            .then(console.log("log out"));
    }

    render() {
           if(!this.props.username){
               return (
                <div>
                    <Link to="/login">
                        <button className="btn btn-outline-primary">Login</button>
                    </Link>
                    
                </div> 
            );
           } else {
               return (
                   <div>
                        <li className=" nav-item">
                            <div className="nav-link">{this.props.username}</div>
                        </li>
                        <button className="btn btn-outline-primary" onClick={this.logOut}>Log out</button>
                    </div>
                    
                
               );
           }
              
                
    }
}

export default ProfilePanel;
