import React, { useState } from "react";
import classNames from "classnames";
import {
  CardContainer,
  Body,
  Heading,
  SubHeading,
  CardImage,
  CardMediaContainer,
  CardVideo,
  CardText,
  CardFooter,
  CardFavoriteButton,
} from "./cardStyles/CardStyles";
import previewImg from "../assets/image.svg";

const Card = ({ children, classes, ...rest }) => {
  const [isActive, setIsActive] = useState(false);
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

Card.Text = ({ classes, text, ...rest }) => {
  return (
    <CardText className={classNames("card-text", classes)} {...rest}>
      {text}
    </CardText>
  );
};

Card.Footer = ({ children, classes, ...rest }) => {
  return (
    <CardFooter className={classNames("card-footer", classes)} {...rest}>
      {children}
    </CardFooter>
  );
};

Card.FavouriteButton = ({
  alt = "",
  isActive,
  setIsActive,
  handleClick,
  classes,
  src,
  ...rest
}) => {
  return (
    <div style={{ height: "20px", display: "flex" }}>
      <CardFavoriteButton
        onClick={() => console.log(isActive)}
        alt={alt}
        className={classNames("favourite-button", classes)}
        src={src}
        {...rest}
        handleClick={(isActive) => handleClick(isActive)}
      />
    </div>
  );
};

export { Card };
