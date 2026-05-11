import React, { useRef } from "react";
import AboutCom from "../Component/AboutCom";
import Footer from "../Component/Footer";
const About = () => {
  return (
    <div>
      <div className="h-[120vh] w-full mt-5 bg-black">
        <AboutCom />
      </div>
      <Footer />
    </div>
  );
};

export default About;
