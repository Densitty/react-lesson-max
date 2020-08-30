import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = { sayings: "" };
  }
  update(e) {
    this.setState({ sayings: this.myElement.value });
  }
  render() {
    return (
      <div>
        Reporter: <input type="text" ref={(callback) => { this.myElement = callback }} onChange={() => this.update()} />
        <br />
        <em>John says "{this.state.sayings}"</em>
      </div>
    );
  }
}

export default App