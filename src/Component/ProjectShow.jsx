import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const ProjectShow = (props) => {
  useGSAP(() => {
    gsap.fromTo(
      ".projectshow",
      {
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".section8",
          start: "top 80%",
          end: "top 30%",
        },
      },
    );
  });
  return (
 <a href={props.project.link}>
     <div 
      className="group section8 w-full md:w-[90vw] lg:w-[45vw] 
                h-auto  lg:h-[69vh] mb-10"
    >
      {/* Image */}
      <div className="w-full projectshow h-[35vh] rounded-2xl md:h-[53vh] lg:h-[60vh] overflow-hidden">
        <img
          src={props.project.img}
          className="h-full w-full object-cover object-left 
                 transition duration-200 group-hover:scale-[1.02] lg:rounded-lg rounded-2xl "
          alt=""
        />
      </div>

      {/* Text */}
      <div
        className="flex flex-col md:flex-row md:justify-between 
                  gap-2 md:gap-10 mt-3"
      >
        <h1
          className="text-white text-xl md:text-2xl lg:text-3xl font3 
                   opacity-100 lg:opacity-0 
                   lg:group-hover:opacity-100 
                   lg:group-hover:-translate-y-3 transition"
        >
          {props.project.title}
        </h1>

        <h1
          className="text-orange-500 text-lg md:text-xl font3 
                   opacity-100 lg:opacity-0 
                   lg:group-hover:opacity-100 
                   lg:group-hover:-translate-y-3 transition"
        >
          {props.project.desc}
        </h1>
      </div>
    </div>
 </a>
  );
};

export default ProjectShow;
