import React from "react";

interface DoorToggleButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setModelFilename: (filename: string) => void;
  layout: string;
}

const DoorToggleButton: React.FC<DoorToggleButtonProps> = ({
  isOpen,
  setIsOpen,
  setModelFilename,
  layout,
}) => {
  const handleToggleDoor = () => {
    if (isOpen) {
      // If currently open, change to a new model filename
      const newFilename = (parseInt(layout) + 10000).toString();
      setModelFilename(newFilename);
    } else {
      // If currently closed, revert to the original layout
      setModelFilename(layout);
    }
    // Toggle the state
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-4 right-4 flex">
      <button
        className="px-3 py-1 text-white font-bold rounded-lg bg-green-500 hover:bg-green-600 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        onClick={handleToggleDoor}
      >
        {isOpen ? "Close Door" : "Open Door"}
      </button>
    </div>
  );
};

export default DoorToggleButton;
