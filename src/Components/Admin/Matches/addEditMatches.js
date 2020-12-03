import React, { Component } from "react";
import AdminHoc from "../../Layout/AdminHoc";
import FormFields from "../../ui/misc/FormFields";
import { validate } from "../../ui/misc";
import { firebaseDb, firebaseTeams } from "../../../firebase";
import { firbaseLooper } from "../../ui/misc";
class AddEditMatches extends Component {
  state = {
    matchId: "",
    formType: "",
    formError: false,
    formSuccess: "",
    formData: {
      date: {
        element: "input",
        value: "",
        config: {
          name: "date_input",
          type: "date",
          label: "Set Date",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: true,
      },
      local: {
        element: "select",
        value: "",
        config: {
          name: "select_local",
          type: "select",
          label: "",
          options: [],
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: false,
      },
      resultLocal: {
        element: "input",
        value: "",
        config: {
          name: "result_local_input",
          type: "text",
          label: "",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: false,
      },
      away: {
        element: "select",
        value: "",
        config: {
          name: "select_away",
          type: "select",
          label: "",
          options: [],
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: false,
      },
      resultAway: {
        element: "input",
        value: "",
        config: {
          name: "result_away_input",
          type: "text",
          label: "",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: false,
      },
      referee: {
        element: "input",
        value: "",
        config: {
          name: "referee_input",
          type: "text",
          label: "Referee",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: true,
      },
      stadium: {
        element: "input",
        value: "",
        config: {
          name: "stadium_input",
          type: "text",
          label: "Stadium",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: true,
      },
      result: {
        element: "select",
        value: "",
        config: {
          name: "select_result",
          type: "select",
          label: "Team Result",
          options: [
            { key: "W", value: "W" },
            { key: "L", value: "L" },
            { key: "D", value: "D" },
            { key: "n/a", value: "n/a" },
          ],
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: true,
      },
      final: {
        element: "select",
        value: "",
        config: {
          name: "select_played",
          type: "select",
          label: "Game Played",
          options: [
            { key: "Yes", value: "Yes" },
            { key: "No", value: "No" },
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
    console.log(element);
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
  submitForm(e) {
    e.preventDefault();
    console.log(e.target);
  }

  updateFields(match, formType, teamOptions, teams,matchId) {
    const newFormData = {
      ...this.state.formData,
    };
  for(let key in newFormData){
    if (match) {
        newFormData[key].value=match[key]
        newFormData[key].valid=true
        if(key === 'local' || key === 'away'){
            newFormData[key].config.options=teamOptions
        }
    } else {
    }
  }
  console.log(newFormData)
  this.setState({
      matchId,
      formData:newFormData,
      formType
  })
  }
  componentDidMount() {
    var matchId = this.props.match.params.id;

    const getTeams = (match, formType) => {
      firebaseTeams.once("value").then((snapshot) => {
        const teams = firbaseLooper(snapshot.val());
        const teamOptions = [];
        teams.forEach((team) => {
          teamOptions.push({
            key: team.id,
            value: team.shortName,
          });
        });
        this.updateFields(match, formType, teamOptions, teams,matchId);
      });
    };

    if (!matchId) {
    } else {
      firebaseDb
        .ref(`matches/${matchId}`)
        .once("value")
        .then((snapshot) => {
          const match = snapshot.val();
          getTeams(match, "Edit Match");
        });
    }
  }
  render() {
    return (
      <AdminHoc>
        <div className="editmatch_dialog_wrapper">
          <h2>{this.state.formType}</h2>
          <div>
            <form>
              <FormFields
                formData={this.state.formData.date}
                id="date"
                change={(element) => this.onFormChange(element)}
              />
              <div className="select_team_layout">
                <div className="label_inputs">Local</div>
                <div className="wrapper">
                  <div className="left">
                    <FormFields
                      formData={this.state.formData.local}
                      id="local"
                      change={(element) => this.onFormChange(element)}
                    />
                  </div>
                  <div>
                    <FormFields
                      formData={this.state.formData.resultLocal}
                      id="resultLocal"
                      change={(element) => this.onFormChange(element)}
                    />
                  </div>
                </div>
              </div>
              <div className="select_team_layout">
                <div className="label_inputs">Away</div>
                <div className="wrapper">
                  <div className="left">
                    <FormFields
                      formData={this.state.formData.away}
                      id="away"
                      change={(element) => this.onFormChange(element)}
                    />
                  </div>
                  <div>
                    <FormFields
                      formData={this.state.formData.resultAway}
                      id="resultAway"
                      change={(element) => this.onFormChange(element)}
                    />
                  </div>
                </div>
              </div>
              <div className="split_fields">
                <FormFields
                  formData={this.state.formData.referee}
                  id="referee"
                  change={(element) => this.onFormChange(element)}
                />
                <FormFields
                  formData={this.state.formData.stadium}
                  id="stadium"
                  change={(element) => this.onFormChange(element)}
                />
              </div>
              <div className="split_fields last">
                <FormFields
                  formData={this.state.formData.result}
                  id="result"
                  change={(element) => this.onFormChange(element)}
                />
                <FormFields
                  formData={this.state.formData.final}
                  id="final"
                  change={(element) => this.onFormChange(element)}
                />
              </div>
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
        </div>
      </AdminHoc>
    );
  }
}

export default AddEditMatches;
