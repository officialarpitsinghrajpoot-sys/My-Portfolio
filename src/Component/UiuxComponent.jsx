import React, { useState } from "react";
import Bobble from "../assets/Images/bobble.png";
import Codex from "../assets/Images/codex.png";
import noralogo from "../assets/Images/noralogo.png";
import Beauty from "../assets/Images/beauty.png";
import ProjectShow from "../Component/ProjectShow";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import  Bicycle  from "../assets/Images/image.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const UiuxComponent = () => {
  const [project, setProject] = useState([
    {
      img: Bicycle,
      title: "Bicycle",
      desc: "Ui with animated",
      link: "https://www.figma.com/design/UOkgY4NMpQSnKa74aNI8A2/BICYCLE-ANIMATION?node-id=0-1&t=GDHjksAlzrCigyiN-1"
    },
    {
      img: Bobble,
      title: "BobbleShom Botttle",
      desc: "Full ui with animated",
      link: "https://www.figma.com/design/f5PUssL4IlfHY4R0oTm5ud/Untitled?node-id=41-144&t=TO1tkcQNspnb9Gni-1"
    },
    {
      img: Beauty,
      title: "Beauty Homepage",
      desc: "beauty Web Homepage with prototyping",
      link: "https://www.figma.com/design/gWawKh7KcvZvWAS2u7krhz/beauty?node-id=0-1&t=UWTk4pWC8koLgTJ2-1"
    },
     {
      img: Codex,
      title: "Gravity Codex Post",
      desc: "Complete Crujle Posts",
      link: "https://www.figma.com/design/qDBZrN0nf5FhV7SdIwedaO/codex-post?node-id=5-49&t=aP9dkjrpv25mUNNq-1"
    },
     {
      img: noralogo,
      title: "Nora Logo",
      desc: "Logo with animation",
      link: "https://www.figma.com/design/dZy1Io3vn5MQAuOoD6cv0Q/NORA-LOGO?node-id=0-1&t=z0YKs1I9UMwGesUI-1"
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
        <h1 className="lg:text-6xl projects md:text-4xl text-2xl text-white md:px-10 px-5 pt-10 font5">Ui/Ux Projects</h1>
      <div className="p-5  lg:p-15 md:px-10  grid lg:grid-cols-2 grid-cols-1">
        {project.map((val,ind) => {
          return <ProjectShow key={ind} project={val} />;
        })}
      </div>
    </div>
  );
};

export default UiuxComponent;
