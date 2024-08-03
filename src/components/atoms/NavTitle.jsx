import React from "react";
import { Link } from "react-router-dom";

const NavTitle = ({ header, isSelected, navLink, onClick }) => {
  return (
    <div>
      <Link className="nav-link" to={navLink}>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => {
            onClick();
          }}
        >
          <p
            className={`font-semibold md:text-xl hover:text-dark-blue hover:font-semibold  active:transition-all duration-300 delay-1500 ease-out ${
              isSelected
                ? "font-semibold text-dark-blue md:font-bold underline underline-offset-8 decoration-4"
                : "text-light-blue md:font-medium"
            }`}
          >
            {header}
          </p>
        </button>
      </Link>
    </div>
  );
};

export default NavTitle;
