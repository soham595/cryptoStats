import React from 'react';
import './home.css';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPage: 0,
            data: [],
            isLoading: false
        };
    }
    fetchData(page) {
        this.setState({ isLoading: true });
        //Set it to the amount of records you want per page
        const rowsPerPage = 20;
        const start = page * rowsPerPage;
        fetch(`https://api.coinmarketcap.com/v2/ticker/?convert=USD&structure=array&start=${start+1}&limit=20`)
            .then(data => data.json())
            .then(({ data }) => {
                this.setState({
                    data,
                    currentPage: page,
                    isLoading: false
                })
            })
    };
    componentDidMount() {
        this.fetchData(this.state.currentPage)
    }
    render() {
        const { currentPage, data, isLoading } = this.state;
        // Always a good thing to check if the data is loaded
        if (isLoading)
            return <div>Loading...</div>;
        // Maybe you'll need a better logic here
        const prevPage = currentPage === 0 ? 0 : currentPage - 1;
        const nextPage = currentPage + 1;
        // Implement your rendering logic here
        const rows = data.map(
            row =>
                <tr key={row.id}>
                    <td>{row.rank}</td>
                    <td className="coin-name"><img className="homeImg" src={'/coinLogos/'+row.website_slug+'.png'}/> <Link to={"/cryptostats/currencies/"+row.id} className="link-name">{row.name}</Link></td>
                    <td className="coin-name">{row.symbol}</td>
                    <td className="blue"><Link to={"/cryptostats/currencies/"+row.id} className="blue">${row.quotes? (row.quotes.USD||{}).price||0 : 0}</Link></td>
                    <td>${row.quotes.USD.volume_24h}</td>
                    <td>${row.quotes.USD.market_cap}</td>
                    <td className={row.quotes.USD.percent_change_1h<0?"red":(row.quotes.USD.percent_change_1h>0?"green":"white")}>{row.quotes.USD.percent_change_1h}%</td>
                    <td className={row.quotes.USD.percent_change_24h<0?"red":(row.quotes.USD.percent_change_24h>0?"green":"white")}>{row.quotes.USD.percent_change_24h}%</td>
                    <td className={row.quotes.USD.percent_change_7d<0?"red":(row.quotes.USD.percent_change_7d>0?"green":"white")}>{row.quotes.USD.percent_change_7d}%</td>
                </tr>
        );
        // Render the table
        // Take a look at the onClick handlers
        return (
            <div className="container">
                <h3>Cryptocurrency Statistics</h3>
                <br/>
                <div className="jumbotron">
                    <div className="container">
                        <button className={currentPage===0?"none":"float-left btn btn-outline-light btnPage"} onClick={() => this.fetchData(prevPage)}>Previous 20</button>
                        <button className="float-right btn btn-outline-light btnPage" onClick={() => this.fetchData(nextPage)}>Next 20</button>
                        <table className="table table-borderless table-responsive-lg table-hover">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th className="coin-name">Name</th>
                                <th className="coin-name">Symbol</th>
                                <th>Price</th>
                                <th>Volume (24h)</th>
                                <th>Market Cap</th>
                                <th>Change (1h)</th>
                                <th>Change (24h)</th>
                                <th>Change (7d)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {rows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;