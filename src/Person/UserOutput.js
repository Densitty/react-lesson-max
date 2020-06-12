import React from 'react'
import './UserOutput.css'

const Output = props => {
  return (
    <div className='UserOutput'>
      <p>Hello everyone. My name is {props.userName}.</p>
    </div>
  )
}

export default Output