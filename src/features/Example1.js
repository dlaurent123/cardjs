import React, { useState } from "react";
import { Card } from "../components/card/Card";

const Example1 = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const test = (e) => {
    alert(
      `This alert indicates that you've clicked the ${e.target.innerText} action`
    );
  };
  return (
    <Card>
      <Card.Media controls />
      <Card.Body>
        <Card.Heading text={"Countdown Announcement - Pass the test"} />
        <Card.SubHeading text={"Last edited 2 days ago"} />

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

export default Example1;
