import React from "react";
import TitleContent from "../atoms/TitleContent";
import Card from "../atoms/Card";
import { selectedType } from "../../constants/molecules/WelcomeType";

const WelcomeContent = () => {
  return (
    <div>
      <div>
        <TitleContent
          text={"Welcome to Daiki Japanese Studies"}
          customStyles={
            "text-4xl font-extrabold pb-2 text-title-black text-center"
          }
        />
        <TitleContent
          text={
            "Japan is a prosperous country and has the most diverse economy in Asia. The leading Japanese companies are among the largest, most efficiently run, and most well-known firms in the world. Familiar names like Sony, Toshiba, Sanyo, Casio, Canon, Minolta, Honda, Toyota, Mitsubishi, and many others have infiltrated the world market in a variety of sectors.Whether you're in the field of business, engineering, manufacturing, research, economics, or politics, chances are you will be competing with, if not working for, a Japanese entity."
          }
          customStyles={
            "text-base font-normal text-justify leading-8 text-gray-160"
          }
        />
      </div>
      <div className="grid lg:grid-cols-6 gap-6 pt-7">
        {selectedType.map((item, index) => (
          <Card
            key={index}
            header={item.header}
            description={item.description}
            requrement={item.requrement}
          />
        ))}
      </div>
    </div>
  );
};

export default WelcomeContent;
