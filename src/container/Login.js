import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div class="login-form">
                <form action="https://toyshop-server.herokuapp.com/api/login/"  method="post">
                    <h2 class="text-center">Login</h2>   
                    <div class="form-group has-error">
                        <input type="text" class="form-control" name="account" placeholder="Username" required="required"/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" name="password" placeholder="Password" required="required"/>
                    </div>        
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>
                    </div>
                    Not have an account? <Link to="/login"> Sign up</Link>
                </form>
            </div>
        );
    }
}

export default Login;
