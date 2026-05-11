import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Component/Navbar";
import myimg from "../assets/Images/my img.jpeg";
import Button from "../Component/Button";
import SkillDisplay from "../Component/SkillDisplay";
import Footer from "../Component/Footer";
import AboutCom from "../Component/AboutCom";
import ProjectComponent from "../Component/ProjectComponent";
import Archivementpage from "./Archivementpage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaArrowRightLong } from "react-icons/fa6";
import { redirect, useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  let redirect = useNavigate()
  useGSAP(() => {
    gsap.fromTo(
      "#mytech",
      {
        y: 100,
        opacity: 0,
        // duration: 1,
        scrollTrigger: {
          trigger: ".section3",
          start: "top 60%",
        },
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".section3",
          start: "top 60%",
        },
      },
    );
  });

  const [skills, setSkills] = useState([
    {
      sno: "01",
      skillname: "HTML",
    },
    {
      sno: "02",
      skillname: "CSS",
    },
    {
      sno: "03",
      skillname: "JavaScript (ES6+)",
    },
    {
      sno: "04",
      skillname: "React JS",
    },
    {
      sno: "05",
      skillname: "Figma",
    },
    {
      sno: "06",
      skillname: "Git/Github",
    },
  ]);

  const cursorRef = useRef();

  useGSAP(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power3.out",
      });
    };
    const main = document.getElementById("main");

    main.addEventListener("mousemove", moveCursor);

    return () => {
      main.removeEventListener("mousemove", moveCursor);
    };
  });

  useGSAP(() => {
    gsap.from(".animate", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });

    gsap.fromTo(
      ".deco",
      {
        x: -100,
        opacity: 0,
        scale: 0.7,
        filter: "blur(8px)",
      },
      {
        x: 0,
        duration: 2,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      },
    );
  });
  return (
    <div id="main" className="  bg-black overflow-hidden ">
      {/* Cursor Div */}
      <div
        ref={cursorRef}
        className="w-4 h-4 bg-gray-400 rounded-full fixed top-0 left-0 pointer-events-none z-999"
      ></div>

      {/* Section   2 */}
      <section>
        <div className="w-full min-h-screen    flex flex-col lg:flex-row text-white  md:mt-10 mb-20">
          {/* Left Section */}
          <div
            className=" flex flex-col justify-end px-5 md:px-10 
                  w-full lg:w-[70vw] h-[50vh] lg:h-[90vh] py-10 md:py-0  "
          >
            <h3 className="text-lg deco md:text-3xl lg:text-3xl font1 leading-tight lg:px-2 md:px-1">
              I’m Specialized in
              <br /> Ui/Ux and Web Developer.
            </h3>

            <h1 className="text-5xl animate md:text-8xl lg:text-[10rem] font5">
              ARPIT
            </h1>
          </div>

          {/* Right Section */}
          <div
            className=" flex justify-start lg:justify-end  md:justify-center
             items-center w-full lg:w-[30vw] h-auto lg:h-[90vh] p-5 lg:mr-8 md:ml-60"
          >
            <div className="h-[40vh] w-[40vw] md:w-[30vw] lg:w-[15vw] ">
              <img
                src={myimg}
                className="h-full w-full object-cover object-top lg:mt-40.5"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Section  2 */}
        <ProjectComponent />
      </section>

      {/* Section   3 */}
      <section className="bg-black section3">
        <div className="flex items-center justify-center h-20">
          <div onClick={()=>{
            redirect("/projects")
          }} className="border cursor-pointer border-gray-100 h-10 w-50  flex items-center justify-center rounded-3xl ">
            <div className=" group  rounded-3xl  text-xl h-10 w-35 flex flex-col justify-top cursor-pointer text-center overflow-hidden">
              <button className="group-hover:-translate-y-7 translate-y-1 text-white transition-all duration-300">
                More
              </button>
              <button className="group-hover:-translate-y-6 translate-y-8 text-white transition-all duration-300">
                More
              </button>
            </div>
            <FaArrowRightLong className="text-2xl text-white" />
          </div>
        </div>
        <div className="lg:px-15 md:px-10 px-5 ">
          <h1
            id="mytech"
            className="text-white lg:text-6xl md:text-4xl text-3xl lg:my-14 my-7 font5"
          >
            My Tech Skills
          </h1>
          {skills.map((val, index) => {
            return <SkillDisplay key={index} data={val} />;
          })}
        </div>
      </section>

      {/* Section   4 */}
      <AboutCom />

      {/* Section   5 */}
      <Archivementpage />

      {/* Section   6 */}
      <Footer />
    </div>
  );
};
export default HomePage;
