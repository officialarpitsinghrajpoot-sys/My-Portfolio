import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap"; 

const SkillDisplay = (props) => {
  // console.log(props);
  useGSAP(() => {
    gsap.fromTo(
      ".mytechskill",
      {
        opacity: 0,
        y: 100,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger:0.30,
        ease: "linear",
        scrollTrigger:{
          trigger:".section9",
          start:"top 80%",
          end:"top 30%"
        }
      },
    );
  });
  return (
    <div className="section9">
      <div className="lg:h-20 mytechskill md:h-14 h-8 w-full  group cursor-pointer  flex justify-between items-center px-1 transition-all duration-200  hover:bg-[rgba(193,193,193,0.22)] hover:backdrop-blur-[3.2px]  hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)] ">
        <h1 className="lg:text-2xl md:text-xl text-xl text-gray-200 group-hover:translate-x-3 transition-all duration-200 group-hover:text-white">
          {props.data.sno}
        </h1>
        <h1 className="text-gray-200 lg:text-2xl md:text-xl text-xlgroup-hover:-translate-x-5 transition-all duration-500 group-hover:text-white">
          {props.data.skillname}
        </h1>
        <h1></h1>
      </div>
      <div className="h-[0.3px] w-full bg-gray-500"></div>
    </div>
  );
};

export default SkillDisplay;
