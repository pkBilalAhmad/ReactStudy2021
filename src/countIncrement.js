import React from 'react';


class TextCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "Text here to show your interst" }
    }
    inc(e) {
        this.setState({
            text: e.target.value
        });
    }
    render() {
        return (
            <div>
                <h1>Hello there is Bilal Ahmed</h1>,
                <h2>Texting</h2>,
                <textarea defaultValue={this.state.text} onChange={this.inc} ></textarea>
                <h2>{this.state.text}</h2>
            </div>
        );
    }
}

export default TextCounter;