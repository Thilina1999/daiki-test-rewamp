import React from "react";
import backgroundImage from "../../assets/jpg/GW-bridge.jpg";

const Title = () => {
    return (
        <div className="min-h-screen pt-5 pb-5 hide">
          <div
            className="rounded-3xl h-80 bg-white p-4 md:rounded-10 md:p-10 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <h1 className="text-4xl font-bold text-center text-white">DAIKI JAPANESE STUDIES</h1>
            <h2 className="text-2xl font-semibold text-center text-white">BRIDGE TO JAPAN 日本への掛け橋</h2>
          </div>
        </div>
      );
};

export default Title;
