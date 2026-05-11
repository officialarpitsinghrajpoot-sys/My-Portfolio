import React, { useState } from "react";
import echochat from "../assets/Images/EchoChat.webp";
import ProjectShow from "../Component/ProjectShow";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import  orderkaro  from "../assets/Images/orderkaro.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const ProjectComponent = () => {
  const [project, setProject] = useState([
    {
      img: orderkaro,
      title: "Order-Karo",
      desc: "Grocery delivery WebApp",
    },
    {
      img: echochat,
      title: "EchoChat",
      desc: "Real Time Chating Application",
    },
  ]);

   useGSAP(() => {
      gsap.fromTo(".projects", {
        y: 100,
        opacity: 0,
        // duration: 1,
        // scrollTrigger: {
        //   trigger: ".section4",
        //   start: "top 80%",
        // },
      },{
        y: 0,
        opacity: 1,
        duration: 1.7,
        scrub:2,
        scrollTrigger: {
          trigger: ".section4",
          start: "top 80%",
          end:"top 30%"
        },
      });
    });
  return (
    <div className="section4" >
        <h1 className="lg:text-6xl projects md:text-4xl text-2xl text-white md:px-10 px-5 pt-10 font5">Frontend / Ui Ux Projects </h1>
      <div className="p-5  lg:p-15 md:px-10  grid lg:grid-cols-2 grid-cols-1">
        {project.map((val,ind) => {
          return <ProjectShow key={ind} project={val} />;
        })}
      </div>
    </div>
  );
};

export default ProjectComponent;
