import React, { useEffect, useState } from "react";
import { navLinkTitleItems } from "../../constants/molecules/NavLinks";
import NavTitle from "../atoms/NavTitle";
import { handleNavTitleClick } from "../../utils/NavTransition";

const NavLinks = ({ isOpen , setCollapsed }) => {
  const [navItemsList, setNavItemsList] = useState(navLinkTitleItems);

  console.log(navItemsList);
  return (
    <div className="md:flex items-center justify-between ">
      <ul
        className={`flex h-[calc(100vh-60px)] w-full md:h-17 top-15 overflow-hidden md:top-0 flex-col md:flex-row gap-10 md:static absolute -left-250 ${
            isOpen ? " left-0 " : "-left-200"
          } md:bg-gradient-to-b from-white md:from-30% to-white md:to-95% bg-gradient-to-b w-full md:w-auto transition-all duration-500 md:duration-100 ease-in-out px-7 pt-7 md:pt-0`}
      >
        {navItemsList.map((titleItem, index) => (
          <li key={index} className="flex items-start md:self-center">
            <NavTitle header={titleItem.header} isSelected={titleItem.isSelected} onClick={()=>{
                setNavItemsList(handleNavTitleClick(index))
                setCollapsed(true)
            }}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
