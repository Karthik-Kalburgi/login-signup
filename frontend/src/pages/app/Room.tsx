import React from "react";
import {
  Scene,
  MeshBuilder,
  StandardMaterial,
  Vector3,
  Color3,
  Texture,
} from "@babylonjs/core";

interface RoomProps {
  scene: Scene;
  roomWidth: number;
  height: number;
}

const Room: React.FC<RoomProps> = ({ scene, roomWidth, height }) => {
  const createRoom = () => {
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

  React.useEffect(() => {
    createRoom();
  }, [scene, roomWidth, height]);

  return null;
};

export default Room;
