import React from "react";

const ContentImages = ({ src, cols, styles }) => {
  return (
    <div className={`flex flex-col ${cols}`}>
      <img
        className={`sm:mx-4 rounded-3xl hover:scale-105 duration-300 ${styles}`} 
        src={src}
        alt="study-and-work"
      />
    </div>
  );
};

export default ContentImages;
