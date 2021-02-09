import React, { useState } from "react";
import { Card } from "../components/card/Card";
import video from "../assets/video2.mp4";

const Example2 = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const test = (e) => {
    alert(
      `This alert indicates that you've clicked the ${e.target.innerText} action`
    );
  };
  return (
    <Card>
      <Card.Media controls isVideo={true} src={video} />
      <Card.Body>
        <Card.Heading text={"Important Announcement - Pass the test"} />
        <Card.SubHeading text={"Last edited 2 days ago"} />
        <Card.Text
          text={
            "This Video displays a E-Commerce business owner who is happy because Cogsy’s Inventory Prioritization Matrix helped her increase cash flow."
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

export default Example2;
