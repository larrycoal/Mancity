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
          <input
            {...formData.config}
            value={formData.value}
            onChange={(e) => change({ e, id })}
          />
          {showMessage()}
        </div>
      ));
    default:
      formTemplate = null;
  }

  return formTemplate;
};

export default FormFields;
