import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {

    onChange(type){
        this.props.onChange(type);
    }

    render() {
        return (
        <div className="checkboxes">
            <Checkbox
                name="name"
                id="name"
                onChange={() => this.onChange('name')}
                checked={this.props.filterType === 'name'}
            />
            <label htmlFor="name">Name</label>

            <Checkbox
                name="age"
                id="age"
                onChange={() => this.onChange('age')}
                checked={this.props.filterType === 'age'}
            />
            <label htmlFor="age">Age</label>
        </div>
        );
    }
}

export default Filter;