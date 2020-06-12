import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Jane', age: 21 },
      { name: 'Nat', age: 20 }
    ],
    showPersons: false
  }

  changeNameHandler = () => {

    this.setState({
      persons: [
        { name: 'Jane Kroger', age: 21 },
        { name: 'Nathaniel Long', age: 22 }
      ]
    })
  }

  showPersonHandler = () => {
    const didPersonShow = this.state.showPersons
    this.setState({
      showPersons: !didPersonShow
    })
  }

  // deletePersonHandler = () => {
  //   const persons = this.state
  // }

  render() {
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age}
            />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Introduction</h1>
        <button onClick={this.showPersonHandler}>Show Persons</button>
        <button onClick={this.changeNameHandler}>Update Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
