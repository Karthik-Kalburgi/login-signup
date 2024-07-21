import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
const SocialMedia = () => {
  const iconStyle = ``;
  const icons = [
    {
      name: "Facebook",
      path: "https://www.facebook.com/modulointerior",
      icon: <FaFacebook className={iconStyle} />,
    },
    {
      name: "Youtube",
      path: "https://www.youtube.com/channel/UCixSTCuaE2QBpzRqb_l-ESQ",
      icon: <FaYoutube />,
    },
    {
      name: "Instagram",
      path: "https://www.instagram.com/modulo_interiors/",
      icon: <FaInstagram />,
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/company/modulo-wardrobes-kitchens?original_referer=https%3A%2F%2Fmodulo.co.in%2F",
      icon: <FaLinkedin />,
    },
  ];
  return (
    <div className="flex-center gap-2">
      {icons.map((item, i) => (
        <a target="_blank" className="" href={item.path} key={i}>
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
