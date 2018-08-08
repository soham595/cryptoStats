import React, {Component} from 'react';
import NavigationBar from "./navigationBar";
import Routes from "./routes";
import Footer from "./footer";
import './sticky-footer.css';

class App extends Component {
    render() {
        return (
            <div className="App Site">
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
