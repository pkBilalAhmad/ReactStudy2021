import React from 'react';
import ReactDOM from 'react-dom';


class NewClock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: new Date() }
  }
  // componentDidMount() {
  //   this.timer = setInterval(() => this.tick(), 1000)
  // }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000)
  }
  tick() {
    this.setState({
      time: new Date()
    })
  }
  // componentWillUnmount(){
  //   clearInterval(this.timer)
  // }
  render() {
    return (
      <div>
        <h1>This is React Class Component</h1>
        <h2>And the time is </h2>
        
        <h2>{this.state.time.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <NewClock />,
  document.getElementById('root')
)





// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { time: new Date() }
//   }
//   componentDidMount() {
//     this.timer = setInterval(() => this.tick(), 1000)
//   }
//   // componentWillUnmount() {
//   //   clearInterval(this.timer)
//   // }
//   tick() {
//     this.setState({
//       time: new Date()
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>This is local time Component class</h1>
//         <h2>and Time is </h2>
//         <p>{this.state.time.toLocaleTimeString()}</p>
//       </div>
//     )
//   }
// }
// // let element = <div></div>

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// )











// class Welcom extends React.Component{
  // render(){
  //   return (
  //     <h1>Hello h1 element in class Component {this.props.name}</h1>
  //   )
  // }
// }

// ReactDOM.render(
//   Welcom,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <Welcom name = "Bilal Ahmed"/>,
//   document.getElementById('root')
// )









// function myName (name){
//   return name.firsName + name.lastName
// }

// var name = {
//   firsName : "Bilal",
//   lastName : " Ahmed"
// }


// var element = ( 
//   <h2>My name is {myName(name)}</h2>
// )

// ReactDOM.render(
//  <div style = "backgroundColor = 'blue'">{element}</div>,
//   document.getElementById('root')
// )
// // function tick() {
// //   const element = (
// //     <div>
// //       <h1>Hello, world!</h1>
// //       <h2>It is {new Date().toLocaleTimeString()}.</h2>
// //     </div>
// //   );
// //   ReactDOM.render(element, document.getElementById('root'));
// // }

// // setInterval(tick(), 1000)

// // const element = <div>
// //   <h1>
// //     Hello this is h1 element in div saved in const variable
// //   </h1>
// // </div>


// // ReactDOM.render(
// //   element,
// //   document.getElementById('root')
// // )


// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
