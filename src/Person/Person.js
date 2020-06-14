import React from 'react'
import Radium, { StyleRoot } from 'radium'
import './Person.css'

const Person = (props) => {
  // media queries using Radium
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }
  return (
    <StyleRoot>
      <div className='Person'>
        <p style={style} onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
        <p>{props.children}</p>
      </div>
    </StyleRoot>
  )
}

export default Radium(Person)