import React, { useState } from "react";
import Archievement from "../Component/Archievement";
import GClogo from "../assets/Images/GClogo.webp";
import skillsvarz from "../assets/Images/skillsvarzlogo.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";   


const Archivementpage = () => {
  const [archiviement, setArchiviement] = useState([
    {
      title: "Certificate",
      Desc: "Successfully completed a comprehensive Front-End Development program from Gravity Coding, where I gained strong proficiency in building responsive and user-friendly web interfaces. Developed hands-on experience with modern technologies like HTML, CSS, Tailwind CSS, JavaScript, and React, along with a solid understanding of UI/UX principles and problem-solving. This certification reflects my ability to create efficient, scalable, and visually appealing web applications.",
      logo: GClogo,
      by: "Gravity Coding",
    },
    {
      title: "Certificate",
      Desc: "Awarded the Animation Master title at the Inter-Batch Hackathon 2.0,a web development competition organized by Gravity Coding. Collaborated as part of Team Leo Legends to design and implement creative, user-focused solutions, showcasing strong front-end development skills, problem-solving ability.",
      logo: skillsvarz,
      by: "Skillsvarz Gravity Coding pvt ltd.",
    },
  ]);

  useGSAP(() => {
    gsap.fromTo(
      ".Achievement",
      {
        y: 100,
        opacity: 0,
        // duration: 1,
        scrollTrigger: {
          trigger: ".section6",
          start: "top 60%",
        },
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".section6",
          start: "top 60%",
        },
      },
    );
  });
  return (
    <div className="section6">
      <h1 className="text-white Achievement lg:text-6xl md:text-4xl text-3xl font5 lg:mt-40 md:px-10 px-5 ">
        Achievement
      </h1>
      <section className="h-screen mb-20 mt-5   grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 lg:gap-7  cursor-pointer overflow-hidden  md:px-10 px-5">
        {archiviement.map((val, ind) => {
          return <Archievement key={ind} data={val} />;
        })}
      </section>
    </div>
  );
};

export default Archivementpage;
