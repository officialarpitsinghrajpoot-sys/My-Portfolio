import React from "react";
import GC from "../assets/Images/GClogo.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Archievement = (props) => {
  // console.log(props);
  useGSAP(() => {
    gsap.fromTo(
      ".Archievementcom",
      {
        x: 100,
        opacity: 0,
        // duration: 1,
        // stagger:1,

        scrollTrigger: {
          trigger: ".section7",
          start: "top 60%",
        },
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.8,

        scrollTrigger: {
          trigger: ".section7",
          start: "top 60%",
        },
      },
    );
  });
  return (
    <div className="section7">
      <div
        className="w-[90vw] Archievementcom md:w-[90vw] lg:w-[30vw] 
                h-[40vh] lg:h-80 
                text-white p-4 md:p-5 
                flex flex-col justify-between 
                bg-[#1C1C1C] 
                 md:mt-10 lg:mt-15 rounded-xl"
      >
        {/* Title */}
        <h1 className="text-center text-lg md:text-4xl lg:text-3xl font5">
          {props.data.title}
        </h1>

        {/* Description */}
        <p className="text-xs md:text-lg  lg:text-sm text-justify font3 mt-3">
          {props.data.Desc}
        </p>

        {/* Footer */}
        <div className="flex items-center gap-3 md:gap-5 mt-4">
          <div className="h-8 w-8 md:h-10 md:w-10">
            <img
              src={props.data.logo}
              className="h-full w-full object-cover rounded-full"
              alt=""
            />
          </div>

          <h1 className="text-sm md:text-lg lg:text-2xl">- {props.data.by}</h1>
        </div>
      </div>
    </div>
  );
};

export default Archievement;
