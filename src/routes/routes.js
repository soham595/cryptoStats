import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import SignUpPage from '../components/LoginPages/signUpPage';
import SignInPage from "../components/LoginPages/signInPage";
import HomePage from "../components/HomePage/home";
import CoinPage from "../components/CoinPage/coinPage";

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
