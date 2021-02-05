import React from "react";
import classNames from "classnames";
import { CardContainer } from "./cardStyles/CardStyles";

const Card = ({ children, classes, ...rest }) => {
  return <CardContainer>{children}</CardContainer>;
};

export { Card };
