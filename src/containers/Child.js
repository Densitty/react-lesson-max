import React from 'react'

export default class Child extends React.PureComponent {
  render() {
    console.log('Rendering child')
    return (
      <div>{this.props.message}</div>
    )
  }
}