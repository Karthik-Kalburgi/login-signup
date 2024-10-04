import React, { useState } from "react";

interface MiddleProps {
  onLayoutSelect: (modelNumber: string) => void;
}

const Middle: React.FC<MiddleProps> = ({ onLayoutSelect }) => {
  const sizes = ["4_4_6", "4_6_6", "4_9", "6_6", "9_9", "12_6", "12_12"];
  const [selectedSize, setSelectedSize] = useState<string>("");

  const handleButtonClick = (size: string) => {
    setSelectedSize(size); // Update selected size
    onLayoutSelect(`SM${size}`); // Pass size in the format SL<number>
  };

  return (
    <div className="flex flex-col items-center">
      <img src="/img/SM.png" alt="Large Image" className="w-70 h-auto mb-5" />
      <div className="grid grid-cols-4 gap-4">
        {sizes.map((size) => (
          <button
            key={size}
            className={`p-3 rounded-lg border transition duration-300 ease-in-out ${
              selectedSize === size
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-blue-600`}
            onClick={() => handleButtonClick(size)}
          >
            <span>{size}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Middle;
