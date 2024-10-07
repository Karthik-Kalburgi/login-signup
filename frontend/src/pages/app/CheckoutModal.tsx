import React from "react";
import { motion } from "framer-motion";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@/states/UserState";
import { X, IndianRupee } from "lucide-react";
import axios from "axios";

interface CheckoutModalProps {
  roomWidth: number;
  model: string;
  material: string;
  image: string | null;
  height: number;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  roomWidth,
  model,
  material,
  image,
  height,
  onClose,
}) => {
  const { toast } = useToast();
  const { user } = useUser();

  const getDisplayModel = (model: string) => {
    const firstChar = model.charAt(0);
    const secondChar = model.charAt(1);

    let doorType = "";
    if (firstChar === "C") {
      if (secondChar === "O") {
        doorType = "Sliding Door";
      } else if (secondChar === "S") {
        doorType = "Openable Door";
      }
    } else if (firstChar === "O") {
      doorType = "Sliding Door";
    } else if (firstChar === "S") {
      doorType = "Openable Door";
    }

    // Handle openable doors with underscores
    if (doorType === "Openable Door" && model.includes("_")) {
      const sizes = model.split("_").map((num) => {
        const parsedNum = parseInt(num.replace("SL", ""), 10); // Remove "SL" prefix if exists and parse
        return !isNaN(parsedNum) ? `${parsedNum * 100}mm` : "0mm"; // Convert to mm
      });
      return `${doorType} ${sizes.join(" _ ")}`.trim(); // Join with underscores and add door type
    }

    // Remove 'OL' from model if it exists
    const cleanedModel = model.replace(/OL/g, "").trim(); // Remove 'OL' and trim whitespace

    // Handle sliding doors or a single number
    const sizeMatch = cleanedModel.match(/^\d+$/); // Match a single number
    if (sizeMatch) {
      return `${doorType} ${sizeMatch[0]}mm`; // Append 'mm' for sliding door
    }

    return doorType ? `${doorType} ${model}` : model; // Fallback to original model if not matched
  };

  const formatColor = (color: string) => {
    const parts = color.split("/");
    const lastPart = parts[parts.length - 1];
    const nameWithExtension = lastPart.replace(/\.(png|jpg|jpeg)$/i, "");
    const nameParts = nameWithExtension.split(" ");
    const colorType = parts[parts.length - 2].toUpperCase();
    const name = nameParts.join(" ");
    return `${colorType === "LAM" ? "Laminate" : colorType} ${name}`;
  };

  const handleCheckout = async () => {
    if (!user._id) {
      toast({
        title: "Please log in before checking out",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    try {
      if (!image) {
        toast({ title: "No Image Available" });
        return;
      }

      const API_URL = import.meta.env.VITE_API_URL;
      const res = await axios.post(`${API_URL}/api/wardrobe/save`, {
        userId: user._id,
        roomWidth,
        model,
        material,
        image,
        height,
      });

      if (res.data.error) {
        toast({
          title: "Checkout Failed",
          description: res.data.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        return;
      }

      toast({
        title: "Order Placed!",
        description: "Our team will contact you shortly.",
      });
      onClose();
    } catch (error: any) {
      console.error("CHECKOUT_ERROR", error.message);
      toast({
        title: "Checkout Error",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const displayModel = getDisplayModel(model);
  const displayColor = formatColor(material);

  const cupboardPrice = 15000;
  const colorPrice = 3000;
  const heightPrice = Math.round(height * 5); // ₹5 per cm
  const totalPrice = cupboardPrice + colorPrice + heightPrice;

  const OrderItem = ({
    label,
    value,
    price,
  }: {
    label: string;
    value: string;
    price: number;
  }) => (
    <div className="flex justify-between items-center py-1 text-sm">
      <span className="text-gray-600">{label}</span>
      <div className="text-right">
        <span className="font-semibold text-gray-800">{value}</span>
        <span className="block text-xs text-gray-500">
          ₹{price.toLocaleString("en-IN")}
        </span>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white rounded-lg shadow-xl p-4 max-w-md w-full m-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {image && (
          <img
            src={image}
            alt="Product Preview"
            className="w-full h-45 object-cover rounded-md shadow-sm mb-3"
          />
        )}

        <div className="space-y-1 mb-3">
          <OrderItem
            label="Chosen Cupboard"
            value={displayModel}
            price={cupboardPrice}
          />
          <OrderItem label="Colour" value={displayColor} price={colorPrice} />
          <OrderItem
            label="Cupboard Height"
            value={`${height} cm`}
            price={heightPrice}
          />
        </div>

        <div className="flex justify-between items-center mb-4 pt-2 border-t border-gray-200">
          <span className="text-lg font-bold text-gray-800">Total:</span>
          <span className="text-xl font-bold text-green-600">
            ₹{totalPrice.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="flex flex-col space-y-2">
          <button
            onClick={handleCheckout}
            className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 flex items-center justify-center"
          >
            <IndianRupee size={16} className="mr-2" />
            Place Order
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckoutModal;
