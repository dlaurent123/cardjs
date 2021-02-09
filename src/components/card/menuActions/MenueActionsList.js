import React from "react";
import { MenueAction, MenueActionContainer } from "../cardStyles/CardStyles";

const MenueActionsList = ({ actions }) => {
  return actions.map((action, i) => {
    return (
      <MenueActionContainer
        style={{ borderBottomStyle: i === actions.length - 1 && "none" }}
        onClick={action.clickHandler}
        key={`menue-action-${action.name}`}
      >
        <MenueAction>{action.name}</MenueAction>
      </MenueActionContainer>
    );
  });
};

export default MenueActionsList;
