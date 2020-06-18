import React from 'react'
import classes from './Cockpit.module.css'

const Cockpit = props => {
  const assignedclasses = [];
  let btnClass = ''

  // When the list of persons is shown, make the button Red
  if (props.showPersons) {
    btnClass = classes.Red
  }
  // console.log(props)
  if (props.showPersons.length <= 2) {
    assignedclasses.push(classes.red); // classes = ['red']
  }
  if (props.showPersons.length <= 1) {
    assignedclasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedclasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  )
}

export default Cockpit