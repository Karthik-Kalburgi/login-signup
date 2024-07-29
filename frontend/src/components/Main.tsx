import { FaArrowRight } from "react-icons/fa";
import { Button } from "./ui/button";
import { ImagesSlider } from "./ui/images-slider";
import { motion } from "framer-motion";

const Main = () => {
  const images: string[] = [
    "/images/k1.jpg",
    "/images/k2.jpg",
    "/images/k3.jpg",
  ];
  return (
    <div className="h-full grid md:grid-cols-3 px-5">
      <div className="h-full col-span-2">
        <ImagesSlider className="h-[40rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              The Best Destination   <br /> for your wardrobe
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Shop now →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </motion.div>
        </ImagesSlider>
      </div>
      <div className="h-full flex-center flex-col gap-[80px] border-[1px] border-gray-400 col-span-1">
        <div className="text-[40px] font-bold">Wardrobe Lab</div>
        <Button variant="secondary" className="gap-2 bg-blue-950 text-white py-8">
          <span className="text-2xl font-semibold">Design here</span> 
          <FaArrowRight/>
          </Button>
      </div>
    </div>
  );
};

export default Main;
