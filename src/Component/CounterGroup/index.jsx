import React, {Component} from 'react';
import Counter from '../Counter';

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            totalNumber: 0
        };
    }

    handleResize = (event) => {
        var resize = event.target.value.replace(/[^0-9]/g, "");
        this.setState({
            size: resize ? parseInt(resize) : 0
        })
    }

    handleIncrease = () => {
        this.setState((prevState) => ({
            totalNumber: prevState.totalNumber + 1
        }));
    }

    handleDecrease = () => {
        this.setState((prevState) => ({
            totalNumber: prevState.totalNumber - 1
        }));
    }

    handleIncreaseTen = () => {
        this.setState((prevState) => ({
            totalNumber: prevState.totalNumber + 10
        }));
    }

    render() {
        const initArray = [...Array(this.state.size).keys()];

        return (<div>
            <label>
                Group Size:
                <input onBlur={this.handleResize} defaultValue="0" />
            </label><br />
            <label>
                Total Number:
                {this.state.totalNumber}
            </label>
            { initArray.map(key => <Counter handleIncrease={this.handleIncrease} handleDecrease={this.handleDecrease} handleIncreaseTen={this.handleIncreaseTen} key={key}/>) }
        </div>);
    }
}

export default CounterGroup;