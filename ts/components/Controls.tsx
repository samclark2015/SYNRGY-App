import * as React from "react";
import { Camera } from "../Camera";

interface ControlsDelegate {
  captureImage();
  swapCamera();
  deleteImage();
}

interface ControlsProps {
  delegate: ControlsDelegate;
  hasImage: boolean;
}

class Controls extends React.Component<ControlsProps, undefined> {
  constructor() {
    super();
  }
  render() {
      if(this.props.hasImage) {
        return(
          <div>
            <div className="DeleteButton" onTouchEnd={this.props.delegate.deleteImage}></div>
          </div>
        );
      } else {
        return(
          <div>
            <div className="SwapButton" onTouchEnd={this.props.delegate.swapCamera}></div>
            <div className="CaptureButton" onTouchEnd={this.props.delegate.captureImage}></div>
          </div>
        );
      }
  }
}

export { ControlsDelegate, Controls};
