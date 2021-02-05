import React from "react";
import classNames from "classnames";
import { CardContainer, Body, Heading } from "./cardStyles/CardStyles";

const Card = ({ children, classes, ...rest }) => {
  return (
    <CardContainer className={classNames("card-container", classes)} {...rest}>
      {children}
    </CardContainer>
  );
};

Card.Body = ({ children, classes, ...rest }) => {
  return (
    <Body className={classNames("card-container", classes)} {...rest}>
      {children}
    </Body>
  );
};

Card.Heading = ({ classes, text, ...rest }) => {
  return (
    <div style={{ width: "15vw" }}>
      <Heading className={classNames("card-heading", classes)} {...rest}>
        {text}
      </Heading>
    </div>
  );
};

export { Card };
