import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { sayings: "" };
  }
  update(e) {
    this.setState({ sayings: this.statement.value });
  }
  render() {
    return (
      <div>
        Reporter: <input type="text" ref='statement' onChange={() => this.update()} />
        <br />
        <em>John says "{this.state.sayings}"</em>
      </div>
    );
  }
}

export default App