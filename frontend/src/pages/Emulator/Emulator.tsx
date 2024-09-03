import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileUpload } from "./component/FileUpload";

const Emulator: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [showOptions, setShowOptions] = useState(false);
  const [size, setSize] = useState<string | null>("");
  const [suggestion, setSuggestion] = useState<string | null>("");

  const handleFileUpload = (file: File | null) => {
    if (file) {
      setImage(file);
      setShowOptions(true);
      randomizeOption();
    }
  };

  const randomizeOption = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomIndex];
    setSuggestion(selectedOption);
    setSize(selectedOption);
    console.log(`Randomized option: ${selectedOption}`);
  };

  const handleOptionSelect = (option: string) => {
    console.log(`${option} selected`);
    setSize(option);
  };

  const options = ["4ft", "5ft", "6ft", "7ft"];

  return (
    <div className="flex justify-center items-center">
      {!image && (
        <div>
          <FileUpload onChange={handleFileUpload} />
        </div>
      )}
      {showOptions && (
        <div className="flex flex-col gap-10">
          <div className="flex justify-center items-center text-3xl font-semibold">
            Selected Size : {size}
          </div>
          <p>Your Suggested Size of the Wardrobe is {suggestion}</p>
          <div className="flex justify-center items-center flex-col gap-5">
            <p>You are free to change the size here </p>
            <div className="grid grid-cols-4 gap-4">
              {options.map((option) => (
                <Button
                  variant="default"
                  className="bg-gray-200 hover:bg-gray-300 text-black font-medium text-lg"
                  key={option}
                  onClick={() => {
                    handleOptionSelect(option);
                  }}
                >
                  {option}
                </Button>
              ))}
            </div>
            <Button>Continue</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Emulator;
