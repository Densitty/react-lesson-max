import React from 'react'
import UserTemplate from './UserTemplate'

class User extends React.Component {
  state = {
    name: ['John', 'Kelvin'],
    lastname: 'Doe',
    age: 16,
    hobbies: ['Reading', 'Hockey', 'Javelin', 'Hunting', 'Kayaking'],
    multilingual: true,
    languages: ['English', 'Deustch', 'French', 'Spanish', 'Portugues'],
    friends: ['Jane', 'Sally', 'Rudolf', 'Steve', 'Enchem'],
    greetings: () => {
      return (`Welcome to the world of ${this.state.name[0]} ${this.state.lastname}`)
    },
    profession: 'student',
    major: 'Physics',
    intro() {
      return `I am a ${this.profession} at University of Western Sydney, studying ${this.major}.`
    },
    car: {
      maker: 'Audi',
      year: '2007',
      color: 'Black'
    }
  }

  render() {
    return (
      <div>
        <UserTemplate {...this.state} />
      </div>
    )
  }
}

export default User
