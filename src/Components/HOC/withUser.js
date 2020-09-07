import React from 'react'

const withUser = (WrappedComponent, arg1) => {
  return (props) => {
    console.log(props)
    return (
      <div>
        {arg1}
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default withUser