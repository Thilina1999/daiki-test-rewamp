import React from "react";
import AboutUsTitle from "../molecules/AboutUsTitle";

const AboutUs = () => {
  return (
    <div className="pt-7 pb-7 hide">
      <div className="relative rounded-3xl h-auto bg-white md:rounded-10 p-10 bg-no-repeat bg-cover bg-center flex items-center justify-center overflow-hidden shadow-sm">
        <AboutUsTitle />
      </div>
    </div>
  );
};

export default AboutUs;
