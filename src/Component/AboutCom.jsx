import React from "react";
import Button from "./Button";
import aboutimg from "../assets/Images/aboutmyimg.jpeg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AboutCom = () => {
  let redirect = useNavigate()
  useGSAP(() => {
    gsap.fromTo(
      ".aboutme",
      {
        y: 100,
        opacity: 0,
        // duration: 1,
        scrollTrigger: {
          trigger: ".section5",
          start: "top 60%",
        },
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".section5",
          start: "top 60%",
        },
      },
    );
  });
  return (
    <section className="w-full section5 min-h-screen flex flex-col lg:flex-row px-5 md:px-10 py-10">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex items-center">
        <div className="w-full lg:w-[50vw] flex flex-col justify-between text-gray-300 gap-6">
          <h1 className="text-3xl aboutme md:text-4xl lg:text-6xl font5">
            About Me
          </h1>

          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-sm md:text-lg font1">
              Creative UI/UX designer and Front-End Developer focused on building modern, user-friendly, and interactive digital experiences. Skilled in Figma, HTML, CSS, JavaScript, and React.js, I design visually engaging interfaces with advanced animations, including 3D effects and smooth micro-interactions.

I specialize in transforming ideas into clean, scalable, and high-impact products while continuously improving in design systems, interaction design, and modern front-end development.

            </p>

            <p className="text-sm md:text-lg font1">
              I have a solid understanding of
              <b> JavaScript and strong problem-solving</b> skills, allowing me
              to build logic-driven applications. I continuously improve by
              working on real-world projects and exploring new technologies.
            </p>
          </div>

          <div className="flex justify-center">
            <div
              onClick={() => {
                redirect("/contact");
              }}
              className="border cursor-pointer border-gray-100 h-10 w-50  flex items-center justify-center rounded-3xl "
            >
              <div className=" group  rounded-3xl  text-xl h-10 w-35 flex flex-col justify-top cursor-pointer text-center overflow-hidden">
                <button className="group-hover:-translate-y-7 translate-y-1 text-white transition-all duration-300">
                  View Resume
                </button>
                <button className="group-hover:-translate-y-6 translate-y-8 text-white transition-all duration-300">
                  View Resume
                </button>
              </div>
              <FaArrowRightLong className="text-2xl text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
        <div className="w-[60vw] md:w-[90vw] lg:w-[40vw] h-[50vh] md:h-[60vh] lg:ml-0 lg:h-[90vh]">
          <img
            src={aboutimg}
            className="w-full h-full object-cover rounded-2xl lg:rounded-none "
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCom;
