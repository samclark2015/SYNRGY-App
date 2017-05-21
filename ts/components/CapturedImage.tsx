import * as React from "react";
import { Camera } from "../Camera";

interface CapturedImageProps {
  imageData: string;
}

export class CapturedImage extends React.Component<CapturedImageProps, undefined> {
  constructor() {
    super();
  }

  getSrc(): string {
    return 'data:image/jpeg;base64,' + this.props.imageData;
  }

  render() {
    if(this.props.imageData == null)
      return null;

      return <img id="CapturedImage" src={this.getSrc()}/>;
  }
}
