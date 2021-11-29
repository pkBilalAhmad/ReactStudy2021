import React from 'react';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() }
    }
    componentDidMount() {
        this.tim = setInterval(() => this.tick(), 1000)
    }
    tick() {
        this.setState({
            time: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>This is time in syncronous point</h1>
                <h2>Now the time is </h2>
                <h3>{this.state.time.toLocaleTimeString()}</h3>
            </div>
        );
    }
}

export default Clock;