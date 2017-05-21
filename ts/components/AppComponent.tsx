import * as React from "react";
import { Controls, ControlsDelegate } from "./Controls";
import { CapturedImage } from "./CapturedImage"
import { Camera } from "../Camera";

interface AppState {
  imageData?: string;
}

export class AppComponent extends React.Component<undefined, AppState> implements ControlsDelegate {
  constructor() {
    super();
    this.state = {
      imageData: null
    }
  }

  tapFocus = (event) => {
    event.persist();

    let touch = event.changedTouches[0];
    Camera.getInstance().preview.tapToFocus(touch.screenX, touch.screenY);
  }

  captureImage = () => {
    let cameraInst = Camera.getInstance();
    let captureSuccess = (function(data) {
      this.setState({ imageData: data });
    }).bind(this);

    cameraInst.preview.takePicture({
      quality: 100
    }, captureSuccess);
  }

  swapCamera = () => {
    let cameraInst = Camera.getInstance();
    cameraInst.preview.switchCamera();
  }

  deleteImage = () => {
    let cameraInst = Camera.getInstance();
    this.setState({ imageData: null} );
    cameraInst.preview.startCamera(cameraInst.options);
  }

  render() {
    return(
      <div className="AppComponent" onTouchEnd={this.tapFocus} onDoubleClick={this.swapCamera}>
        <CapturedImage imageData={this.state.imageData}/>
        <Controls delegate={this} hasImage={this.state.imageData != null}/>
      </div>
    )
  }
}
