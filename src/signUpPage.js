import React from 'react';
import './signUp.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class SignUpPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        axios.post('/users', {users: this.state});
    }

    render() {
        return (
            <div className="container signin-container">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col-md-8">
                        <div className="card signin-card">
                            <div className="card-header">
                                <h3>Sign Up</h3>
                            </div>
                            <div className="card-body">
                                <form className="signin-form" onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input value={this.state.username} onChange={this.onChange} type="text"
                                               className="form-control" placeholder="Username" name="username"
                                               required/>
                                    </div>
                                    <div className="form-group">
                                        <input value={this.state.email} onChange={this.onChange} type="text"
                                               className="form-control" placeholder="Email" name="email"
                                               required/>
                                    </div>
                                    <div className="form-group">
                                        <input value={this.state.password} onChange={this.onChange} type="password"
                                               className="form-control" placeholder="Password" name="password"
                                               required/>
                                    </div>
                                    <div className="form-group">
                                        <input value={this.state.passwordConfirmation} onChange={this.onChange}
                                               type="password"
                                               className="form-control" placeholder="Confirm Password"
                                               name="passwordConfirmation"
                                               required/>
                                    </div>
                                    <button type="submit" className="btn btn-lg btn-custom">Register</button>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input"/>
                                            Remember Me <a href="#">Need Help?</a>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="create-account">
                            <Link to="/signin">Existing User? Login</Link>
                        </div>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpPage;