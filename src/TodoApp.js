import React from 'react';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todoList: [], todoText: '' }
    }
    changeValue = (e) => {
        this.setState({
            todoText: this.state.todoText + e.target.value
        });
    }
    _submit = (event) => {
        event.preventDefault()
        this.setState({
            todoList: this.state.todoText
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this._submit}>
                    {/* <input value="" /> */}
                    <button type="submit">Submit Item</button>
                    <input value='' onChange={this.changeValue} />
                </form>

                <ul>
                    <li>First Name </li>
                    <li>Last Name </li>
                    {this.state.todoList.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
                {/* <ol>
                    {this.state.todoList.map((item) => (
                        <li>{item}</li>
                    ))}
                </ol> */}
                <h2>
                    {this.state.todoText}
                </h2>
            </div>
        );
    }
}

export default TodoApp;