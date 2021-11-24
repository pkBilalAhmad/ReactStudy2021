import React from 'react';

function GreetUser(props) {
    return (
        <h1>Welcom User</h1>
    )
}

function Guest(props) {
    return (
        <h1>Pleas Sign up first</h1>
    )
}

function Greet(props) {
    let isLogged = props.isLogged
    return (
        <div>
            {isLogged ? GreetUser() : Guest()}
        </div>
    )

}
export default Greet;