import React, { Component } from "react";
import AdminHoc from "../../Layout/AdminHoc";
import FormFields from "../../ui/misc/FormFields";
import { validate } from "../../ui/misc";
import { firebaseDb, firebaseMatches, firebaseTeams } from "../../../firebase";
import { firbaseLooper } from "../../ui/misc";

class AddEditPlayers extends Component {
  state = {
    matchId: "",
    formType: "",
    formError: false,
    formSuccess: "",
    default: "",
    formData: {
      name: {
        element: "input",
        value: "",
        config: {
          name: "name_input",
          type: "text",
          label: "Player Name",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: true,
      },
      lastname: {
        element: "input",
        value: "",
        config: {
          name: "lastname_input",
          type: "text",
          label: "Player LastName",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: true,
      },
      number: {
        element: "input",
        value: "",
        config: {
          name: "number_input",
          type: "number",
          label: "Player Number",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: true,
      },
      position: {
        element: "select",
        value: "",
        config: {
          name: "player_position",
          type: "select",
          label: "Position",
          options: [
            { key: "Keeper", value: "Keeper" },
            { key: "Defence", value: "Defence" },
            { key: "Midfield", value: "Midfield" },
            { key: "Striker", value: "Striker" },
          ],
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: true,
      },
    },
  };

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
  success(message) {
    this.setState({
      formSuccess: message,
    });
    setTimeout(() => {
      this.setState({
        formSuccess: "",
      });
    }, 2000);
  }
  componentDidMount(){
      if(!this.props.match.params.id){
          this.setState({
              formType:"Add player"
          })
      }else{

      }
  }
  render() {
    return (
      <AdminHoc>
        <div className="editplayers_dialog_wrapper">
          <h2>{this.state.formType}</h2>
          <form>
            <FormFields
              formData={this.state.formData.name}
              id="playerName"
              change={(element) => this.onFormChange(element)}
            />
             <FormFields
              formData={this.state.formData.lastname}
              id="playerLastname"
              change={(element) => this.onFormChange(element)}
            />
             <FormFields
              formData={this.state.formData.number}
              id="playerNumber"
              change={(element) => this.onFormChange(element)}
            />
             <FormFields
              formData={this.state.formData.position}
              id="playerPosition"
              change={(element) => this.onFormChange(element)}
            />
             <div className="success_label">{this.state.formSuccess}</div>
              {this.state.formError ? (
                <div className="error_label">Something Went Wrong</div>
              ) : null}
              <div className="admin_submit">
                <button onClick={(e) => this.submitForm(e)}>
                  {this.state.formType}
                </button>
              </div>
          </form>
        </div>
      </AdminHoc>
    );
  }
}

export default AddEditPlayers;
