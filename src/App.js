import React from 'react';
import Child from './child';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
        this.inc = this.inc.bind(this)
    }
    // inc = () => {
    inc() {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return (
            <div>
                <Child count={this.state.count} inc={this.inc} />
                <h2>{this.state.count}</h2>
                {/* <button onClick={() => this.inc()}>Click</button>  */}
                {/* <button onClick={this.inc}>Click</button> */}
            </div>
        );
    }
}


export default App;