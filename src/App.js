import React, { useState } from 'react';
import './App.css';
import Person from './Person/FPerson'

// Using the useState() Hooks for Function-based components

const App = props => {
  // useState returns an array which we destructured as state, setState
  // It's similar to what we have in class-based comps too just that this keyword is absent
  const [state, setState] = useState({
    persons: [
      { name: 'Jane', age: 21 },
      { name: 'Nat', age: 20 }
    ]
  })

  const changeNameHandler = () => {
    setState({
      persons: [
        { name: 'Jane Kroger', age: 21 },
        { name: 'Nathaniel Long', age: 22 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Introduction</h1>
      <button onClick={changeNameHandler}>Update Names</button>
      <Person name={state.persons[0].name} age={state.persons[0].age} />
      <Person name={state.persons[1].name} age={state.persons[1].age} />
    </div>
  );
}

export default App;
