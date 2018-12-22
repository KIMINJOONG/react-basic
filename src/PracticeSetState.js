import React, {Component} from 'react';

class PracticeSetState extends Component {
    state = {
        number: 0,
        foo: {
            bar: 0,
            foobar: 1
        }
    }
    handleFoobar = () => {
        this.setState({
            foo: {
                ...this.state.foo
                , foobar : 2
            }
        });
    }
    render() {
        return(
            <div>
                <h1>foobar값:</h1>
                <h2>{this.state.foo.foobar}</h2>
                <button onClick={this.handleFoobar}>ㅂ튼</button>
            </div>    
        );
    }
}

export default PracticeSetState;