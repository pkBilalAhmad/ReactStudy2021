import React from 'react';
// import ReactDOM from 'react-dom';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false }
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        this.setState((prevState) => (
            {
                isToggleOn: !prevState.isToggleOn
            }
        ));
    }
    render() {
        return (
            <div>
                <button onClick={this.toggle}>{this.state.isToggleOn ? "On" : "Off"}</button>
            </div>
        );
    }
}

export default Toggle;