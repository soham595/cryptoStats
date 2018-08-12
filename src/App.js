import React, {Component} from 'react';
import NavigationBar from "./navigationBar";
import Routes from "./routes";
import Footer from "./footer";
import './sticky-footer.css';
import './App.css';
import GlobalContainer from "./globalContainer";

class App extends Component {
    render() {
        return (
            <div className="App Site">
                <GlobalContainer/>
                <NavigationBar/>
                <div className="Site-content">
                    <div className="container">
                        <Routes/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
