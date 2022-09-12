import React, { Component } from 'react';
import './style.css'

class Count extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1
        }
    }

    render() {
        return (
            <div>
                <h1>Value: {this.state.count}</h1>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Increase</button>
                <button onClick={() => this.setState({count: this.state.count - 1})}>Decrease</button>
            </div>
        );
    }
}

export default Count;