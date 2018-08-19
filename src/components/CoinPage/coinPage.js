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
        fetch("https://api.coinmarketcap.com/v2/ticker/1/?convert=BTC&structure=array/")
            .then(data => {
                return data.json();
            }).then(data => {
            let listing = data.data.map((list) => {
                return (
                    <div>
                        <div className="row">
                            <div className="col-md-3 slug">
                                <img className="specImg" src={'/coinSpecificLogos/'+list.website_slug+'.png'}/><span className="specName"> {list.name}</span><span className="specSymbol"> ({list.symbol})</span>
                            </div>
                            <div className="col-md-7">
                                <div className="row coinRow">
                                    <div className="col-md-12">
                                        <span className="specUSD">${list.quotes?(list.quotes.USD||{}).price||0 : 0}<span className="specUSDspan"> USD</span> <span className={list.quotes.USD.percent_change_24h<0?"red":(list.quotes.USD.percent_change_24h>0?"green":"white")}> ({list.quotes.USD.percent_change_24h}%)</span></span>
                                    </div>
                                </div>
                                <div className="row coinRow">
                                    <div className="col-md-5">
                                        <span className="specBTC">{list.quotes?(list.quotes.BTC||{}).price||0 : 0} BTC<span className={list.quotes.BTC.percent_change_24h<0?"red":(list.quotes.BTC.percent_change_24h>0?"green":"white")}> ({list.quotes.BTC.percent_change_24h}%)</span></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <table className="table table-borderless table-hover specificTable">
                                            <thead>
                                            <tr>
                                                <th>Market Cap</th>
                                                <th>Volume (24h)</th>
                                                <th>Circulating Supply</th>
                                                <th>Max Supply</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>${list.quotes.USD.market_cap} USD <p className="tableBTC">{list.quotes.BTC.market_cap} BTC</p></td>
                                                <td>${list.quotes.USD.volume_24h} USD <p className="tableBTC">{list.quotes.BTC.volume_24h} BTC</p></td>
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
                <div className="container-fluid coinContainer">
                    {this.state.listing}
                </div>
            </div>
        );
    }
}

export default CoinPage;
