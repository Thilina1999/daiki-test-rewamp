import React from "react";
import { studyImage, youtubeLink } from "../../constants/molecules/DataContent";
import ContentImages from "../molecules/ContentImages";
import ContentVideo from "../molecules/ContentVideo";

const Content = () => {
  return (
    <div className="pb-7 hide">
      <div className="relative rounded-3xl h-auto bg-white md:rounded-10 p-10 bg-no-repeat bg-cover bg-center flex items-center justify-center overflow-hidden shadow-sm">
        <div>
          <div className="grid lg:grid-cols-6 gap-5 lg:gap-10 pb-5 md:pb-10">
            {studyImage.map((item, index) => (
              <ContentImages key={index} src={item.logo} />
            ))}
          </div>
          <div className="grid md:grid-cols-6">
            {youtubeLink.map((item, index) => (
              <ContentVideo key={index} videoId={item.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
