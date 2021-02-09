import React from "react";
import { MenueAction, MenueActionContainer } from "../cardStyles/CardStyles";

const MenueActionsList = ({ actions, onClick }) => {
  return actions.map((action, i) => {
    return (
      <MenueActionContainer
        style={{ borderBottomStyle: i === actions.length - 1 && "none" }}
        onClick={onClick}
        key={`menue-action-${action}`}
      >
        <MenueAction>{action}</MenueAction>
      </MenueActionContainer>
    );
  });
};

export default MenueActionsList;
