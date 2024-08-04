import React from "react";

const TeamImage = ({ imgURL, name, col, position }) => {
  return (
    <div className={`flex flex-col sm:col-span-3 md:col-span-2 lg:col-span-2`}>
      <img
        className="mx-auto mb-4 h-48 w-48 md:h-52 md:w-52 lg:w-72 lg:h-64 rounded-xl hover:scale-105 duration-300"
        src={imgURL}
        alt="Avatar"
      />
      <h3 className="mb-1 text-lg lg:text-2xl font-semibold text-center tracking-tight cursor-pointer">
        {name}
      </h3>
      <h3 className="mb-1 text-lg font-normal text-center tracking-tight cursor-pointer">
        {position}
      </h3>
    </div>
  );
};

export default TeamImage;
