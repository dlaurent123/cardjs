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
  CardText,
  CardFooter,
  CardFavoriteButton,
  MenueButton,
  MenueImgContainer,
  MenuItemsContainer,
} from "./cardStyles/CardStyles";
import previewImg from "../../assets/image.svg";
import star1 from "../../assets/Star.svg";
import star2 from "../../assets/Star-filled.svg";
import menueSvg from "../../assets/menue.svg";
import menueSvg2 from "../../assets/white-menue.svg";
import MenueItemsList from "./menuItemsList/MenueItemsList";

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

Card.Media = ({
  alt = "media-content",
  classes,
  isVideo = false,
  src = previewImg,
  ...rest
}) => {
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

Card.FavoriteButton = ({ classes, isActive, src, ...rest }) => {
  return (
    <CardFavoriteButton
      className={classNames("favorite-button", classes)}
      {...rest}
    >
      <img alt="favorite-button" src={isActive ? star2 : star1} />
    </CardFavoriteButton>
  );
};

Card.Menue = ({
  classes,
  isOpen = false,
  menueItems,
  menueItemClick,
  ...rest
}) => {
  return (
    <div>
      <MenueButton
        style={{
          backgroundColor: isOpen && "#1254FF",
          borderWidth: isOpen && "2px",
          borderColor: isOpen && "#AACBFF",
        }}
        className={classNames("menue-button", classes)}
        {...rest}
      >
        <MenueImgContainer>
          <img alt="menue-button" src={isOpen ? menueSvg2 : menueSvg} />
        </MenueImgContainer>
      </MenueButton>
      <MenuItemsContainer style={{ display: !isOpen && "none" }}>
        <MenueItemsList items={menueItems} onClick={menueItemClick} />
      </MenuItemsContainer>
    </div>
  );
};

export { Card };
