import React from "react";
import TitleContent from "../atoms/TitleContent";

const CounsultTitle = () => {
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
          "We are representing Daiki Group of Japan in Sri Lanka. Being a bridge between Sri Lanka and Japan we found number of similarities and differences in both countries. As a result of that we were able to  create opportunities for Sri Lankans who willing to learn/work in Japan."
        }
        customStyles={
          "text-base font-normal text-justify leading-8 text-gray-160 md:pr-10"
        }
      />
    </div>
  );
};

export default CounsultTitle;
