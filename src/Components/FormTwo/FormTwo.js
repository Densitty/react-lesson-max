import React, { Component } from "react";
import { Formik } from "formik";

class FormTwo extends Component {
  state = {
    maxAge: 80,
    minAge: 18,
    submitting: false,
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

  render() {
    return (
      <>
        <Formik
          initialValues={{ name: "", lastname: "", age: "", message: "" }}
          validate={(values) => {
            // console.log(values);
            const errors = {};

            if (!values.name) {
              errors.name = "Please provide your name";
            }

            if (!values.lastname) {
              errors.lastname = "Please provide your lastname";
            }

            if (values.age) {
              if (parseInt(values.age) <= this.state.minAge) {
                errors.age = `You have to be at least ${this.state.minAge} years old to use our service`;
              }
            } else {
              errors.age = "Please provide your age";
            }

            if (!values.age) {
              errors.message = "Message is required";
            }

            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            // onSubmit will run only when validation is done
            this.setState({ submitting: !this.state.submitting });
            setTimeout(() => {
              this.setState({ submitting: !this.state.submitting });
              console.log(values);
              // resetting the form element values
              resetForm();
            }, 2000);
          }}
        >
          {({
            values,
            errors,
            touched /*touched is like blur/focus*/,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{
                      borderColor: `${
                        errors.name && touched.name ? "red" : ""
                      }`,
                    }}
                  />
                  {errors.name && touched.name && (
                    <div style={{ color: "red" }}>{errors.name}</div>
                  )}
                </div>

                <div className="form-group">
                  <label>Lastname</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{
                      borderColor: `${
                        errors.lastname && touched.lastname ? "red" : ""
                      }`,
                    }}
                  />
                  {errors.lastname && touched.lastname && (
                    <div style={{ color: "red" }}>{errors.lastname}</div>
                  )}
                </div>

                <div className="form-group">
                  <label>Age</label>
                  <select
                    name="age"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    style={{
                      borderColor: `${errors.age && touched.age ? "red" : ""}`,
                    }}
                  >
                    <option value="">Choose your age</option>
                    {this.generateAgeOptions()}
                  </select>
                  {errors.age && touched.age && (
                    <div style={{ color: "red" }}>{errors.age}</div>
                  )}
                </div>

                <div className="form-group">
                  <label>Enter your message here</label>
                  <textarea
                    rows="3"
                    placeholder="Add your message here..."
                    className="form-control"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    style={{
                      borderColor: `${
                        errors.message && touched.message ? "red" : ""
                      }`,
                    }}
                  ></textarea>
                  {errors.message && touched.message && (
                    <div style={{ color: "red" }}>{errors.message}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={this.state.submitting}
                >
                  Submit
                </button>
              </form>
            );
          }}
        </Formik>
      </>
    );
  }
}

export default FormTwo;
