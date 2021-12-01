import React from 'react';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return ( 
            <div>
                <ul>
                    <li>First Name </li>
                    <li>Last Name </li>
                    <li>Name Bilal </li>
                    <li>Bilal Ahmed</li>
                </ul>
            </div>
         );
    }
}

export default TodoApp;