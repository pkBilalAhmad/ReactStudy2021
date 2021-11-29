import React from 'react';
import ReactDOM from 'react-dom';
// import FancyTable from './fancyTable'

class Con extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        {this}
      </div>
    );
  }
}




ReactDOM.render(
  <div>
    <Con />
  </div>,
  document.getElementById('root')
)