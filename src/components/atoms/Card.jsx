import React from "react";

const Card = ({ header, description, requrement }) => {
  return (
    <div
      className={`group h-100 mn:h-96 sx:h-80 xs:h-100 2xl:h-96 3xl:h-96 flex flex-col overflow-hidden rounded-3xl p-3 cursor-pointer md:col-span-3 relative`}
    >
      <div className="group absolute inset-0 flex flex-col pt-3 bg-black bg-opacity-5 hover:bg-opacity-20 transition-all duration-300 ease-in-out">
        <h2 className="flex relative mb-1 mx-auto text-center text-4xl font-extrabold text-black">
          {header}
        </h2>

        <p className=" text-gray-160 text-base font-normal text-justify leading-8 my-1  pr-10 pl-10">
          {description}
        </p>
        <h3 className="flex mb-1 text-xl text-left font-semibold text-black pl-10">
          Requrement
        </h3>
        <ul className="pl-14 list-decimal">
          {requrement.map((item, index) => (
            <li
              key={index}
              className="text-gray-160 text-base font-normal my-1"
            >
              {item.req}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
