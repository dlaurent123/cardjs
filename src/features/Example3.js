import React, { useState } from "react";
import { Card } from "../components/card/Card";

const Example3 = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const test = (e) => {
    alert(
      `This alert indicates that you've clicked the ${e.target.innerText} action`
    );
  };
  return (
    <Card>
      <Card.Body>
        <Card.Heading text={"Important announcement - Pass the test"} />
        <Card.SubHeading text={"Last edited 2 days ago"} />
        <Card.Text
          text={
            "A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video, images, subheadings, actions, and content."
          }
        />
        <Card.Footer>
          <Card.FavoriteButton
            onClick={() => setIsActive(!isActive)}
            isActive={isActive}
          />
          <Card.Menue
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            menueActions={[
              { name: "Save", clickHandler: test },
              { name: "Edit", clickHandler: test },
              { name: "Preview", clickHandler: test },
            ]}
          />
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Example3;
