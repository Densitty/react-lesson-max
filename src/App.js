import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Jane', age: 21 },
      { id: '2', name: 'Nat', age: 20 }
    ],
    showPersons: false
  }

  changeNameHandler = () => {

    this.setState({
      persons: [
        { id: '1', name: 'Jane Kroger', age: 21 },
        { id: '2', name: 'Nathaniel Long', age: 22 }
      ]
    })
  }

  showPersonHandler = () => {
    const didPersonShow = this.state.showPersons
    this.setState({
      showPersons: !didPersonShow
    })
  }

  deletePersonHandler = (personIndex) => {
    console.log(personIndex)
    // The best practice is to create a copy of the this.state.persons object/array and mutate it instead of mutating the original persons object/array
    // const updatedPersons = this.state.persons.slice() //or below
    const updatedPersons = [...this.state.persons] //spread content of persons
    console.log(updatedPersons)
    updatedPersons.splice(personIndex, 1)
    this.setState({ persons: updatedPersons })
    console.log(this.state.persons)

  }

  render() {
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
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
