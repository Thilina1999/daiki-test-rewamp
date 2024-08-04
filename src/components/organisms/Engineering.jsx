import React from "react";
import EngineeringTitle from "../molecules/EngineeringTitle";
import Image from "../../assets/jpg/poster1_orig.jpg";
import ContentImages from "../molecules/ContentImages";

const Engineering = () => {
  return (
    <div className="pb-7 hide">
      <div className="relative rounded-3xl h-auto bg-white md:rounded-10 p-10 bg-no-repeat bg-cover bg-center flex items-center justify-center overflow-hidden shadow-sm">
        <div className="grid md:grid-cols-6 ">
          <ContentImages
            src={Image}
            cols={"md:col-span-3  place-items-center"}
            styles={"full"}
          />
          <EngineeringTitle />
        </div>
      </div>
    </div>
  );
};

export default Engineering;
