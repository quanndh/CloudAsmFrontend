import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class SignUp extends Component {
    render() {
        return (
            <div class="login-form">
                <form action="https://toyshop-server.herokuapp.com/api/user/"  method="post">
                    <h2 class="text-center">Sign Up</h2>   
                    <div class="form-group has-error">
                        <input type="text" class="form-control" name="account" placeholder="Username" required="required"/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" name="password" placeholder="Password" required="required"/>
                    </div>   
                    <div class="form-group">
                        <input type="Username" class="form-control" name="name" placeholder="Password" required="required"/>
                    </div>      
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-lg btn-block">Sign Up</button>
                    </div>
                    Already have account? <Link to="/SignUp"> Login</Link>
                </form>
            </div>
        );
    }
}

export default SignUp;
