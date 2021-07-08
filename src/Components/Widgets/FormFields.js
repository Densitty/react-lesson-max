import React from "react";
import { validate } from "./validate";

const FormFields = (props) => {
  // console.log(props);
  const renderFields = () => {
    const formArray = [];

    for (const elementName in props.formData) {
      formArray.push({
        id: elementName,
        settings: props.formData[elementName],
      });
    }
    // console.log(formArray);
    return formArray.map((element) => {
      return (
        <div key={element.id} className="form_element">
          {renderTemplates(element)}
        </div>
      );
    });
  };

  const renderTemplates = (data) => {
    let formTemplate = null;
    let dataValues = data.settings;

    switch (dataValues.element) {
      // for an input element
      case "input":
        // console.log(dataValues);
        formTemplate = (
          <div className="form-group">
            {showLabel(dataValues.label, dataValues.labelText)}
            <input
              {...dataValues.config}
              value={dataValues.value}
              onChange={(event) => changeHandler(event, data.id, false)}
              onBlur={(event) => changeHandler(event, data.id, true)}
              className="form-control"
            />
            <div className="error_label">
              {showValidationMessage(dataValues)}
            </div>
          </div>
        );
        break;
      // for a textarea
      case "textarea":
        formTemplate = (
          <div className="form-group">
            {showLabel(dataValues.label, dataValues.labelText)}
            <textarea
              {...dataValues.config}
              value={dataValues.value}
              onChange={(event) => changeHandler(event, data.id)}
              onBlur={(event) => changeHandler(event, data.id, true)}
              className="form-control"
            ></textarea>
            <div className="error_label">
              {showValidationMessage(dataValues)}
            </div>
          </div>
        );
        break;
      // for a select element
      case "select":
        formTemplate = (
          <div className="form">
            {showLabel(dataValues.label, dataValues.labelText)}
            <select
              name={dataValues.config.name}
              value={dataValues.value}
              onChange={(event) => changeHandler(event, data.id)}
              onBlur={(event) => changeHandler(event, data.id, true)}
              className="form-control"
            >
              <option value="">Select your age</option>
              {props.ageOptions()}
            </select>

            <div className="error_label">
              {showValidationMessage(dataValues)}
            </div>
          </div>
        );
        break;
      // for default or no form element
      default:
        formTemplate = null;
        break;
    }
    return formTemplate;
  };

  const showLabel = (showLabel, labelText) => {
    return showLabel ? <label>{labelText}</label> : null;
  };

  const changeHandler = (event, keyID, blur) => {
    // console.log(event.target.value)
    const newState = { ...props.formData };
    // console.log(newState)
    newState[keyID].value = event.target.value;

    /* check for blur; i.e if blur event is triggered (a truthy value) on the element */
    if (blur) {
      let validData = validate(newState[keyID]);

      newState[keyID].valid = validData[0];
      newState[keyID].validationMessage = validData[1];
    }

    newState[keyID].touched = blur;
    // console.log(newState);
    props.change(newState);
  };

  const showValidationMessage = (data) => {
    let errorMessage = null;

    /* check for validation */
    if (data.validation && !data.valid && data.validationMessage) {
      errorMessage = (
        <div className="error_label">{data.validationMessage}</div>
      );
    }

    return errorMessage;
  };

  return <div>{renderFields()}</div>;
};

export default FormFields;
