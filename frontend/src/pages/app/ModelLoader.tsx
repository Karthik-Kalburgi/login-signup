import React, { useEffect } from "react";
import { Scene, AbstractMesh, SceneLoader, Vector3 } from "@babylonjs/core";

interface ModelLoaderProps {
  scene: Scene;
  modelFilename: string;
  setCurrentModel: (model: AbstractMesh | null) => void;
}

const ModelLoader: React.FC<ModelLoaderProps> = ({
  scene,
  modelFilename,
  setCurrentModel,
}) => {
  useEffect(() => {
    SceneLoader.ImportMesh(
      "",
      "/models/",
      `${modelFilename}.glb`,
      scene,
      (meshes) => {
        if (meshes.length > 0) {
          const model = meshes[0] as AbstractMesh;
          model.position = new Vector3(900, 0, -300);
          setCurrentModel(model);
        }
      },
      null,
      (_scene, message) => {
        console.error("Error loading model:", message);
      }
    );
  }, [scene, modelFilename, setCurrentModel]);

  return null;
};

export default ModelLoader;
