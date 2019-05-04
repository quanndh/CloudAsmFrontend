import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class SignUp extends Component {
    render() {
        return (
            <div class="login-form">
                <form action="https://toyshop-server.herokuapp.com/api/users/"  method="post">
                    <h2 class="text-center">Sign Up</h2>   
                    <div class="form-group has-error">
                        <input type="text" class="form-control" name="account" placeholder="Username" required="required"/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" name="password" placeholder="Password" required="required"/>
                    </div>   
                    <div class="form-group">
                        <input type="text" class="form-control" name="name" placeholder="Username" required="required"/>
                    </div>      
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-lg btn-block" onSubmit={this.handleOnSubmmit}>Sign Up</button>
                    </div>
                    Already have account? <Link to="/login"> Login</Link>
                </form>
            </div>
        );
    }
}

export default SignUp;
