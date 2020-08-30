import React, { Component } from 'react';
// import BlogInformation from './Child'
// import withColor from './withColor'
// import classes from './App.module.css';


class App extends Component {
  constructor() {
    super();
    this.inputElementRef = React.createRef()
    this.state = { sayings: "" };
  }
  update(e) {
    this.setState({ sayings: this.inputElementRef.current.value });
    console.log(this.inputElementRef)
  }
  render() {
    return (
      <div>
        Reporter: <input type="text" ref={this.inputElementRef} onChange={() => this.update()} />
        <br />
        <em>John says "{this.state.sayings}"</em>
      </div>
    );
  }
}

export default App