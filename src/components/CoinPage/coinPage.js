import React from 'react';
import './coinPage.css';

class CoinPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: [],
        };
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        fetch("https://api.coinmarketcap.com/v2/ticker/"+id+"/?convert=BTC&structure=array/")
            .then(data => {
                return data.json();
            }).then(data => {
            let listing = data.data.map((list) => {
                return (
                    <div>
                        <div className="row">
                            <div className="col-md-3">
                                <img src={'/coinLogos/'+list.website_slug+'.png'}/> {list.name} ({list.symbol})
                            </div>
                            <div className="col-md-9">
                                <div className="row coinRow">
                                    <div className="col-md-5">
                                        <span>${list.quotes?(list.quotes.USD||{}).price||0 : 0} USD<span className={list.quotes.USD.percent_change_24h<0?"red":(list.quotes.USD.percent_change_24h>0?"green":"white")}> ({list.quotes.USD.percent_change_24h}%)</span></span>
                                    </div>
                                </div>
                                <div className="row coinRow">
                                    <div className="col-md-5">
                                        <span>{list.quotes?(list.quotes.BTC||{}).price||0 : 0} BTC<span className={list.quotes.BTC.percent_change_24h<0?"red":(list.quotes.BTC.percent_change_24h>0?"green":"white")}> ({list.quotes.BTC.percent_change_24h}%)</span></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <table className="table table-borderless table-hover specificTable">
                                            <thead>
                                            <tr>
                                                <th>Volume (24h)</th>
                                                <th>Market Cap</th>
                                                <th>Circulating Supply</th>
                                                <th>Max Supply</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>${list.quotes.USD.volume_24h} USD <span>{list.quotes.BTC.volume_24h} BTC</span></td>
                                                <td>${list.quotes.USD.market_cap} USD <span>{list.quotes.BTC.market_cap} BTC</span></td>
                                                <td>{list.circulating_supply}</td>
                                                <td>{list.max_supply}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            });
            this.setState({listing: listing});
            console.log("state", this.state.listing);
        })
    }

    render() {
        return (
            <div>
                <div className="container coinContainer">
                    {this.state.listing}
                </div>
            </div>
        );
    }
}

export default CoinPage;
