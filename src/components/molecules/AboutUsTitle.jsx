import React from "react";
import TitleContent from "../atoms/TitleContent";

const AboutUsTitle = () => {
  return (
    <div className="pb-5">
      <TitleContent
        text={"We promise you the BEST"}
        customStyles={
          "md:text-mainTitle text-4xl font-extrabold text-title-black text-center pb-5"
        }
      />
      <TitleContent
        text={
          "Daiki Lanka is an established company in Sri Lanka since 2010.We already get employed 140 Sri Lankans (100 trainees and 40 engineers) in Japan. We are the one and only consulting service in Sri Lanka who own Japanese Language School in Japan."
        }
        customStyles={
          "text-base font-normal text-justify leading-8 text-gray-160"
        }
      />
      <TitleContent
        text={
          "Requirement:"
        }
        customStyles={
          "text-base font-extrabold text-left text-lg leading-8 text-black pt-5"
        }
      />
            <TitleContent
        text={
          "Best advise we can give you is you must learn Japanese before you start your career in Japan."
        }
        customStyles={
          "text-base font-normal text-justify leading-8 text-gray-160 pt-2"
        }
      />
    </div>
  );
};

export default AboutUsTitle;
