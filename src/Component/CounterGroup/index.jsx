import React, {Component} from 'react';
import Counter from '../Counter';

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            totalNumber: 0
        };
        this.child=[];
    }

    onRef = (ref) => {
        this.child.push(ref);
    }

    handleResize = (event) => {
        var resize = event.target.value.replace(/[^0-9]/g, "") ? parseInt(event.target.value.replace(/[^0-9]/g, "")) : 0;
        if (resize < this.state.size) {
            for (var i = this.state.size-1; i >= resize; i --) {
                this.child[i].handleMakeZero();
                this.child.pop();
            }
        }
        this.setState({
            size: resize,
            //totalNumber: 0
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

    handleMakeZero = (minuend) => {
        this.setState((prevState) => ({
            totalNumber: prevState.totalNumber - minuend
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
            { initArray.map(key => <Counter groupSize={this.state.size} onRef={this.onRef} handleIncrease={this.handleIncrease} handleDecrease={this.handleDecrease} handleIncreaseTen={this.handleIncreaseTen} handleMakeZero={this.handleMakeZero} key={key}/>) }
        </div>);
    }
}

export default CounterGroup;