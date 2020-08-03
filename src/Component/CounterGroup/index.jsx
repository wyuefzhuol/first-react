import React, {Component} from 'react';
import Counter from '../Counter';

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0
        };
    }

    handleResize = (event) => {
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0
        })
    }

    render() {
        const initArray = [...Array(this.state.size).keys()];

        return (<div>
            <label>
                Group Size:
                <input onBlur={this.handleResize} defaultValue="0" />
            </label>
            { initArray.map(key => <Counter key={key}/>) }
        </div>);
    }
}

export default CounterGroup;