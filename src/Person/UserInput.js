import React from 'react'

/**
 * Create 2 new components - UserInput and UserOutput
 * UserInput should hold an input element, UserOutput should hold 2 paragraphs
 * Output multiple UserOutput comps in the App component (any paragraph text)
 * Pass a username (of your choice) to UserOutput via props and display it there
 * Add state to the App component (username) and pass the username to the UserOutput component
 * Add a method to manipulate the state (an event handler)
 * Pass the event-handler method reference to the UserInput component and bind it to the input-change event
 * Ensure that the new input entered by the user overwrites the old username passed to the UserOutput
 * Add two-way binding to your input (in UserInput) to also display
 * Add styling of your choice to your components/elements in the the components - both with inline styles and stylesheets
 */

const Input = props => {
  return <input type="text" placeholder={props.placeholder} onChange={props.change} />
}

export default Input