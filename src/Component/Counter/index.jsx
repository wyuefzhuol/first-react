import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    makeZero = () => {
        this.setState((prevState) => ({
            value: 0
        }));
    }

    onIncrease = () => {
        this.setState((prevState) => ({
            value: prevState.value + 1
        }));
    }

    onDecrease = () => {
        if (this.state.value > 0) {
            this.setState((prevState) => ({
                value: prevState.value - 1
            }));
        }
    }

    onIncreaseTen = () => {
        this.setState((prevState) => ({
            value: prevState.value + 10
        }));
    }

    render() {
        return (<div>
            <button onClick={this.makeZero}>归零</button>
            <button onClick={this.onDecrease}>-</button>
            <mark>{this.state.value}</mark>
            <button onClick={this.onIncrease}>+</button>
            <button onClick={this.onIncreaseTen}>+10</button>
        </div>)
    }
}

export default Counter;