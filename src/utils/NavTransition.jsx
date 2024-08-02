import { navLinkTitleItems } from "../constants/molecules/NavLinks";

export const handleNavTitleClick = (number) => {
    const updateArray = navLinkTitleItems.map((item) => {
      if (item.index === number) {
        return { ...item, isSelected: true }
      }
      return { ...item, isSelected: false }
    });
    return updateArray;
  };