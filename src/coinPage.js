import React from 'react';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class CoinPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: [],
        };
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        fetch("https://api.coinmarketcap.com/v2/ticker/"+id+"/?structure=array/")
            .then(data => {
                return data.json();
            }).then(data => {
            let listing = data.data.map((list) => {
                return (
                    <tr key={list.id}>
                        <td>{list.id}</td>
                        <td>{list.rank}</td>
                        <td>{list.name} </td>
                        <td>{list.quotes? (list.quotes.USD||{}).price||0 : 0}</td>
                        <td>{list.symbol}</td>
                        <td>{list.quotes.USD.volume_24h}</td>
                        <td>{list.quotes.USD.percent_change_24h}%</td>
                    </tr>
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
                        <h3>Cryptocurrency Statistics</h3>
                        <br/>
                        <table id="dtBasicExample" className="table table-borderless table-hover">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Symbol</th>
                                <th>Volume</th>
                                <th>Change(24h)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.listing}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoinPage;
