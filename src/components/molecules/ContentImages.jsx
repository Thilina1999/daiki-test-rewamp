import React from "react";

const ContentImages = ({ src }) => {
  return (
    <div className=" flex flex-col lg:col-span-3">
      <img
        className="sm:mx-4 rounded-3xl hover:scale-105 duration-300"
        src={src}
        alt="study-and-work"
      />
    </div>
  );
};

export default ContentImages;
