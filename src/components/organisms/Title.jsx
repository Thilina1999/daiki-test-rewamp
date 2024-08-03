import React from "react";
import backgroundImage from "../../assets/jpg/GW-bridge.jpg";
import MainTitleHome from "../molecules/MainTitleHome";

const Title = () => {
  return (
    <div className="pt-7 pb-7 hide">
      <div
        className="relative rounded-3xl h-auto sm:h-80 bg-white p-4 md:rounded-10 md:p-10 bg-no-repeat bg-cover bg-center flex items-center justify-center overflow-hidden shadow-sm"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-35 hover:opacity-55 transition-all ease-in duration-500"></div>
        <div className="relative flex flex-col justify-center">
          <MainTitleHome />
        </div>
      </div>
    </div>
  );
};

export default Title;
