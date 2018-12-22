import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }
    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps.number + ", "+ nextState.number);
        console.log('shouldComponentUpdate');
        if(nextState.number % 5 === 0) return false;
        return true;
    }

    UNSAFE_componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.number + ", " + prevState.number);
        console.log('componentDidUpdate');
    }

    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        })
    }
    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
                number: number - 1
            })
        );
    }
    render() {
        return(
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}
export default Counter;