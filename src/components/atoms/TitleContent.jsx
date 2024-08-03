import React from "react";

const TitleContent = ({ customStyles, text }) => {
  return (
    <div>
      <p className={`px-5 ${customStyles}`}>{text}</p>
    </div>
  );
};

export default TitleContent;
