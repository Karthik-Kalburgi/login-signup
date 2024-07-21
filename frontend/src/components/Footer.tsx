import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src="https://placehold.co/150x50?text=MODULO"
            alt="MODULO Logo"
            className="mb-4"
          />
          <p className="mb-2">KITCHENS, WARDROBES & MORE</p>
          <SocialMedia />
          <p className="mb-2">Working Hours:</p>
          <p className="mb-2">Monday to Saturday</p>
          <p>10:00 a.m. to 7:00 p.m.</p>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">We are located at</h3>
          <div className="mb-4">
            <p className="mb-2">
              <img
                src="https://openui.fly.dev/openui/24x24.svg?text=📍"
                alt="Location"
              />{" "}
              #40 August House Behind Pai Hotel J.C Nagar Bailapanavvar Nagar
              Hubballi Karnataka 580-029
            </p>
            <p className="mb-2">
              <img
                src="https://openui.fly.dev/openui/24x24.svg?text=📞"
                alt="Phone"
              />{" "}
              +91 903-594-6002
            </p>
          </div>
          <div>
            <p className="mb-2">
              <img
                src="https://openui.fly.dev/openui/24x24.svg?text=📍"
                alt="Location"
              />{" "}
              #212 Bellary Rd Near Renault Showroom Sadashiva Nagar Armane Nagar
              Bengaluru Karnataka 560-080
            </p>
            <p className="mb-2">
              <img
                src="https://openui.fly.dev/openui/24x24.svg?text=📞"
                alt="Phone"
              />{" "}
              +91 962-074-6382
            </p>
            <p>
              <img
                src="https://openui.fly.dev/openui/24x24.svg?text=✉️"
                alt="Email"
              />{" "}
              hello@modulo.co.in
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 border-t border-zinc-700 pt-4 flex flex-wrap justify-between items-center">
        <p className="text-sm">
          &copy; 2024 All rights reserved | This Website is Maintained By
          VSBots.com
        </p>
        <a href="#" className="text-sm text-white hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
