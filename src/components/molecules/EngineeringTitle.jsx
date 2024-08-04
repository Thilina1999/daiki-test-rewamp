import React from "react";
import TitleContent from "../atoms/TitleContent";

const EngineeringTitle = () => {
  return (
    <div className="flex flex-col md:col-span-3">
      <TitleContent
        text={"Consulting to build your ​career​ in​ Japan"}
        customStyles={
          "text-4xl font-extrabold text-title-black text-center pb-5 md:pr-14"
        }
      />
      <TitleContent
        text={
          "Provides the latest technologies to various manufactures including Automobiles, Ships, Air Crafts and all IT services"
        }
        customStyles={
          "text-base font-normal text-justify leading-8 text-gray-160 pl-0 md:pr-10"
        }
      />
      <h3 className="flex mb-1 text-base font-normal text-justify leading-8 text-gray-160 md:pr-14">
        Head Office : Hiroshima
      </h3>
      <h3 className="flex mb-1 text-base font-normal text-justify leading-8 text-gray-160 md:pr-14">
        Branches : Tokyo, Tokai, Osaka, Tohoku, Nagasaki, Fukuoka
      </h3>
      <h3 className="flex mb-1 text-base font-normal text-justify leading-8 text-gray-160 md:pr-14">
        Clients : Toyota, Mitsubishi, Hitachi, IHI, Kawasaki, Mazda, etc.
      </h3>
    </div>
  );
};

export default EngineeringTitle;