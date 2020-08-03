import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    handleMakeZero = () => {
        this.setState((prevState) => ({
            value: 0
        }));
    }

    handleIncrease = () => {
        this.setState((prevState) => ({
            value: prevState.value + 1
        }));
        this.props.handleIncrease();
    }

    handleDecrease = () => {
        if (this.state.value > 0) {
            this.setState((prevState) => ({
                value: prevState.value - 1
            }));
        }
    }

    handleIncreaseTen = () => {
        this.setState((prevState) => ({
            value: prevState.value + 10
        }));
    }

    render() {
        return (<div>
            <button onClick={this.handleMakeZero}>归零</button>
            <button onClick={this.handleDecrease}>-</button>
            <mark>{this.state.value}</mark>
            <button onClick={this.handleIncrease}>+</button>
            <button onClick={this.handleIncreaseTen}>+10</button>
        </div>)
    }
}

export default Counter;