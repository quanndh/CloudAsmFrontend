import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class ProfilePanel extends Component {
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
                <li className=" nav-item">
                    <div className="nav-link">{this.props.username}</div>
                </li>
               );
           }
              
                
    }
}

export default ProfilePanel;
