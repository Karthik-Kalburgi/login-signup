import { IoLocation } from "react-icons/io5";
import SocialMedia from "./SocialMedia";
import { FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-[#333333] text-white py-1"
    >
      <div className="mx-auto px-4 grid grid-cols-1  md:grid-cols-9">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center h-full col-span-2">
          <img
            src="/logo.jpeg"
            alt="MODULO Logo"
            className="mb-2 w-[150px] h-[60px] sm:w-[180px] sm:h-[80px] rounded-lg"
          />
          <SocialMedia />
        </div>

        <div className="flex flex-col col-span-7 mt-3 md:mt-0">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="md:w-[30%] flex flex-col items-center sm:items-start">
              <p className="text-sm font-bold">Working Hours:</p>
              <p className="text-sm">Monday to Saturday</p>
              <p className="text-sm">10:00 a.m. to 7:00 p.m.</p>
            </div>

            <div className="md:w-[60%] flex flex-col items-center sm:items-center py-1 my-2">
              <h3 className="text-lg font-semibold hover:underline">
                We are located at
              </h3>
              <div className="flex  gap-3 items-center justify-center sm:flex-row sm:gap-6">
                {[
                  {
                    location:
                      "#40 August House Behind Pai Hotel J.C Nagar Bailapanavvar Nagar Hubballi Karnataka 580-029",
                    phone: "+91 903-594-6002",
                  },
                  {
                    location:
                      " #212 Bellary Rd Near Renault Showroom Sadashiva Nagar Armane Nagar Bengaluru Karnataka 560-080",
                    phone: "++91 962-074-6382",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-start">
                    <p className="flex text-xs items-center gap-2">
                      <IoLocation className="size-10" /> {item.location}
                    </p>
                    <p className="flex text-xs items-center gap-2">
                      <FaPhone className="size-4" /> {item.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-500 flex items-center w-full justify-around py-1">
            <div className="text-[8px] sm:text-[12px] text-center sm:text-left">
              &copy; 2024 All rights reserved | This Website is Maintained By
              MODULO.COM ||
            </div>
            <div className="text-[8px] sm:text-[12px] text-white hover:underline text-center sm:text-left">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
