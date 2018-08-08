import React from 'react';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            listing: [],
        };
    }

    componentDidMount() {
        fetch('https://api.coinmarketcap.com/v2/ticker/?convert=USD&limit=10&structure=array')
            .then(data => {
                return data.json();
            }).then(data => {
                let listing = data.data.map((list) => {
                    return (
                        <li key={list.id}>{list.rank} {list.quotes? (list.quotes.USD||{}).price||0 : 0} {list.name} {list.symbol} {list.total_supply}</li>
                    )
                });
            this.setState({listing: listing});
                console.log("state", this.state.listing);
        })
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <p>RANDOM</p>
                        {this.state.listing}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;