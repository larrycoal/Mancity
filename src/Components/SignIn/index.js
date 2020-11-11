import React, { Component } from "react";
import FormFields from "../ui/misc/FormFields";
import { validate } from "../ui/misc";
import { firebase } from "../../firebase";
class SignIn extends Component {
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
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "enter your password",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
      },
    },
  };
  submitForm(e) {
    e.preventDefault();

    let dataToSubmit = {};
    let formValid = true;

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
      formValid = this.state.formData[key].valid && formValid;
    }
    if (formValid) {
      firebase
        .auth()
        .signInWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
        .then(() => {
          this.props.history.push("/dashboard")
        })
        .catch(() => {
          this.setState({
            formError: true,
          });
        });
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
    this.setState({
      formError: false,
      formData: newFormData,
    });
  }
  render() {
    return (
      <div className="container">
        <div className="signin_wrapper">
          <form onSubmit={(event) => this.submitForm(event)}>
            <h2>Please sign in</h2>
            <FormFields
              formData={this.state.formData.email}
              id="email"
              change={(element) => this.onFormChange(element)}
            />
            <FormFields
              formData={this.state.formData.password}
              id="password"
              change={(element) => this.onFormChange(element)}
            />
            <button>Sign In</button>
            {this.state.formError ? (
              <div className="error_label">Deet yén wrong now</div>
            ) : null}
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
