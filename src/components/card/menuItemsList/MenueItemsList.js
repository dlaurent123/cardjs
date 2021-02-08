import React from "react";
import { MenueItem, MenueItemContainer } from "../cardStyles/CardStyles";

const MenueItemsList = ({ items, onClick }) => {
  return items.map((item, i) => {
    return (
      <MenueItemContainer
        style={{ borderBottomStyle: i === items.length - 1 && "none" }}
        onClick={onClick}
        key={`menue-item-${item}`}
      >
        <MenueItem>{item}</MenueItem>
      </MenueItemContainer>
    );
  });
};

export default MenueItemsList;
