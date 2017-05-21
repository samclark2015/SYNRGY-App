declare var CameraPreview;

export class Camera {
  private static instance: Camera;
  static getInstance = function(): Camera {
    if(Camera.instance == null)
      Camera.instance = new Camera();
    return Camera.instance;
  }

  preview: CameraPreview;
  options = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: "BACK",
    toBack: true
  };

  private constructor() {
    console.log("camera tryna construct");
    this.preview = CameraPreview;
    CameraPreview.getSupportedPictureSizes(function(dimensions){
      // note that the portrait version, width and height swapped, of these dimensions are also supported
      dimensions.forEach(function(dimension) {
        console.log(dimension.width + 'x' + dimension.height);
      });
    });
  }
}
