import React, { Component } from 'react';

class Controlled extends Component {

  state = {
    name: '',
    lastname: ''
  }

  handleNameChange = e => {
    // console.log(e.target.value)
    this.setState({
      name: e.target.value
    })
  }
  handleLastnameChange = e => {
    // console.log(e.target.value)
    this.setState({
      lastname: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()

    console.log(this.state)
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.submitHandler}>
          <div className='form_element'>
            <label>Enter Name</label>
            <input type="text" placeholder='Enter your name' value={this.state.name} onChange={this.handleNameChange} />
          </div>

          <div className='form_element'>
            <label>Enter Lastname</label>
            <input type="text" placeholder='Enter your lastname' value={this.state.lastname} onChange={this.handleLastnameChange} />
          </div>

          <button type="submit">Submit Info</button>
        </form>
      </div>
    )
  }
}

export default Controlled;