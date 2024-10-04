import React, { useRef, useEffect, useState } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  Vector3,
  Color4,
  MeshBuilder,
  SceneLoader,
  AbstractMesh,
  StandardMaterial,
  Texture,
  Color3,
  PointLight,
  PBRMaterial,
} from "@babylonjs/core";
import "@babylonjs/loaders";
import { useModel } from "@/states/ModelState";

interface BabylonSceneProps {
  roomWidth: number;
  layoutPosition: string | null;
  height: number;
  colorTexture: string;
}

const BabylonScene: React.FC<BabylonSceneProps> = ({
  roomWidth,
  layoutPosition,
  height,
  colorTexture,
}) => {
  const { setModelFileName, modelFileName } = useModel();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scene, setScene] = useState<Scene | null>(null);
  const [currentModel, setCurrentModel] = useState<AbstractMesh | null>(null);

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const engine = new Engine(canvas, true);
      const newScene = new Scene(engine);

      newScene.clearColor = new Color4(0.9, 0.9, 0.9, 1.0);

      const camera = new ArcRotateCamera(
        "camera",
        Math.PI / 2,
        Math.PI / 2.5,
        Math.max(roomWidth, height) * 1.5,
        new Vector3(0, height / 2, 0),
        newScene
      );
      camera.attachControl(canvas, true);

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
        newScene
      );
      hemisphericLight.intensity = 0.8;

      const pointLight = new PointLight(
        "pointLight",
        new Vector3(10, 10, 10),
        newScene
      );
      pointLight.intensity = 0.6;

      createRoom(newScene);

      engine.runRenderLoop(() => {
        newScene.render();
      });

      const handleResize = () => {
        engine.resize();
      };

      window.addEventListener("resize", handleResize);
      setScene(newScene);

      return () => {
        window.removeEventListener("resize", handleResize);
        engine.dispose();
        newScene.dispose();
      };
    }
  }, [roomWidth, height]);

  useEffect(() => {
    if (scene) {
      if (currentModel) {
        currentModel.dispose();
      }

      SceneLoader.ImportMesh(
        "",
        "/models/",
        `${modelFileName}.glb`,
        scene,
        (meshes) => {
          if (meshes.length > 0) {
            const model = meshes[0] as AbstractMesh;

            const minRate = 17;
            const maxRate = 720;
            const minSize = 1700;
            const maxSize = 2400;
            const baseRoomWidth = 2600;

            const scaleFactor = roomWidth / baseRoomWidth;

            const fileName = modelFileName;
            console.log("FIleName->", fileName);
            const size = parseInt(fileName.match(/\d+/g).join("")); // Extracts all digits and joins them into a single string
            console.log("Size->", size);

            // Adjust rateOfChangeX with scale factor
            const rateOfChangeX =
              (minRate +
                ((size - minSize) * (maxRate - minRate)) /
                  (maxSize - minSize)) *
              scaleFactor;

            console.log("Rate->", rateOfChangeX);

            model.position = new Vector3(
              layoutPosition == "left"
                ? 1300
                : layoutPosition == "right"
                ? 450 + rateOfChangeX
                : 900,
              0,
              -300
            );

            const floorTexture = new Texture(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2OBtCyO9PKGxZtLENIe09f3kBsxPZezjSA&s",
              scene
            );

            model.getChildMeshes().forEach((mesh) => {
              if (mesh.material) {
                if (mesh.material instanceof StandardMaterial) {
                  const stdMaterial = mesh.material as StandardMaterial;
                  stdMaterial.diffuseTexture = floorTexture.clone();
                  stdMaterial.diffuseTexture.hasAlpha = true;
                  stdMaterial.useAlphaFromDiffuseTexture = true;
                  stdMaterial.specularColor = new Color3(0, 0, 0); // No specular highlights
                  stdMaterial.emissiveColor = new Color3(1, 1, 1); // Slightly illuminated
                } else if (mesh.material instanceof PBRMaterial) {
                  const pbrMaterial = mesh.material as PBRMaterial;
                  pbrMaterial.albedoTexture = floorTexture.clone();
                  pbrMaterial.albedoTexture.hasAlpha = true;
                  pbrMaterial.useAlphaFromAlbedoTexture = true;
                  pbrMaterial.metallic = 0; // Non-metallic
                  pbrMaterial.roughness = 1; // Rough surface
                }
              }
            });

            setCurrentModel(model);

            console.log(modelFileName);
          }
        },
        null,
        (_scene, message) => {
          console.error("Error loading model:", message);
        }
      );
    }
  }, [scene, modelFileName]);

  useEffect(() => {
    if (scene && currentModel && colorTexture) {
      const newTexture = new Texture(colorTexture, scene);

      currentModel.getChildMeshes().forEach((mesh) => {
        if (mesh.material) {
          if (mesh.material instanceof StandardMaterial) {
            const stdMaterial = mesh.material as StandardMaterial;
            stdMaterial.diffuseTexture = newTexture.clone();
            stdMaterial.diffuseTexture.hasAlpha = true;
            stdMaterial.useAlphaFromDiffuseTexture = true;
            stdMaterial.specularColor = new Color3(0, 0, 0); // No specular highlights
            stdMaterial.emissiveColor = new Color3(1, 1, 1); // Slightly illuminated
          } else if (mesh.material instanceof PBRMaterial) {
            const pbrMaterial = mesh.material as PBRMaterial;
            pbrMaterial.albedoTexture = newTexture.clone();
            pbrMaterial.albedoTexture.hasAlpha = true;
            pbrMaterial.useAlphaFromAlbedoTexture = true;
            pbrMaterial.metallic = 0; // Non-metallic
            pbrMaterial.roughness = 1; // Rough surface
          }
        }
      });
    }
  }, [scene, currentModel, colorTexture]);

  const createRoom = (scene: Scene) => {
    const roomDepth = 2000;

    const floorMat = new StandardMaterial("floorMat", scene);
    floorMat.diffuseTexture = new Texture(
      "https://www.babylonjs-playground.com/textures/wood.jpg",
      scene
    );

    const floor = MeshBuilder.CreateGround(
      "floor",
      { width: roomWidth, height: roomDepth },
      scene
    );
    floor.material = floorMat;
    floor.position.y = -0.1;

    const wallMatLight = new StandardMaterial("wallMatLight", scene);
    wallMatLight.diffuseColor = new Color3(1.0, 1.0, 1.0);

    const wallParams = [
      {
        name: "backWall",
        width: roomWidth,
        height: height,
        position: new Vector3(0, height / 2, -roomDepth / 2),
        rotation: Math.PI,
      },
      {
        name: "frontWall",
        width: roomWidth,
        height: height,
        position: new Vector3(0, height / 2, roomDepth / 2),
        rotation: 0,
      },
      {
        name: "leftWall",
        width: roomDepth,
        height: height,
        position: new Vector3(-roomWidth / 2, height / 2, 0),
        rotation: -Math.PI / 2,
      },
      {
        name: "rightWall",
        width: roomDepth,
        height: height,
        position: new Vector3(roomWidth / 2, height / 2, 0),
        rotation: Math.PI / 2,
      },
    ];

    wallParams.forEach(({ name, width, height, position, rotation }) => {
      const wall = MeshBuilder.CreatePlane(name, { width, height }, scene);
      wall.material = wallMatLight;
      wall.position = position;
      wall.rotation.y = rotation;
    });
  };

  const handleToggleDoor = () => {
    console.log(isOpen);
    const closedFileName = `C${modelFileName}`; // Keep the model number part intact
    if (isOpen) {
      // If currently open, close the door by prefixing 'C' to the filename
      setModelFileName(closedFileName);
    } else {
      // If currently closed, open the door
      if (modelFileName[0] == "C") {
        setModelFileName(modelFileName.substring(1));
      } else {
        setModelFileName(modelFileName);
      }
    }

    setIsOpen(!isOpen); // Toggle the state
  };

  // useEffect(() => {
  //   if (isOpen) {
  //     setModelFileName("C" + modelFileName);
  //   } else if (!isOpen) {
  //     if (modelFileName[0] == "C") {
  //       setModelFileName(modelFileName.substring(1));
  //     } else {
  //       setModelFileName(modelFileName);
  //     }
  //   }
  // }, [isOpen]);

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute top-4 right-4 flex">
        <button
          className="px-3 py-1 text-white font-bold rounded-lg bg-green-500 hover:bg-green-600 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          onClick={() => {
            setIsOpen(!isOpen);
            handleToggleDoor();
          }}
        >
          {isOpen ? "Close Door" : "Open Door"}
        </button>
      </div>
    </div>
  );
};

export default BabylonScene;
