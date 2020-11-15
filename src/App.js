import React, {Component} from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterType: 'name'
        }
    }

    handleFilterChange(filterType) {
        this.setState({filterType})
    }

    render() {
        return (
            <div className="container-fluid">
                <center><h1>Birthday Records</h1></center>
                <Filter
                    onChange={(filterType) => this.handleFilterChange(filterType)}
                    filterType={this.state.filterType}
                ></Filter>
                <RecordTable
                    filterType={this.state.filterType}
                ></RecordTable>
            </div>
        );
    }
}

export default App;
