import React from 'react';

class TextCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '', todo: [
                { name: 'Bilal', city: 'Karachi', compoleted: false },
                { name: 'Fazal', city: 'Lahor' }
            ]
        }
    }
    changValue = (e) => {
        this.setState({
            text: e.target.value
        });
    }
    addTodo = () => {
        this.setState({
            todo: this.state.todo.concat({ name: this.state.text, city: this.state.text }),
            text: ''
        });
    }
    render() {
        return (<div>
            <h1>{this.state.todo.length}</h1>
            <button onClick={this.addTodo}>Add Todo</button><br />
            <textarea value={this.state.text} onChange={this.changValue} />
            {/* <h1>{this.state.text}</h1> */}
            <h3>{this.state.text.length}</h3>
            <ul>
                {this.state.todo.map((item, idx) => (
                    <li key={idx}>Name = : {item.name} <br /> City =: {item.city} </li>

                ))}
            </ul>
        </div>);
    }
}

export default TextCounter;