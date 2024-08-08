import { IoLocation } from "react-icons/io5";
import SocialMedia from "./SocialMedia";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-1">
      <div className="h-[90%] container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className="w-full sm:w-auto flex flex-col justify-center items-center sm:items-center mb-4 sm:mb-0">
          <img 
            src="/logo.jpeg"
            alt="MODULO Logo"
            className="mb-2 w-[150px] h-[60px] sm:w-[180px] sm:h-[80px] rounded-lg"
          />
          <SocialMedia />
        </div>
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0 flex flex-col items-center sm:items-start">
          <p className="text-sm font-bold">Working Hours:</p>
          <p className="text-sm">Monday to Saturday</p>
          <p className="text-sm">10:00 a.m. to 7:00 p.m.</p>
        </div>
        <div className="w-full sm:w-1/3 flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold mb-4">We are located at</h3>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            {[{location:"#40 August House Behind Pai Hotel J.C Nagar Bailapanavvar Nagar Hubballi Karnataka 580-029", phone:"+91 903-594-6002"},{
            location:" #212 Bellary Rd Near Renault Showroom Sadashiva Nagar Armane Nagar Bengaluru Karnataka 560-080", phone:"++91 962-074-6382",
            }].map((item, index) => (
                <div key={index} className="flex flex-col gap-1">
                <p className="mb-2 text-[14px] sm:text-[10px] flex items-center gap-1">
                  <IoLocation className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]"/>{" "}
                {item.location}
                </p>
                <p className="mb-2 text-[14px] sm:text-[10px] flex items-center gap-1">
                  <FaPhone className=""/> {item.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[10%] container mx-auto px-4 py-1 border-t border-zinc-700 flex flex-wrap justify-around items-center">
        <p className="text-[10px] sm:text-[12px] text-center sm:text-left">
          &copy; 2024 All rights reserved | This Website is Maintained By MODULO.COM ||
        </p>
        <a href="#" className="text-[10px] sm:text-[12px] text-white hover:underline text-center sm:text-left">
          Privacy Policy
        </a>
      </div>
    </footer> 
  );
};

export default Footer;