import React, {Component} from 'react';
import Counter from '../Counter';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCountAction } from '../../action/addNumberAction';

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0
        };
    }

    // onRef = (ref) => {
    //     this.child.push(ref);
    // }

    // handleResize = (event) => {
    //     var resize = event.target.value.replace(/[^0-9]/g, "") ? parseInt(event.target.value.replace(/[^0-9]/g, "")) : 0;
    //     if (resize < this.state.size) {
    //         for (var i = this.state.size-1; i >= resize; i --) {
    //             this.child[i].handleMakeZero();
    //             this.child.pop();
    //         }
    //     }
    //     this.setState({
    //         size: resize,
    //         //totalNumber: 0
    //     })
    // }

    // handleIncrease = () => {
    //     this.setState((prevState) => ({
    //         totalNumber: prevState.totalNumber + 1
    //     }));
    // }

    // handleDecrease = () => {
    //     this.setState((prevState) => ({
    //         totalNumber: prevState.totalNumber - 1
    //     }));
    // }

    // handleIncreaseTen = () => {
    //     this.setState((prevState) => ({
    //         totalNumber: prevState.totalNumber + 10
    //     }));
    // }

    // handleMakeZero = (minuend) => {
    //     this.setState((prevState) => ({
    //         totalNumber: prevState.totalNumber - minuend
    //     }));
    // }

    handleResize = (e) => {
        this.setState({
            size: parseInt(e.target.value)
        })
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
                {this.props.totalNumber}
            </label>
            { initArray.map(key => <Counter handleIncrease={this.props.addCount} 
                handleDecrease={this.props.addCount} 
                handleIncreaseTen={this.props.addCount} 
                handleMakeZero={this.props.addCount} key={key}/>) }
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        totalNumber: state.counterGroupReducer.totalNumber
    }
};

const mapDispatchToProps = ({
    addCount: addCountAction
});

CounterGroup.propTypes = {
    totalNumber: PropTypes.number.isRequired,
    addCount: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup);