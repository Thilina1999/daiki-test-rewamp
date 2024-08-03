import React from "react";

const TitleContent = ({ customStyles, text }) => {
  return (
    <div>
      <p className={`text-mainTitle ${customStyles}`}>{text}</p>
    </div>
  );
};

export default TitleContent;
