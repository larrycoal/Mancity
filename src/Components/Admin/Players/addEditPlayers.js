import React, { Component } from "react";
import AdminHoc from "../../Layout/AdminHoc";
import FormFields from "../../ui/misc/FormFields";
import { validate } from "../../ui/misc";
import { firebasePlayers, firebaseDb, firebase } from "../../../firebase";
import Fileuploader from "../../ui/misc/FileUploader";

class AddEditPlayers extends Component {
  state = {
    playerId: "",
    formType: "",
    formError: false,
    formSuccess: "",
    defaultImg: "",
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
      image: {
        element: "image",
        value: "",
        validation: {
          required: true,
        },
        valid: true,
      },
    },
  };

  onFormChange(element, content = "") {
    let newFormData = { ...this.state.formData };
    let newInput = { ...newFormData[element.id] };
    if (content === "") {
      newInput.value = element.e.target.value;
    } else {
      newInput.value = content;
    }

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
  updateFields(player) {
    const newFormdata = { ...this.state.formData };
    
    for (let key in newFormdata) {
      newFormdata[key].value = player[key];
      newFormdata[key].valid = true;
    }
    firebase
      .storage()
      .ref("players")
      .child(player.image)
      .getDownloadURL()
      .then((url) => {
        this.setState({
          defaultImg: url,
        })
      }).catch((e)=>{
          this.setState({
              defaultImg:""
          })
      })
  }
  componentDidMount() {
    if (!this.props.match.params.id) {
      this.setState({
        formType: "Add player",
      });
    } else {
      firebaseDb
        .ref(`players/${this.props.match.params.id}`)
        .once("value")
        .then((snapshot) => {
          let player = snapshot.val();
          this.updateFields(player);
        });
      this.setState({
        formType: "Edit Player",
        playerId: this.props.match.params.id,
      });
    }
  }
  submitForm(e) {
    e.preventDefault();
    let dataToSubmit = {};
    let formValid = true;

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
      formValid = this.state.formData[key].valid && formValid;
    }
    if (formValid) {
      if (this.state.formType === "Add player") {
        firebasePlayers.push(dataToSubmit).then(() => {
          this.props.history.push("/admin_players");
        });
      } else {
        firebaseDb
          .ref(`players/${this.state.playerId}`)
          .update(dataToSubmit)
          .then(() => {
              this.props.history.push("/admin_players")
          })
          .catch((error) => {
            this.setState({
                formError:true
            });
          });
        console.log(dataToSubmit)
      }
    } else {
      this.setState({
        formError: true,
      });
    }
  }
  resetImage() {
    const newFormdata = { ...this.state.formData };
    newFormdata["image"].value = "";
    newFormdata["image"].valid = false;
    this.setState({
      formData: newFormdata,
    });
  }
  storeFileName(filename) {
    this.onFormChange({ id: "image" }, filename);
  }
  render() {
    return (
      <AdminHoc>
        <div className="editplayers_dialog_wrapper">
          <h2>{this.state.formType}</h2>
          <form>
            <Fileuploader
              dir="players"
              tag="player image"
              defaultImg={this.state.defaultImg}
              defaultImgName={this.state.formData.image.value}
              resetImage={() => this.resetImage()}
              filename={(filename) => this.storeFileName(filename)}
            />
            <FormFields
              formData={this.state.formData.name}
              id="name"
              change={(element) => this.onFormChange(element)}
            />
            <FormFields
              formData={this.state.formData.lastname}
              id="lastname"
              change={(element) => this.onFormChange(element)}
            />
            <FormFields
              formData={this.state.formData.number}
              id="number"
              change={(element) => this.onFormChange(element)}
            />
            <FormFields
              formData={this.state.formData.position}
              id="position"
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
