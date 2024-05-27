import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-[#006d5b] pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-[#90ee90]">
            CHAIWAT WONGSATJACHOCK
          </p>
          <p className="font-playfair text-md text-[#90ee90]">
            ©2024 WONGSATJACHOCK. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;