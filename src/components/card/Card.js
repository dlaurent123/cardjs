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
  MenuActionsContainer,
  MenueContainer,
} from "./cardStyles/CardStyles";
import previewImg from "../../assets/image.svg";
import star1 from "../../assets/Star.svg";
import star2 from "../../assets/Star-filled.svg";
import menueSvg from "../../assets/menue.svg";
import menueSvg2 from "../../assets/white-menue.svg";
import MenueActionsList from "./menuActions/MenueActionsList";

// Card is a component that renders a div that serves as the parent container for all the other card components.

// Props:
// all html attributes

const Card = ({ children, classes, ...rest }) => {
  return (
    <CardContainer className={classNames("card-container", classes)} {...rest}>
      {children}
    </CardContainer>
  );
};

// Card.Body is a component that renders a div serves as a container for all of the cards contents.

// Props:
// all html attributes

Card.Body = ({ children, classes, ...rest }) => {
  return (
    <Body className={classNames("card-container", classes)} {...rest}>
      {children}
    </Body>
  );
};

// Card.Heading is a simple component that renders a header element to display the heading.
// Props:

// text = string
// all html attributes

Card.Heading = ({ classes, text, ...rest }) => {
  return (
    <div style={{ width: "18vw" }}>
      <Heading className={classNames("card-heading", classes)} {...rest}>
        {text}
      </Heading>
    </div>
  );
};

// Card.SubHeading is a simple component that renders a header element to display the sub-heading.
// Props:

// text = string
// all html attributes
Card.SubHeading = ({ text, classes, ...rest }) => {
  return (
    <SubHeading className={classNames("card-sub-heading", classes)} {...rest}>
      {text}
    </SubHeading>
  );
};

// Card.Media is a simple component that has the ability to render all image types including SVG and video.
// Props:

// isVideo = Boolean default value false
// src = String
// all html attributes

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

// Card.Text is a simlple component that renders a p tag to display text.
// / Props:

// text = string
// all html attributes
Card.Text = ({ classes, text, ...rest }) => {
  return (
    <CardText className={classNames("card-text", classes)} {...rest}>
      {text}
    </CardText>
  );
};

// Card.Footer is a simple component that renders a footer tag that which serves as a container for the Card.FovoriteButton and the Card.Menue.

// Props:
// all html attributes

Card.Footer = ({ children, classes, ...rest }) => {
  return (
    <CardFooter className={classNames("card-footer", classes)} {...rest}>
      {children}
    </CardFooter>
  );
};

// Card.FavoriteButton is a simple component that renders a button that can be toggled between active and inactive.

// Props:
// isActive = boolean defaults to false
// all html attributes

Card.FavoriteButton = ({ classes, isActive = false, src, ...rest }) => {
  return (
    <CardFavoriteButton
      className={classNames("favorite-button", classes)}
      {...rest}
    >
      <img alt="favorite-button" src={isActive ? star2 : star1} />
    </CardFavoriteButton>
  );
};

// Card.Menue is a simple component that renders a menue button that can be toogled between opened and closed. When open the menue will display the menue actions which is passed through via the menueActions props.

// Props:
// isOpen = boolean defaults to false
// menueActions = array with string values
// menueActionClick = takes in a function that serves as the click handler for each menue action.
// all html attributes

Card.Menue = ({
  classes,
  isOpen = false,
  menueActions,
  menueActionClick,
  ...rest
}) => {
  return (
    <>
      <MenueContainer>
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
        <MenuActionsContainer style={{ display: !isOpen && "none" }}>
          <MenueActionsList
            actions={menueActions}
            menueActionClick={menueActionClick}
          />
        </MenuActionsContainer>
      </MenueContainer>
    </>
  );
};

export { Card };
