import React from "react";
import TitleContent from "../atoms/TitleContent";
import { DaikiTeamData } from "../../constants/molecules/DataContent";
import TeamImage from "../molecules/TeamImage";

const DaikiTeam = () => {
  return (
    <div className="pb-7 hide">
      <div className="relative rounded-3xl h-auto bg-white md:rounded-10 p-10 bg-no-repeat bg-cover bg-center flex items-center justify-center overflow-hidden shadow-sm">
        <div>
          <TitleContent
            text={"Our Team"}
            customStyles={
              "text-4xl font-extrabold text-title-black text-center pb-5"
            }
          />
          <div className="grid sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 gap-5 pt-5 lg:gap-10 pb-5 md:pb-10 justify-items-center">
            {DaikiTeamData.map((item, index) => {
              return (
                <TeamImage
                  key={index}
                  imgURL={item.imageUrl}
                  name={item.name}
                  position={item.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaikiTeam;
