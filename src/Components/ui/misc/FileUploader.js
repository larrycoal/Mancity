import React, { Component } from "react";
import FileUploader from "react-firebase-file-uploader";

import { firebase } from "../../../firebase";
import { CircularProgress } from "@material-ui/core";

class Fileuploader extends Component {
  state = {
    name: "",
    isLoading: false,
    fileUrl: "",
  };

  static getDerivedStateFromProps(props, state) {
    if (props.defaultImg) {
      return (state = {
        name: props.defaultImgName,
        fileUrl: props.defaultImg,
      });
    }
    return null;
  }
 resetUpload(){

 }
  handleUploadStart = () => {
    this.setState({
      isLoading: true,
    });
  };
  handleUploadError = () => {
    this.setState({
      isLoading: false,
    });
  };
  handleUploadSuccess = (filename) => {
    firebase
      .storage()
      .ref(this.props.dir)
      .child(filename)
      .getDownloadURL()
      .then((url) => {
        this.setState({
          name: filename,
          fileUrl: url,
          isLoading: false,
        });
      });
    this.props.filename(filename)
  };
  clearUpload(){
      this.setState({
        name: "",
        isLoading: false,
        fileUrl: "",
      })
      this.props.resetImage()
  }
  render() {
    return (
      <div>
        {!this.state.fileUrl ? (
          <div>
            <div className="label_inputs">{this.props.tag}</div>
            <FileUploader
              accept="image/*"
              name="image"
              randomizeFilename
              storageRef={firebase.storage().ref(this.props.dir)}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
            />
          </div>
        ) : null}
        {this.state.isLoading ? (
          <div className="progress">
            <CircularProgress />
          </div>
        ) : null}
        {this.state.fileUrl ? (
          <div className="image_upload_container">
            <img src={this.state.fileUrl} alt={this.state.name} />
            <div className="remove" onClick={()=>this.clearUpload()}style={{"z-index":"10"}}> Remove</div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Fileuploader;
