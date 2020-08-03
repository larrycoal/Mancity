import React, { Component } from "react";
import FormFields from "../../ui/misc/FormFields";
import { Fade } from "react-reveal";
import {validate} from '../../ui/misc'

class Enroll extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "enter your email",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        validationMessage: "",
      },
    },
  };
  formSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }
  onFormChange(element){
     
      let newFormData={...this.state.formData}
      let newInput = {...newFormData[element.id]}
      newInput.value=element.e.target.value

      let validData=validate(newInput)
      newInput.valid=validData[0]
      newInput.validationMessage=validData[1]
      newFormData[element.id]={...newInput}
      console.log(newFormData)
      this.setState({
          formData:newFormData
      })
  }

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <div className="enroll_title">Enter Your Email</div>
          <form
            onSubmit={(e) => {
              this.formSubmit(e);
            }}
          >
            <div className="enroll_input">
              <FormFields
                formData={this.state.formData.email}
                id='email'
                change={(element)=>this.onFormChange(element)}
              />
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
