import React, {Component} from 'react';
import NavigationBar from "./components/NavigationBar/navigationBar";
import Routes from "./routes/routes";
import Footer from "./components/Footer/footer";
import './components/Footer/sticky-footer.css';
import './App.css';
import GlobalContainer from "./components/GlobalContainer/globalContainer";

class App extends Component {
    render() {
        return (
            <div className="App Site">
                <GlobalContainer/>
                <NavigationBar/>
                <div className="Site-content">
                    <div className="container-fluid">
                        <Routes/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
