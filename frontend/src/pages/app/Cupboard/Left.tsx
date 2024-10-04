import React, { useState } from "react";

interface LeftProps {
  onLayoutSelect: (modelNumber: string) => void; // Change type to string
}

const Left: React.FC<LeftProps> = ({ onLayoutSelect }) => {
  const sizes = [1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400];
  const [selectedSize, setSelectedSize] = useState<number>(0);

  const handleButtonClick = (size: number) => {
    setSelectedSize(size); // Update selected size
    onLayoutSelect(`OL${size}`); // Pass size in the format OL<number>
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src="/img/L2400.png"
        alt="Large Image"
        className="w-64 h-auto mb-6"
        onClick={() => onLayoutSelect(`OL${2400}`)} // Pass 2400 as OL2400
      />
      <div className="grid grid-cols-3 gap-4">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleButtonClick(size)} // Pass size in OL format
            className={`p-3 rounded-lg border transition duration-300 ease-in-out ${
              selectedSize === size
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-blue-600`}
          >
            <span>{size}</span>
            <span className="ml-1">mm</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Left;
