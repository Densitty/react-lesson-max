import React, { Component } from 'react'
import Person from './Person/Person'

// props.deletePersonHandler(index)
// (event) => props.nameChangedHandler(event, person.id)
class Persons extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('Persons.js - getDerivedStateFromProps running ...')
    return state
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Persons.js - shouldComponentUpdate?')
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Persons.js - get me the snapshot of previous props and state')
  }

  componentDidUpdate() {
    console.log('Persons.js - component really did update.')
  }

  render() {
    console.log('Persons.js - is rendering')
    // N.B- in a class-based component, props are accessed with the this keyword, as seen below, since 
    return (
      this.props.persons.map((person, index) => {
        return <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)} />
      })
    )

  }
}

export default Persons