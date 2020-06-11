import React, { Component } from 'react';
import './App.css';
import Person from './Person/FPerson'

class App extends Component {
  state = {
    persons: [
      { name: 'Jane', age: 21 },
      { name: 'Nat', age: 20 }
    ]
  }

  changeNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Jane Kroger', age: 21 },
        { name: 'Nathaniel Long', age: 22 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Introduction</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <button onClick={this.changeNameHandler}>Update Person</button>
      </div>
    );
  }
}

export default App;
