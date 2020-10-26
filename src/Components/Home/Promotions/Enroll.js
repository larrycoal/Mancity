import React, { Component } from "react";
import FormFields from "../../ui/misc/FormFields";
import { Fade } from "react-reveal";
import { validate } from "../../ui/misc";

import {firebasePromotions} from "../../../firebase"
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

  resetForm(type) {
    let newFormData = { ...this.state.formData };
    
    for(let key in newFormData){
        newFormData[key].value=""
        newFormData[key].valid=false
        newFormData[key].validationMessage=""
    }
    this.setState({
      formError:false,
      formSuccess:type ? "congratulaions":"Already on Database",
      formData:newFormData
    })
    this.resetSuccess()
  }


  resetSuccess(){
    setTimeout(()=>{
      this.setState({
        formSuccess:""
      })
    },2000)
  }


  formSubmit(e) {
    e.preventDefault();

    let dataToSubmit = {};
    let formValid = true;

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
      formValid = this.state.formData[key].valid && formValid;
    }
    if (formValid) {
      console.log(dataToSubmit);
      firebasePromotions.orderByChild("email").equalTo(dataToSubmit.email).once('value')
      .then((snapshot)=>{
          if(snapshot.val()===null){
            firebasePromotions.push(dataToSubmit)
            this.resetForm(true)
          }else{
            this.resetForm(false)
          }
      })
      this.resetForm();
    } else {
      this.setState({
        formError: true,
      });
    }
  }
  onFormChange(element) {
    let newFormData = { ...this.state.formData };
    let newInput = { ...newFormData[element.id] };
    newInput.value = element.e.target.value;

    let validData = validate(newInput);
    newInput.valid = validData[0];
    newInput.validationMessage = validData[1];
    newFormData[element.id] = { ...newInput };
    console.log(newFormData);
    this.setState({
      formError: false,
      formData: newFormData,
    });
  }

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <div className="enroll_title">Enter Your Email</div>
          <form>
            <div className="enroll_input">
              <FormFields
                formData={this.state.formData.email}
                id="email"
                change={(element) => this.onFormChange(element)}
              />
              {this.state.formError ? (
                <div className="error_label">something went Wrong</div>
              ) : null}
              <div className="success_label">
                {this.state.formSuccess}
              </div>
              <button onClick={(event) => this.formSubmit(event)}>
                Enroll
              </button>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
