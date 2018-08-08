import React from 'react';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            listing: [],
        };
    }

    componentDidMount() {
        fetch('https://api.coinmarketcap.com/v2/listings/')
            .then(data => {
                return data.json();
            }).then(data => {
                let listing = data.data.map((list) => {
                    return (
                        <li key={list.data}>
                            {list.name}
                        </li>
                    )
                })
            this.setState({listing: listing});
                console.log("state", this.state.listing);
        })
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container text-center">
                        <p>RANDOM</p>
                        {this.state.listing}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;