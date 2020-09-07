import React from 'react'

import withUser from './HOC/withUser'


const User = (props) => {
  console.log(props)
  return (
    <div>
      My name is {props.name}
    </div>
  )
}

export default withUser(User, 'Hello World')