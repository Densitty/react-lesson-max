import React, { Component } from "react";
import FormFields from "../Widgets/FormFields";

class FormOne extends Component {
  state = {
    maxAge: 80,
    formData: {
      name: {
        element: "input",
        value: "",
        label: true,
        labelText: "Name",
        config: {
          name: "name_input",
          type: "text",
          placeholder: "Enter your name",
        },
        validation: {
          required: true,
          minLength: 5,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      lastname: {
        element: "input",
        value: "",
        label: true,
        labelText: "Lastname",
        config: {
          name: "lastname_input",
          type: "text",
          placeholder: "Enter your lastname",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      message: {
        element: "textarea",
        value: "",
        label: true,
        labelText: "Message Us",
        config: {
          name: "message_input",
          rows: 4,
          cols: 36,
        },
        validation: {
          required: true,
        },
        valid: true,
      },
      age: {
        element: "select",
        value: "",
        label: true,
        labelText: "Select Age",
        config: {
          name: "age_input",
        },
        validation: {
          required: true,
          minAge: 18,
        },
        valid: true,
      },
    },
    loading: false,
  };

  generateAgeOptions = () => {
    const ageArray = [];
    for (let i = 1; i <= 80; i++) {
      ageArray.push(i);
    }

    return ageArray.map((age) => {
      return (
        <option key={age} value={age}>
          {age}
        </option>
      );
    });
  };

  updateForm = (element) => {
    // console.log(element);
    this.setState({
      formData: element,
    });
  };

  formSuccess = () => {
    const newFormData = { ...this.state.formData };

    for (const key in this.state.formData) {
      newFormData[key].value = "";
      newFormData[key].valid = false;
      newFormData[key].touched = false;
    }

    this.setState({
      formData: newFormData,
    });

    alert("Thank you for getting to us. We will get back to you shortly.");
  };

  submitForm = (e) => {
    e.preventDefault();

    const dataToSubmit = {};
    let formIsValid = true;

    this.setState({
      loading: true,
    });

    // check for validity of each form element (i.e each form element is filled)
    for (const key in this.state.formData) {
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    // loop through the form element (via formData) to get the value typed or selected or checked
    for (const key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
    }

    if (formIsValid) {
      console.log(dataToSubmit);
      setTimeout(() => {
        this.setState({ loading: false });
        this.formSuccess();
      }, 2000);
    } else {
      alert("Form is incomplete");
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.state.submitForm}>
          <FormFields
            {...this.state}
            ageOptions={this.generateAgeOptions}
            formData={this.state.formData}
            change={(element) => this.updateForm(element)}
          />

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(event) => this.submitForm(event)}
            disabled={this.state.loading}
          >
            {this.state.loading ? "Please wait" : "Submit"}
          </button>
        </form>
      </>
    );
  }
}

export default FormOne;
