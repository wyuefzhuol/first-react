import React, {Component} from 'react';
import Counter from '../Counter';

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.size = 6;
    }

    render() {
        const initArray = [...Array(this.size).keys()];

        return (<div>
            { initArray.map(key => <Counter key={key}/>) }
        </div>);
    }
}

export default CounterGroup;