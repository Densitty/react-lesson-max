import React from 'react';

const FormFields = props => {

  const renderFields = () => {
    const formArray = [];

    for (let elementName in props.formData) {
      formArray.push({
        id: elementName,
        settings: props.formData[elementName]
      })
    }
    // console.log(formArray)
    return formArray.map((element, index) => {
      return (
        <div key={index} className='form_element'>
          {renderTemplates(element)}
        </div>
      )
    })
  }


  const renderTemplates = (data) => {
    let formTemplate = null;
    let dataValues = data.settings;

    switch (dataValues.element) {
      case ('input'):
        // console.log(dataValues);
        formTemplate = (
          <div>
            {showLabel(dataValues.label, dataValues.labelText)}
            <input {...dataValues.config}
              value={dataValues.value}
              onChange={event => changeHandler(event, data.id)} />
          </div>
        );
        break;
      default:
        formTemplate = null
        break;
    }
    return formTemplate
  }

  const showLabel = (showLabel, labelText) => {
    return showLabel ?
      <label>{labelText}</label>
      :
      null;
  }

  const changeHandler = (event, keyID) => {
    // console.log(event.target.value)
    const newState = props.formData;
    // console.log(newState)
    newState[keyID].value = event.target.value

    props.change(newState)
  }

  return (
    <div>
      {renderFields()}
    </div>
  )
}

export default FormFields