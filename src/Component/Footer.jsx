import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { IoArrowUpOutline } from "react-icons/io5";
import footer from "../assets/Images/footer.webp";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  let redirect = useNavigate();

  return (
    <section
      className="h-[30vh] md:h-[30vh] lg:h-[70vh] border-t border-gray-300 w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <div className="h-[20vh] lg:h-[30vh] flex flex-col items-center justify-between w-full">
        {/* Social Icons */}
        <div className="h-20 w-100 md:w-[60vw] lg:w-100 mt-10 flex items-center justify-center gap-6 md:gap-10 lg:gap-14">
          <div className="h-10 w-10 cursor-pointer text-white flex items-center justify-center rounded-lg hover:bg-amber-600 hover:border-black hover:text-black border border-gray-50">
            <a href="www.linkedin.com/in/arpit-singh-rajpoot-ab296839b">
              <FaLinkedin className="text-lg md:text-xl" />
            </a>
          </div>

          <div className="h-10 w-10 cursor-pointer text-white flex items-center justify-center rounded-lg hover:bg-amber-600 hover:border-black hover:text-black border border-gray-50">
            <a href="https://www.instagram.com/m_aan005">
              <FaInstagram className="text-lg md:text-xl" />
            </a>
          </div>

          <div className="h-10 w-10 cursor-pointer text-white flex items-center justify-center rounded-lg hover:bg-amber-600 hover:border-black hover:text-black border border-gray-50">
            <a href="https://github.com/Mayankgohiya2006">
              <FaGithub className="text-lg md:text-xl" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col text-xl md:text-3xl lg:text-5xl gap-2  md:mt-5 md:mb-5 md:gap-4 text-white items-center">
          <h1 className="hover:text-amber-600 font1 cursor-pointer text-center">
            +91 7987248027
          </h1>
          <h1 className="hover:text-amber-600 font1 cursor-pointer text-center">
            officialarpitsinghrajpoot@gmail.com
          </h1>
        </div>

        {/* Navigation */}
      </div>

      {/* Let's Talk */}
      <div className="h-[5vh] hidden lg:flex   lg:h-[30vh] w-full flex flex-col items-center justify-center">
        <div onClick={()=>{
          redirect("/contact")
        }} className="group ml-27 lg:ml-0 md:ml-0   md:pt-3 h-16 md:h-20 lg:h-25 cursor-pointer overflow-hidden w-[80vw] md:w-[45vw] lg:w-130">
          <div className="flex gap-3 md:gap-5 items-center ">
            <h1 className="text-3xl md:text-6xl lg:text-8xl group-hover:-translate-y-25 transition-all duration-200 flex text-white font2">
              Let's Talk
            </h1>
            <IoArrowUpOutline className="text-3xl md:text-5xl lg:text-7xl rotate-45 text-white" />
          </div>
          <h1 className="text-3xl md:text-6xl lg:text-8xl group-hover:-translate-y-9 md:group-hover:-translate-y-15 lg:group-hover:-translate-y-25 transition-all duration-200 text-white font2">
            Let's Talk
          </h1>
        </div>

        <div className="h-1 w-[50vw] md:w-[45vw] lg:w-130 bg-gray-300"></div>
      </div>

      {/* Bottom Footer */}
      <div className="h-[5vh] w-full flex  md:flex-row items-center justify-between px-5 md:px-10 lg:px-20 text-white lg:text-sm text-[10px] md:text-base">
        <h1 >© 2026 Arpit, All Rights Reserved</h1>
        <h1>Design with Passion in INDIA</h1>
      </div>
    </section>
  );
};

export default Footer;
