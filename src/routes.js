import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import SignUpPage from './signUpPage';
import SignInPage from "./signInPage";
import HomePage from "./home";
import CoinPage from "./coinPage";

class Routes extends Component {
    render() {
        return (
            <main>
                <div>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/cryptostats' component={HomePage}/>
                    <Route path='/cryptostats/currencies/:id' component={CoinPage}/>
                    <Route path='/cryptostats/signin' component={SignInPage}/>
                    <Route path='/cryptostats/signup' component={SignUpPage}/>
                </div>
            </main>
        );
    }
}

export default Routes;
