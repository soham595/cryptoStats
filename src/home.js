import React from 'react';

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
        const rowsPerPage = 100;
        const start = page * rowsPerPage;
        fetch(`https://api.coinmarketcap.com/v2/ticker/?convert=USD&structure=array&start=${start}`)
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
                    <td>{row.name}</td>
                    <td>{row.quotes? (row.quotes.USD||{}).price||0 : 0}</td>
                    <td>{row.symbol}</td>
                    <td>{row.quotes.USD.volume_24h}</td>
                    <td>{row.quotes.USD.percent_change_24h}%</td>
                </tr>
        );

        // Render the table
        // Take a look at the onClick handlers
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h3>Cryptocurrency Statistics</h3>
                        <br/>
                        <table className="table table-borderless table-hover">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Symbol</th>
                                <th>Volume(24h)</th>
                                <th>Change(24h)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {rows}
                            </tbody>
                        </table>
                    </div>
                    <button onClick={() => this.fetchData(prevPage)}>Prev</button>
                    <button onClick={() => this.fetchData(nextPage)}>Next</button>
                </div>
            </div>
        );
    }
}

export default HomePage;