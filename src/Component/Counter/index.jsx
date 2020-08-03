import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            //groupSize: 0
        };
    }

    // static getDerivedStateFromProps(props, state) {
    //     if (props.groupSize !== state.groupSize) {
    //         return {
    //             value: 0,
    //             groupSize: props.groupSize
    //         };
    //     }
    //     return null;
    // }

    componentDidMount(){
        this.props.onRef(this)
    }

    handleMakeZero = () => {
        this.props.handleMakeZero(this.state.value);
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
            this.props.handleDecrease();
        }
    }

    handleIncreaseTen = () => {
        this.setState((prevState) => ({
            value: prevState.value + 10
        }));
        this.props.handleIncreaseTen();
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