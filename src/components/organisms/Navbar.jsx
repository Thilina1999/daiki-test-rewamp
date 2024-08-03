import React, { useState, useEffect } from "react";
import NavLinks from "../molecules/NavLinks";
import MenuIcon from "../../assets/svgs/MenuIcon";
import CloseIcon from "../../assets/svgs/CloseIcon";
import logo from "../../assets/png/logo.png";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setCollapsed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`flex w-full h-20 ${
        collapsed ? "rounded-b-3xl" : "rounded-none"
      } transition-all duration-500 ease-in-out bg-white items-center m-auto justify-center sticky top-0 z-50 nav shadow-md`}
    >
      <div className="flex w-full lg:max-w-[1440px] lg:mx-auto justify-between items-center">
        <div className="cursor-pointer ml-8 max-w-[130px] max-h-[35px] md:max-w-[160px] md:max-h-[55px] ">
          <img alt="Daiki Logo" src={logo} />
        </div>
        <NavLinks isOpen={!collapsed} setCollapsed={setCollapsed} />
        <div
          className="md:hidden items-baseline p-2 flex self-center "
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed && <MenuIcon />}
          {!collapsed && <CloseIcon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
