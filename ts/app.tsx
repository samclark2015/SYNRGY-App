import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppComponent } from "./components/AppComponent";
import { Camera } from "./Camera";

window.onload = () => {
  let app = App.getInstance();
};

declare var CameraPreview: CameraPreview;

class App {
  private static instance: App;
  static getInstance = function(): App {
    if(App.instance == null)
      App.instance = new App();
    return App.instance;
  }

  private constructor() {
    ReactDOM.render(
        <AppComponent/>,
        document.getElementById("app")
    );
    document.addEventListener("deviceready", this.deviceReady, false);
  }

  deviceReady = () => {
    let cp = Camera.getInstance();
    cp.preview.startCamera(cp.options);
  }

}
