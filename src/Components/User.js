import React, { Component } from 'react';

// Import the form template
import FormFields from './Widgets/FormFields'

class User extends Component {

  state = {
    formData: {
      name: {
        element: 'input',
        value: '',
        label: true,
        labelText: 'Name',
        config: {
          name: 'name_input',
          type: 'text',
          placeholder: 'Enter your name'
        }
      },
      lastname: {
        element: 'input',
        value: '',
        label: true,
        labelText: 'Lastname',
        config: {
          name: 'lastname_input',
          type: 'text',
          placeholder: 'Enter your lastname'
        }
      },
      message: {
        element: 'textarea',
        value: '',
        label: true,
        labelText: 'Message Us',
        config: {
          name: 'messageb_input',
          rows: 4,
          cols: 36
        }
      },
      age: {
        element: 'select',
        value: '',
        label: true,
        labelText: 'Select Age',
        config: {
          name: 'age_input',
          options: [
            { val: '1', text: '10-20' },
            { val: '1', text: '21-30' },
            { val: '3', text: '31-40' }
          ]
        }
      }
    }
  }

  updateForm = newState => {
    // console.log(newState)
    this.setState({
      formData: newState
    })
  }

  submitForm = (event) => {
    event.preventDefault()

    const dataToSubmit = {}

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value
    }
    console.log(dataToSubmit)
  }

  render() {
    return (
      <div className='container'>
        <form action="" onSubmit={this.submitForm}>
          <FormFields
            formData={this.state.formData}
            change={(newState) => this.updateForm(newState)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default User;