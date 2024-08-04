import React from "react";
import TitleContent from "../atoms/TitleContent";

const LanguageTitle = () => {
  return (
    <div className="flex flex-col lg:col-span-3">
      <TitleContent
        text={"Daiki Japanese Language School ​Tokyo"}
        customStyles={
          "text-4xl font-extrabold text-title-black text-center pb-5 md:pl-14"
        }
      />
      <TitleContent
        text={
          "Our school aims to educate foreign students wishing to further their aspirations at universities, collages and professional training schools in Japan with a focus on Japanese Language, Japanese culture. In addition, school provides career guidance according to each student's goals."
        }
        customStyles={
          "text-base font-normal text-justify leading-8 text-gray-160 md:pl-14"
        }
      />
      <h3 className="flex mb-1 text-xl text-right font-semibold text-black pl-5 md:pl-14 pt-2">
        Requrement
      </h3>
      <ul className="pl-5 md:pl-16 list-decimal text-justify">
        <li className="text-gray-160 text-base font-normal my-1">Qualify to enter institutions of higher education such as universities, colleges and professional training colleges.</li>
        <li className="text-gray-160 text-base font-normal my-1">Success in Japanese Language Proficiency Tests. (JLPT/NAT)</li>
        <li className="text-gray-160 text-base font-normal my-1">Success in qualification tests.</li>
        <li className="text-gray-160 text-base font-normal my-1">World-class human resources development for employment purpose.</li>
      </ul>
    </div>
  );
};

export default LanguageTitle;
