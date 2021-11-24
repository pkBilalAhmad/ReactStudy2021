import React from 'react';


class TextCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "Text here to show your interst" }
        this.inc = this.inc.bind(this)
    }
    inc(e) {
        this.setState(() => ({
            text: e.target.value
        }));
    }
    render() {
        return (
            <div>
                <h1>Hello there is Bilal Ahmed</h1>,
                <h2>Texting</h2>,
                <textarea value={this.state.text} onChange={this.inc} />
                <h2>{this.state.text}</h2>
            </div>
        );
    }
}

export default TextCounter;