import React from "react";
import {
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  PointLight,
  Vector3,
} from "@babylonjs/core";

interface CameraAndLightingProps {
  scene: Scene;
  roomWidth: number;
  height: number;
}

const CameraAndLighting: React.FC<CameraAndLightingProps> = ({
  scene,
  roomWidth,
  height,
}) => {
  React.useEffect(() => {
    const camera = new ArcRotateCamera(
      "camera",
      Math.PI / 2,
      Math.PI / 2.5,
      Math.max(roomWidth, height) * 1.5,
      new Vector3(0, height / 2, 0),
      scene
    );

    camera.attachControl(scene.getEngine().getRenderingCanvas(), true);
    camera.lowerAlphaLimit = -Math.PI;
    camera.upperAlphaLimit = Math.PI;
    camera.lowerBetaLimit = Math.PI / 4;
    camera.upperBetaLimit = Math.PI / 2;
    camera.lowerRadiusLimit = Math.max(roomWidth, height) / 2;
    camera.upperRadiusLimit = Math.max(roomWidth, height) * 2;
    camera.wheelDeltaPercentage = 0.05;

    const hemisphericLight = new HemisphericLight(
      "hemisphericLight",
      new Vector3(0, 1, 0),
      scene
    );
    hemisphericLight.intensity = 0.8;

    const pointLight = new PointLight(
      "pointLight",
      new Vector3(10, 10, 10),
      scene
    );
    pointLight.intensity = 0.6;
  }, [scene, roomWidth, height]);

  return null;
};

export default CameraAndLighting;
