import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import SignUpPage from './signUpPage';
import SignInPage from "./signInPage";
import HomePage from "./home";

class Routes extends Component {
    render() {
        return (
            <main>
                <div>
                    <Route exact path='/cryptostats' component={HomePage}/>
                    <Route path='/cryptostats/signin' component={SignInPage}/>
                    <Route path='/cryptostats/signup' component={SignUpPage}/>
                </div>
            </main>
        );
    }
}

export default Routes;
