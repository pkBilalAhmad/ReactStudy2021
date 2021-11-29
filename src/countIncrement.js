import React from 'react';


class TextCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "Text here to show your interst" }
        // this.inc = this.inc.bind(this)
        /*
            3 ways to bind class method 1 bind this in constructor
            2 assign that function ta variable
            and call this without () with this object 
            3 add calling in event after errow funtion with () but when the function is simple and not incloded inner funtion
        */
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
                <textarea value={this.state.text} onChange={this.inc.bind(this)} />
                {/* <textarea value={this.state.text} onChange={this.inc} /> Hello*/}
                <h2>{this.state.text}</h2>
            </div>
        );
    }
}

export default TextCounter;