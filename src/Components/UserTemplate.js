import React from 'react';
import PropTypes from 'prop-types';

const UserTemplate = (props) => {

  console.log(props.greetings())
  console.log(props.intro())
  return (
    <div>My lovely User</div>
  )
}

UserTemplate.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.oneOf(['John', 'Kelvin'])
  ]),
  lastname: PropTypes.string,
  age: function (props, propName, componentName) {
    console.log(props); console.log(propName); console.log(componentName)
    if (props[propName] < 18) {
      return new Error(`Hello ${props.name[0]}. You are not permitted to take alcohol on campus, as you are ${props[propName]} years old`)
    }
  },
  hobbies: PropTypes.array,
  multilingual: PropTypes.bool,
  languages: PropTypes.array,
  friends: PropTypes.arrayOf(PropTypes.string),
  greetings: PropTypes.func,
  profession: PropTypes.string,
  major: PropTypes.oneOf(['Physics', 'Computer Science']).isRequired,
  intro: PropTypes.func,
  car: PropTypes.object
}

export default UserTemplate