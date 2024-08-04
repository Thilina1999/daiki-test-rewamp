import React from "react";
import CounsultTitle from "../molecules/CounsultTitle";
import Cars from "../../assets/png/cars.png";
import ContentImages from "../molecules/ContentImages";

const Consult = () => {
  return (
    <div className="pt-7 pb-7 hide">
      <div className="relative rounded-3xl h-auto bg-white md:rounded-10 p-10 bg-no-repeat bg-cover bg-center flex items-center justify-center overflow-hidden shadow-sm">
        <div className="grid md:grid-cols-6 ">
          <ContentImages
            src={Cars}
            cols={"md:col-span-3 place-items-center"}
            styles={""}
          />
          <CounsultTitle />
        </div>
      </div>
    </div>
  );
};

export default Consult;
