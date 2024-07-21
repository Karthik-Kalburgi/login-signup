import { IoLocation } from "react-icons/io5";
import SocialMedia from "./SocialMedia";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-8 ">

      <div className="container mx-auto px-4 flex flex-wrap justify-between">
      <div className="flex-center flex-col gap-2 ">
        <img 
            src="/logo.jpeg"
            alt="MODULO Logo"
            className="mb-1 w-[220px] h-[100px] rounded-lg "
          />
           <SocialMedia />

          </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0 items-center flex flex-col justify-center ">
         
       
         
          <p className="mb-4 text-sm font-bold">Working Hours:</p>
          <p className="mb-4 text-sm ">Monday to Saturday</p>
          <p >10:00 a.m. to 7:00 p.m.</p>
        </div>
        
          

        <div className="w-full md:w-1/3 flex-center flex-col ">
          <h3 className="text-lg font-semibold mb-4 ">We are located at</h3>
          <div className="flex gap-4">
          <div className="mb-4 ">
            <p className="mb-2 text-sm">
            <IoLocation />{" "}
              #40 August House Behind Pai Hotel J.C Nagar Bailapanavvar Nagar
              Hubballi Karnataka 580-029
            </p>
             <p className="mb-2 text-sm flex items-center justify-start">
              {" "} 
              <FaPhone />
              +91 903-594-6002
            </p>
          </div>
          <div>
            <p className="mb-2 text-sm">
            <IoLocation />{" "}
              #212 Bellary Rd Near Renault Showroom Sadashiva Nagar Armane Nagar
              Bengaluru Karnataka 560-080
            </p>
            <p className="mb-2 text-sm flex items-center justify-start">
              

            <FaPhone />
              
              +91 962-074-6382
            </p>
            <p className="mb-2 text-sm flex items-center justify-start gap-1">
               <HiOutlineMail />
              hello@modulo.co.in
            </p>
          </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 border-t border-zinc-700 pt-4 flex flex-wrap justify-between items-center">
        <p className="text-sm">
          &copy; 2024 All rights reserved | This Website is Maintained By MODULO.COM ||
        
        </p>
        <a href="#" className="text-sm text-white hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
