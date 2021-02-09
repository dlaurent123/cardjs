import React, { useState } from "react";
import { Card } from "../components/card/Card";

const Example4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const test = (e) => {
    alert(
      `This alert indicates that you've clicked the ${e.target.innerText} action`
    );
  };
  return (
    <Card>
      <Card.Body>
        <Card.Heading text={"Important announcement"} />
        <Card.SubHeading text={"Last edited 4 hours ago"} />

        <Card.Footer>
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

export default Example4;
