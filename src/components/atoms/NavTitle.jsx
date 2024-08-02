import React from "react";

const NavTitle = ({header, isSelected, onClick}) => {
  return (
    <div>
      <button type="button" className="cursor-pointer" onClick={()=>{
        onClick()
      }}>
        <p
          className={`font-semibold md:text-xl hover:text-dark-blue hover:font-semibold  active:transition-all duration-150 delay-150 ease-out ${
            isSelected
              ? "font-semibold text-dark-blue md:font-bold underline underline-offset-8 decoration-4"
              : "text-light-blue md:font-medium"
          }`}
        >
          {header}
        </p>
      </button>
    </div>
  );
};

export default NavTitle;
