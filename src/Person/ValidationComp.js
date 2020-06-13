import React from 'react'

const ValidationComp = (props) => {

  let message = 'Text entered is long enough.'

  if (props.text.length < 5) {
    message = 'Test is too short'
  }

  return <p>{message}</p>
}

export default ValidationComp