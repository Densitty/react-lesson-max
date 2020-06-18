import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from './../components/Persons/Persons';
import Cockpit from './../components/Cockpit/Cockpit'

class App extends Component {
  // initializing the Constructor function - basis for CB Component
  constructor(props) {
    super(props)
    console.log('In App.js - Contructor Runs')
    // a state object ppty can also be called here, but better to call it outside of the constructor
    this.state = { persons: [{ id: 'asfa1', name: 'Karla', age: 28 }, { id: 'vasdf1', name: 'Jeff', age: 29 }, { id: 'asdf11', name: 'Alice', age: 26 }], otherState: 'some other value', showPersons: false }

  }
  // state = {
  //   persons: [
  //     { id: 'asfa1', name: 'Karla', age: 28 },
  //     { id: 'vasdf1', name: 'Jeff', age: 29 },
  //     { id: 'asdf11', name: 'Alice', age: 26 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  static getDerivedStateFromProps(props, state) {
    console.log('Inside App.js - getDerivedStateFromProps is calling.', props)
    return state
  }

  // not necessarily used - called before mounting occurs and before a component will be re-rendered
  componentWillMount() {
    console.log('App.js - Shall we see if component will mount?')
  }

  componentDidMount() {
    console.log('App.js - componentDidMount() is calling')
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Copy the object into a new variable called person through spread operation
    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    console.log('I am clicked')
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('App.js - We are rendering the content with render()')
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle} //we are using Cockpit from a function based component in a class based component which doesnt have props but only this. Hence the use of this.props
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;