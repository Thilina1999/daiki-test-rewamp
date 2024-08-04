import React from 'react'
import TitleContent from "../atoms/TitleContent";
import { OfficialData } from '../../constants/molecules/OfficailsData';
import TeamImage from "../molecules/TeamImage";

const Officails = () => {
    return (
        <div className="pb-7 hide">
          <div className="relative rounded-3xl h-auto bg-white md:rounded-10 p-10 bg-no-repeat bg-cover bg-center flex items-center justify-center overflow-hidden shadow-sm">
            <div>
              <TitleContent
                text={"With Officials"}
                customStyles={
                  "text-4xl font-extrabold text-title-black text-center pb-5"
                }
              />
              <div className="grid sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 gap-5 pt-5 justify-items-center">
                {OfficialData.map((item, index) => {
                  return (
                    <TeamImage
                      key={index}
                      imgURL={item.imageUrl}
                      style={"h-48 w-48 md:h-52 md:w-52 lg:w-64 lg:h-64"}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
}

export default Officails
