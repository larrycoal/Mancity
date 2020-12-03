import React from "react";

const FormFields = ({ formData, id, change }) => {
  let formTemplate = null;

  const showMessage = () => {
    let errorMessage = <div className="error_label">
        {
            formData.validation && !formData.valid ?
             formData.validationMessage
            :null
        }
    </div>

    return errorMessage
  };

  switch (formData.element) {
    case "input":
      return (formTemplate = (
        <div>
          {
            formData.showlabel?
            <div className="label_inputs">
              {formData.config.label}
            </div>
            :null
          }
          <input
            {...formData.config}
            value={formData.value}
            onChange={(e) => change({ e, id })}
          />
          {showMessage()}
        </div>
      ))
      case "select":
      return (formTemplate = (
        <div>
          {
            formData.showlabel?
            <div className="label_inputs">
              {formData.config.label}
            </div>
            :null
          }
         <select>
           <option>Select below</option>
           {
             formData.config.options.map(item=>(
             <option key={item.key} value={item.key}>{item.value}</option>
             ))
           }
         </select>
          {showMessage()}
        </div>
      ))
    default:
      formTemplate = null;
  }

  return formTemplate;
};

export default FormFields;
