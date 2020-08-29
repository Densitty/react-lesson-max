import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import BlogInformation from './Child'
// import withColor from './withColor'
// import classes from './App.module.css';


//App component
export default class Person extends Component {
  render() {
    const pizzaPreference = (this.props.likesPizza) ? "does" : "does not"
    return (
      <h1>{this.props.name} is {this.props.age} years old and {pizzaPreference} like pizza!</h1>)
  }
}


Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  likesPizza: PropTypes.bool.isRequired
}