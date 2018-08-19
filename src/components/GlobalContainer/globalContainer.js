import React from 'react';
import './globalContainer.css';

class GlobalContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            active_cryptocurrencies: null,
            active_markets: null,
            bitcoin_percentage_of_market_cap: null,
            total_market_cap: null,
            total_volume_24h: null
        };
    }

    componentDidMount() {
        fetch('https://api.coinmarketcap.com/v2/global/?convert=BTC')
            .then(data => {
                return data.json();
            })
            .then( data => {
                this.setState({
                    active_cryptocurrencies: data.data.active_cryptocurrencies,
                    active_markets: data.data.active_markets,
                    bitcoin_percentage_of_market_cap: data.data.bitcoin_percentage_of_market_cap,
                    total_market_cap: data.data.quotes.USD.total_market_cap,
                    total_volume_24h: data.data.quotes.USD.total_volume_24h
                })
            });
    }

    render() {
        console.log("act", this.state.active_cryptocurrencies);
        return (
                <div className="container-fluid globalContent">
                    <ul className="list-inline">
                        <li className="list-inline-item">Cryptocurrencies: <span className="gl">{this.state.active_cryptocurrencies}</span></li>
                        <li className="list-inline-item">Markets: <span className="gl">{this.state.active_markets}</span></li>
                        <li className="list-inline-item">Market Cap: <span className="gl">{this.state.total_market_cap}</span></li>
                        <li className="list-inline-item">24h Volume: <span className="gl">{this.state.total_volume_24h}</span></li>
                        <li className="list-inline-item">BTC Dominance: <span className="gl">{this.state.bitcoin_percentage_of_market_cap}%</span></li>
                    </ul>
                </div>
        );
    }
}

export default GlobalContainer;
