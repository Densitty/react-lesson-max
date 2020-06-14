import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium' // package for using pseudo-class
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
    // We can set the style inline
    const style = {
      backgroundColor: 'green',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {//hover pseudo-selector
        backgroundColor: 'lightgreen',
        color: 'white'
      }
    }

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
      // to make our button change style on state change in an inline-way
      style.backgroundColor = 'red'
      style.color = 'white'
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Introduction</h1>
          <button style={style} onClick={this.showPersonHandler}>Show Persons</button>
          <button onClick={this.changeNameHandler}>Update Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
