import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@/states/UserState";
import { motion } from "framer-motion";
import axios from "axios";

interface CheckoutModalInterface {
  roomWidth: number;
  model: string;
  material: string;
  image: string | null;
  height: number;
}

const CheckoutModal: React.FC<CheckoutModalInterface> = ({
  roomWidth,
  model,
  material,
  image,
  height,
}) => {
  const { toast } = useToast();
  const { user } = useUser();

  const handleCheckout = async () => {
    if (!user._id) {
      toast({
        title: `Checkout Failed`,
        description: "Try Logging in before checking out",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    try {
      if (image == "") {
        toast({ title: "No Image Sending" });
        return;
      }

      const API_URL = import.meta.env.VITE_API_URL;
      console.log(API_URL);
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
          title: `${res.data.message}`,
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        return;
      }

      toast({
        title: `Checkout Saved!`,
        description: `Our Team will contact you shortly!`,
      });
    } catch (error: any) {
      console.log("CHECKOUT_ERROR", error.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <button className="bg-green-400" onClick={handleCheckout}>
        Confirm Order
      </button>
      <button className="bg-red-700">Cancel</button>
    </motion.div>
  );
};

export default CheckoutModal;
