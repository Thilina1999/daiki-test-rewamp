import React from "react";
import EngineeringTitle from "../molecules/EngineeringTitle";
import Image from "../../assets/jpg/poster1_orig.jpg";
import ContentImages from "../molecules/ContentImages";

const Engineering = () => {
  return (
    <div className="pb-7 hide">
      <div className="relative rounded-3xl h-auto bg-white md:rounded-10 p-10 bg-no-repeat bg-cover bg-center flex items-center justify-center overflow-hidden shadow-sm">
        <div className="grid lg:grid-cols-6 ">
          <ContentImages
            src={Image}
            cols={"lg:col-span-3 justify-center md:place-items-center md:pl-10"}
            styles={""}
          />
          <EngineeringTitle />
        </div>
      </div>
    </div>
  );
};

export default Engineering;
