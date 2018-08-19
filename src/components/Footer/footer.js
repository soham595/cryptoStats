import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid site-footer">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <form className="form-inline">
                            <span>Get Deals: </span>
                            <input name="email" type="email" className="form-control" size="50" placeholder="Email Address"/>
                            <button type="button" className="btn btn-danger">Sign Up</button>
                        </form>
                    </div>
                    <div className="col-md-2">
                        <span>Lorem Ipsum Copyright</span>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;