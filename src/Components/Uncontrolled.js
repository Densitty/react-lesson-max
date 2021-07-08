import React, { Component } from 'react';

class Uncontrolled extends Component {

  handleSubmitClick = event => {
    event.preventDefault()

    const values = {
      name: this.name.value,
      lastname: this.lastname.value
    }

    console.log(values)
  }

  render() {
    return (
      <div className='container'>
        <form action="">
          <div className='form_element'>
            <label>Enter Name</label>
            <input type="text" placeholder='Enter your name' ref={input => this.name = input} />
          </div>

          <div className='form_element'>
            <label>Enter Lastname</label>
            <input type="text" placeholder='Enter your lastname' ref={input => this.lastname = input} />
          </div>

          <button onClick={this.handleSubmitClick}>Sign in</button>
        </form>
      </div>
    )
  }
}

export default Uncontrolled;