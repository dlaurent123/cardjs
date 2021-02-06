import React from "react";
import classNames from "classnames";
import {
  CardContainer,
  Body,
  Heading,
  SubHeading,
  CardImage,
  CardMediaContainer,
  CardVideo,
} from "./cardStyles/CardStyles";
import previewImg from "../assets/image.svg";

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
    <div style={{ width: "18vw" }}>
      <Heading className={classNames("card-heading", classes)} {...rest}>
        {text}
      </Heading>
    </div>
  );
};

Card.SubHeading = ({ text, classes, ...rest }) => {
  return (
    <SubHeading className={classNames("card-sub-heading", classes)} {...rest}>
      {text}
    </SubHeading>
  );
};

Card.Media = ({ alt, classes, isVideo = false, src = previewImg, ...rest }) => {
  return (
    <CardMediaContainer className={classNames("card-media", classes)}>
      {isVideo ? (
        <CardVideo alt={alt} src={src} {...rest} />
      ) : (
        <CardImage alt={alt} src={src} {...rest} />
      )}
    </CardMediaContainer>
  );
};

export { Card };
