import React from "react";
import TitleContent from "../atoms/TitleContent";

const ContactUsTitle = () => {
  return (
    <div className="pb-5">
        <TitleContent
          text={"Send us a message !"}
          customStyles={
            "md:text-mainTitle text-4xl font-extrabold pb-2 text-title-black text-center pb-3"
          }
        />
        <TitleContent
          text={
            "Send us a message and we will get back to you as soon as possible. We look forward to hearing from you."
          }
          customStyles={
            "text-base font-normal text-center leading-8 text-gray-160"
          }
        />
    </div>
  );
};

export default ContactUsTitle;
