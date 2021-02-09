import React from "react";
import { Card } from "../components/card/Card";

const Example4 = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Heading text={"Important announcement"} />
        <Card.SubHeading text={"Last edited 1 week ago"} />
      </Card.Body>
    </Card>
  );
};

export default Example4;
