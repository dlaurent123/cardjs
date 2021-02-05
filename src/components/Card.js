import React from "react";
import classNames from "classnames";
import { CardContainer } from "./cardStyles/CardStyles";

const Card = ({ children, classes, ...rest }) => {
  return (
    <CardContainer className={classNames("card-container", classes)}>
      {children}
    </CardContainer>
  );
};

export { Card };
