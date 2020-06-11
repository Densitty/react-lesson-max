import React, { Component } from 'react';
import './App.css';
import Input from './Person/UserInput'
import Output from './Person/UserOutput'

class App extends Component {
  state = {
    username: 'User'
  }

  changeUsernameHandler = (event) => {
    // console.log(event.target.value)
    this.setState({
      username: event.target.value
    })
  }



  render() {
    return (
      <div>
        <Input
          change={this.changeUsernameHandler}
          placeholder='Username'
        />
        <Output
          userName={this.state.username}
        />
      </div>
    )
  }
}

export default App;
