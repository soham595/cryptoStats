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
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/signin' component={SignInPage}/>
                    <Route path='/signup' component={SignUpPage}/>
                </div>
            </main>
        );
    }
}

export default Routes;
