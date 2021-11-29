import React from 'react';

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>The number is now</h1>
                <h1>{this.props.count}</h1>
                <button onClick={this.props.inc}>Click to increment</button>
            </div>
        );
    }
}

export default Child;